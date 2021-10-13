import {
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { getGenreByTempeture } from './utils';

export const ShazamProviderContext = createContext({
  loading: false,
  playlist: [],
});

const ShazamProvider = ({ children }) => {
  const toast = useToast();

  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);

  const toastErrorGetLocation = (title, message) => toast({
    title,
    description: message,
    status: 'error',
    duration: 5000,
    isClosable: true,
    variant: 'top-accent',
    position: 'top-right',
  });

  const getMusicByTemperature = (temperature) => {
    if (!temperature) return;

    setLoading(true);

    const options = {
      method: 'GET',
      url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
      params: { genre_code: getGenreByTempeture(temperature), limit: '10' },
      headers: {
        'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
        'x-rapidapi-key': '23c098e44cmsh1744e6261cb7efep1c74a3jsn5bb6a8169eb2',
      },
    };

    axios.request(options)
      .then((response) => {
        setPlaylist(response.data);
      })
      .catch((error) => {
        toastErrorGetLocation('Error getting Musics', error.message);
      })
      .finally(() => setLoading(false));
  };

  const contextValues = {
    loading,
    playlist,
    getMusicByTemperature,
  };

  return (
    <ShazamProviderContext.Provider value={contextValues}>
      {children}
    </ShazamProviderContext.Provider>
  );
};

ShazamProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShazamProvider;

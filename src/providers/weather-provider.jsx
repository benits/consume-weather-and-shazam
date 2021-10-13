import {
  Center,
  Heading,
  Image,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import LocationBlock from '../assets/block.png';

const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const WeatherProviderContext = createContext({
  loading: false,
  weather: {},
});

const WeatherProvider = ({ children }) => {
  const toast = useToast();

  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState(false);

  const getWeather = (lat, long) => axios.get(API_WEATHER_URL, {
    params: {
      lat,
      lon: long,
      appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
      lang: 'pt',
      units: 'metric',
    },
  });

  const getWeatherforSearchByCity = (city) => axios.get(API_WEATHER_URL, {
    params: {
      q: city,
      appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
      lang: 'pt',
      units: 'metric',
    },
  });

  const toastErrorGetLocation = (title, message) => toast({
    title,
    description: message,
    status: 'error',
    duration: 5000,
    isClosable: true,
    variant: 'top-accent',
    position: 'top-right',
  });

  const successGetLocation = (position) => {
    setLoading(true);

    getWeather(position.coords.latitude, position.coords.longitude)
      .then(
        (result) => setWeather(result.data),
      )
      .catch((error) => toastErrorGetLocation('Error getting Weather', error.message))
      .finally(() => setLoading(false));

    setLocation(true);
  };

  const submitSearchByCity = (city) => {
    if (!city) return;

    setLoading(true);

    getWeatherforSearchByCity(city)
      .then((result) => {
        setWeather(result.data);
      })
      .catch((error) => toastErrorGetLocation('Error getting Weather', error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      () => toastErrorGetLocation('Error getting location', 'Você precisa habilitar sua localização'),
    );
  }, []);

  if (!location) {
    return (
      <Center my={8} flexDirection="column">
        <Image src={LocationBlock} height="100px" />
        <Heading fontSize="2xl" mt={4}>
          Você precisa habilitar sua localização
        </Heading>
        <Text>
          Em seguida
          {' '}
          <Link href="/" colorScheme="blue" color="blue.600" fontWeight="semibold" textDecoration="underline">atualize a pagina</Link>
        </Text>
      </Center>
    );
  }

  const contextValues = {
    loading,
    weather,
    submitSearchByCity,
  };

  return (
    <WeatherProviderContext.Provider value={contextValues}>
      {children}
    </WeatherProviderContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeatherProvider;

import { useContext } from 'react';
import { ShazamProviderContext } from '../providers/shazam/shazam-provider';

const useShazam = () => useContext(
  ShazamProviderContext,
);

export default useShazam;

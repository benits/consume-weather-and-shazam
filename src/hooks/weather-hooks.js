import { useContext } from 'react';
import { WeatherProviderContext } from '../providers/weather-provider';

const useWeather = () => useContext(
  WeatherProviderContext,
);

export default useWeather;

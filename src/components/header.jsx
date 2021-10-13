import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useWeather from '../hooks/weather-hooks';
import Loading from './loading';
import WeatherDisplay from './weather-display';

const Header = () => {
  const {
    register, handleSubmit, setValue,
  } = useForm();
  const { loading, weather, submitSearchByCity } = useWeather();

  const onSubmit = (data) => submitSearchByCity(data.city);

  useEffect(() => {
    if (weather?.name) setValue('city', weather?.name);
  }, [weather]);

  return (
    <Center my={8}>
      <Box width="full" px={8}>

        {!!loading && (
          <Loading />
        )}

        {!loading && !!weather && (
          <WeatherDisplay
            temperature={weather.main.temp}
            local={weather.name}
            description={weather.weather[0].description}
          />
        )}

        <Box mt={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack spacing={4} alignItems="end">

              <FormControl id="city" isRequired>
                <FormLabel htmlFor="city">Buscar por cidade:</FormLabel>
                <Input
                  id="city"
                  type="text"
                  placeholder="Digite o nome de uma cidade"
                  {...register('city', { required: true })}
                />
              </FormControl>

              <Button type="submit" colorScheme="blue" isLoading={loading}>Buscar</Button>
            </HStack>
          </form>
        </Box>
      </Box>
    </Center>
  );
};

export default Header;

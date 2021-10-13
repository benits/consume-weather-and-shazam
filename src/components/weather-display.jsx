import {
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const WeatherDisplay = ({ local, description, temperature }) => (
  <VStack spacing={4} alignItems="flex-start">
    <Stack spacing={[2, 4]} direction={['column', 'row']}>
      <Text fontSize="xl">Clima na localização:</Text>
      <Heading fontSize="2xl">
        {local}
        (
        {description}
        )
      </Heading>
    </Stack>
    <Stack spacing={[2, 4]} direction={['column', 'row']}>
      <Text fontSize="lg">Temperatura atual:</Text>
      <Heading fontSize="lg">
        {temperature}
        °
      </Heading>
    </Stack>
  </VStack>
);

WeatherDisplay.propTypes = {
  description: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default WeatherDisplay;

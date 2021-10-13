import {
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplay = ({ local, description, temperature }) => (
  <>
    <HStack spacing={4}>
      <Text fontSize="xl">Clima na localização:</Text>
      <Heading fontSize="2xl">
        {local}
        (
        {description}
        )
      </Heading>
    </HStack>
    <HStack spacing={4}>
      <Text fontSize="lg">Temperatura atual:</Text>
      <Heading fontSize="lg">
        {temperature}
        °
      </Heading>
    </HStack>
  </>
);

WeatherDisplay.propTypes = {
  description: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default WeatherDisplay;

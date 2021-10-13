import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import WeatherProvider from './providers/weather-provider';

import PageMain from './container/page-main';
import ShazamProvider from './providers/shazam/shazam-provider';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WeatherProvider>
        <ShazamProvider>
          <PageMain />
        </ShazamProvider>
      </WeatherProvider>
    </ChakraProvider>
  );
}

export default App;

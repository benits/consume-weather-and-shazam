import {
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text, VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import useShazam from '../hooks/shazam-hooks';
import useWeather from '../hooks/weather-hooks';
import Loading from './loading';

function MusicSection() {
  const { playlist, loading, getMusicByTemperature } = useShazam();
  const { weather } = useWeather();

  useEffect(() => {
    if (weather?.main?.temp) getMusicByTemperature(weather?.main?.temp);
  }, [weather]);

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab _focus={{ outline: 'none' }} fontWeight="semibold">Musicas Recomendadas</Tab>
        <Tab _focus={{ outline: 'none' }} fontWeight="semibold">Musicas Salvas</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid columns={3} spacing={10}>
            {!!loading && <Loading />}
            {!loading && playlist.map((music) => (
              <Center
                key={music.id}
                p={2}
                maxWidth="sm"
                flexDirection="column"
                borderColor="gray.100"
                borderWidth="1px"
                borderRadius="md"

              >
                <Image src={music.images.coverart} height="250px" />
                <Flex>
                  <VStack mt={4} maxWidth="250px" width="250px" alignItems="baseline" as={Link} href={music.url}>
                    <Heading as="h4" fontSize="lg">{music.title}</Heading>
                    <Text>
                      Autor:
                      {' '}
                      {music.subtitle}
                    </Text>
                  </VStack>

                </Flex>
              </Center>
            ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MusicSection;

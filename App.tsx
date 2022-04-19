import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Spinner, Box } from 'native-base';

import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_900Black,
  });

  return (
    <>
      <StatusBar style="light" />
      <NativeBaseProvider theme={theme}>
        {fontsLoaded ? (
          <Routes />
        ) : (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Spinner color="#FF6200" size="lg" />
          </Box>
        )}
      </NativeBaseProvider>
    </>
  );
};

export default App;

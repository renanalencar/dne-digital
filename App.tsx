import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Spinner, Box } from 'native-base';

import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';

import AppProvider from './src/hooks';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_900Black,
  });

  return (
    <>
      <StatusBar style="light" />
      <NativeBaseProvider theme={theme}>
        <AppProvider>
          {fontsLoaded ? (
            <Routes />
          ) : (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Spinner color="#FF6200" size="lg" />
            </Box>
          )}
        </AppProvider>
      </NativeBaseProvider>
    </>
  );
};

export default App;

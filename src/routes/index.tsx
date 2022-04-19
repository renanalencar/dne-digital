import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routes } from './routes';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      {/*
      // @ts-ignore */}
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        {routes.map(({ name, component }) => (
          <Screen key={name} name={name} component={component} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

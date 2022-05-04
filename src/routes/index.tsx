import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Document, ValidateDocumentDTO } from '../hooks/document';
import { colors } from '../styles/colors';
import { routes } from './routes';

const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamsList = {
  AddDocument: { params: ValidateDocumentDTO };
  DocumentDetails: { params: Document };
};

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      {/*
      // @ts-ignore */}
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.brand.dark[500],
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

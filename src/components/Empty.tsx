import React from 'react';

import { Center, Image } from 'native-base';

import emptyImg from '../assets/empty.png';
import { Text } from './Text';

type EmptyProps = {
  message: string;
};

export const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <Center flex={1}>
      <Image source={emptyImg} alt="Pranchetas de documentos" />
      <Text textAlign="center" marginTop="16px">
        {message}
      </Text>
    </Center>
  );
};

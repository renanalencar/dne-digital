import React, { useCallback } from 'react';

import { Box, Image } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import heroImage from '../assets/hero.png';
import { Background } from '../components/Background';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Text } from '../components/Text';

export const GetStarted: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Home' as never);
  }, [navigation]);

  return (
    <Background>
      <Image
        marginTop="48px"
        source={heroImage}
        alt="Ilustração de um Documento Nacional do Estudante"
      />
      <Container justifyContent="space-between" marginTop="32px">
        <Box>
          <Header title={`Seu documento estudantil${'\n'}todo digital.`} />
          <Text marginTop="12px">
            Digitalize seu Documento Nacional do Estudante válido através do QR
            Code e tenha ele sempre disponível no seu dispositivo!
          </Text>
        </Box>
        <Button marginBottom="20px" onPress={handleNavigation}>
          Começar
        </Button>
      </Container>
    </Background>
  );
};

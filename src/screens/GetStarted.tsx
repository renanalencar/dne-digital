import React, { useCallback } from 'react';

import { MotiView } from 'moti';
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
      <MotiView
        from={{
          translateX: -100,
        }}
        animate={{
          translateX: 100,
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 5000,
          delay: 100,
        }}
      >
        <Image
          marginX="auto"
          marginTop="48px"
          width={710 / 1.9}
          height={426 / 1.9}
          resizeMethod="resize"
          source={heroImage}
          alt="Ilustração de um Documento Nacional do Estudante"
        />
      </MotiView>
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

import React, { useCallback } from 'react';

import { Icon } from 'native-base';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../components/Background';
import { CircleButton } from '../components/CircleButton';
import { Container } from '../components/Container';
import { Empty } from '../components/Empty';
import { Header } from '../components/Header';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleAddDocument = useCallback(() => {
    navigation.navigate('Scan' as never);
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Header title="Seus Documentos" />
        <Empty message={`Você ainda não adicionou${'\n'}nenhum documento.`} />
        <CircleButton
          position="absolute"
          right="20px"
          bottom="20px"
          onPress={handleAddDocument}
        >
          <Icon as={Feather} name="plus" size="24px" color="brand.light.500" />
        </CircleButton>
      </Container>
    </Background>
  );
};

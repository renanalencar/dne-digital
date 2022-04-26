import React, { useCallback, useEffect } from 'react';

import { FlatList, Icon, useToast } from 'native-base';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../components/Background';
import { CircleButton } from '../components/CircleButton';
import { Container } from '../components/Container';
import { DocumentCard } from '../components/DocumentCard';
import { Empty } from '../components/Empty';
import { Header } from '../components/Header';
import { Toast } from '../components/Toast';
import { useDocument } from '../hooks/document';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const { load, documents } = useDocument();
  const toast = useToast();

  useEffect(() => {
    try {
      load();
    } catch (error) {
      toast.show({
        render: () => <Toast type="danger">{String(error)}</Toast>,
      });
    }
  }, [load, toast]);

  const handleAddDocument = useCallback(() => {
    navigation.navigate('Scan' as never);
  }, [navigation]);

  const handleSelect = useCallback(
    (index: number) => {
      navigation.navigate(
        'DocumentDetails' as never,
        {
          params: documents[index],
        } as never,
      );
    },
    [navigation, documents],
  );

  return (
    <Background>
      <Container>
        <Header title="Seus Documentos" />
        {documents.length ? (
          <FlatList
            marginY="18px"
            data={documents}
            keyExtractor={item => item.docParams.certificado}
            renderItem={({ item, index }) => (
              <DocumentCard data={item} onPress={() => handleSelect(index)} />
            )}
          />
        ) : (
          <Empty message={`Você ainda não adicionou${'\n'}nenhum documento.`} />
        )}
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

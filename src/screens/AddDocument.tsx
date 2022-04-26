import React, { useCallback, useEffect, useState } from 'react';

import { Box, useToast } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Background } from '../components/Background';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Document } from '../components/Document';
import { DocumentSkeleton } from '../components/DocumentSkeleton';
import { Header } from '../components/Header';
import { Toast } from '../components/Toast';
import {
  useDocument,
  ValidateDocumentDTO,
  ValidateDocumentResponse,
} from '../hooks/document';
import { RootStackParamsList } from '../routes';

type AddDocumentProps = NativeStackScreenProps<
  RootStackParamsList,
  'AddDocument'
>;

type DocumentDTO = {
  docParams: ValidateDocumentResponse;
  reqParams: ValidateDocumentDTO;
};

export const AddDocument: React.FC<AddDocumentProps> = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const toast = useToast();
  const [params, setParams] = useState<ValidateDocumentDTO>(() => {
    const { params: routeParams } = route.params;

    return routeParams;
  });
  const [documentInfo, setDocumentInfo] = useState<DocumentDTO>(
    {} as DocumentDTO,
  );
  const { save, validate } = useDocument();

  const loadDocumentInfo = useCallback(async () => {
    try {
      const response = await validate(params);

      if (response.status === 'false') {
        navigation.navigate('Home' as never);

        toast.show({
          render: () => <Toast type="danger">Erro: {response.mensagem}!</Toast>,
        });
        return;
      }

      setDocumentInfo({ docParams: response, reqParams: params });
      setIsLoading(false);
    } catch (error) {
      navigation.navigate('Home' as never);

      toast.show({
        render: () => <Toast type="danger">Algo deu errado!</Toast>,
      });

      setIsLoading(false);
    }
  }, [params, toast, navigation, validate]);

  useEffect(() => {
    loadDocumentInfo();
  }, [loadDocumentInfo]);

  const handleAddDocument = useCallback(async () => {
    try {
      await save(documentInfo);
    } catch (error) {
      toast.show({
        render: () => <Toast type="danger">{String(error)}</Toast>,
      });
    } finally {
      navigation.navigate('Home' as never);
    }
  }, [navigation, save, documentInfo, toast]);

  const handleCancel = useCallback(() => {
    setParams({} as ValidateDocumentDTO);

    navigation.navigate('Home' as never);
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Header
          title="Adicionar"
          subtitle="Verifique as informações do seu documento."
        />
        {isLoading && <DocumentSkeleton />}

        {!isLoading && (
          <Box flex={1} justifyContent="space-between" marginTop="12px">
            <Document data={documentInfo} />
            <Box marginBottom="20px">
              <Button marginBottom="8px" onPress={handleAddDocument}>
                Adicionar
              </Button>
              <Button onPress={handleCancel} type="secondary" isSecondary>
                Cancelar
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Background>
  );
};

import React, { useCallback, useRef, useState } from 'react';

import { Icon, useToast } from 'native-base';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Alert } from '../components/Alert';
import { Background } from '../components/Background';
import { CircleButton } from '../components/CircleButton';
import { Container } from '../components/Container';
import { Document } from '../components/Document';
import { Header } from '../components/Header';
import { Toast } from '../components/Toast';
import { useDocument } from '../hooks/document';
import { RootStackParamsList } from '../routes';

type DocumentDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'DocumentDetails'
>;

export const DocumentDetails: React.FC<DocumentDetailsProps> = ({ route }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const { remove } = useDocument();
  const toast = useToast();

  const onClose = useCallback(() => setIsOpen(false), []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleDelete = useCallback(async () => {
    try {
      await remove(route.params.params.reqParams.codigoUso);

      toast.show({
        render: () => (
          <Toast type="success">Documento removido com sucesso!</Toast>
        ),
      });
    } catch (error) {
      toast.show({
        render: () => <Toast type="danger">{String(error)}</Toast>,
      });
    } finally {
      navigation.navigate('Home' as never);
    }
  }, [route, remove, toast, navigation]);

  return (
    <>
      <Background>
        <Container>
          <Header
            hasGoback={handleGoBack}
            title="Detalhes"
            marginBottom="18px"
          />
          <Document data={route.params.params} />
          <CircleButton
            isSecondary
            position="absolute"
            right="50%"
            bottom="20px"
            onPress={() => setIsOpen(true)}
          >
            <Icon
              as={Feather}
              name="trash"
              size="24px"
              color="brand.light.500"
            />
          </CircleButton>
        </Container>
      </Background>
      <Alert
        isOpen={isOpen}
        onClose={onClose}
        title="Excluir documento"
        action={handleDelete}
        leastDestructiveRef={cancelRef}
        cancelRef={cancelRef}
        actionText="Excluir"
      >
        Tem certeza que deseja excluir este documento?
      </Alert>
    </>
  );
};

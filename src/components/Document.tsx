import React from 'react';

import { Box, Center, Image, VStack } from 'native-base';
import QRCode from 'react-native-qrcode-svg';

import anpgImg from '../assets/anpg.png';
import dneImg from '../assets/dne.png';
import ubesImg from '../assets/ubes.png';
import uneImg from '../assets/une.png';
import yearImg from '../assets/year.png';
import {
  ValidateDocumentDTO,
  ValidateDocumentResponse,
} from '../hooks/document';
import { Text } from './Text';

type DocumentProps = {
  data: {
    docParams: ValidateDocumentResponse;
    reqParams: ValidateDocumentDTO;
  };
};

export const Document: React.FC<DocumentProps> = ({ data }) => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        borderRadius="4px"
        bgColor="brand.dne.500"
        padding="16px"
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="12px"
        >
          <Image source={dneImg} alt="Logo da DNE" />
          <Box flexDirection="row" alignItems="center">
            <Image source={uneImg} alt="Logo da UNE" />
            <Image source={ubesImg} marginLeft="8px" alt="Logo da UBES" />
            <Image source={anpgImg} marginLeft="8px" alt="Logo da ANPG" />
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            w="127px"
            h="158px"
            borderRadius="4px"
            source={{ uri: data.docParams.foto }}
            alt={data.docParams.nome}
          />
          <Box alignItems="center">
            {/*
              //@ts-ignore */}
            <QRCode
              value={`https://meiaentrada.org.br/validador/${data.reqParams.codigoUso}/${data.reqParams.dataNascimento}`}
              backgroundColor="#F2EEF6"
              color="#2E203C"
              quietZone={8}
            />

            <Text fontWeight={700} marginTop="8px">
              {data.reqParams.codigoUso}
            </Text>
          </Box>
        </Box>
        <Box
          backgroundColor="brand.dne.400"
          borderRadius="4px"
          marginTop="12px"
          padding="4px"
        >
          <Box flexDir="row">
            <Text fontWeight={600}>Nome: </Text>
            <Text>{data.docParams.nome}</Text>
          </Box>
          <Box flexDir="row">
            <Text fontWeight={600}>{data.docParams.tipoDocumento}: </Text>
            <Text>{Number(data.docParams.documento)}</Text>
          </Box>
          <Box flexDir="row">
            <Text fontWeight={600}>Inst.: </Text>
            <Text>{data.docParams.instituicao}</Text>
          </Box>
          <Box flexDir="row">
            <Text fontWeight={600}>Curso: </Text>
            <Text>{data.docParams.curso}</Text>
          </Box>
          <Box flexDir="row">
            <Text fontWeight={600}>Emissor: </Text>
            <Text>{data.docParams.entidade}</Text>
          </Box>
        </Box>
        <Box
          marginTop="12px"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            flex={1}
            borderBottomWidth="1px"
            borderColor="brand.light.500"
            paddingBottom="2px"
          >
            <Text fontSize="14px">
              Válido até 03/{new Date().getFullYear() + 1}
            </Text>
          </Box>
          <Image marginLeft="12px" source={yearImg} alt="Ano de 2022" />
        </Box>
      </VStack>
    </Center>
  );
};

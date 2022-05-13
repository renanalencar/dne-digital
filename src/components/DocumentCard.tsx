import React, { useCallback } from 'react';

import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { Box, Image, IPressableProps, Pressable } from 'native-base';

import yearImg from '../assets/year.png';
import { Document } from '../hooks/document';
import { Text } from './Text';

type DocumentCardProps = IPressableProps & {
  data: Document;
  onPress(): void;
};

export const DocumentCard: React.FC<DocumentCardProps> = ({
  data,
  onPress,
  ...rest
}) => {
  const handlePress = useCallback(async () => {
    await impactAsync(ImpactFeedbackStyle.Light);
    onPress();
  }, [onPress]);

  return (
    <Pressable
      padding="8px"
      width="100%"
      height="80px"
      background="brand.dne.500"
      borderRadius="4px"
      flexDir="row"
      marginBottom="8px"
      _pressed={{
        background: 'brand.dne.300',
      }}
      onPress={handlePress}
      {...rest}
    >
      <Image
        borderRadius="4px"
        width="52px"
        height="64px"
        source={{ uri: data.docParams.foto }}
        alt={data.docParams.nome}
      />
      <Box flex={1} marginLeft="8px" justifyContent="space-between">
        <Box>
          <Text fontWeight={600}>{data.docParams.nome}</Text>
          <Text fontWeight={600}>{data.reqParams.codigoUso}</Text>
        </Box>

        <Box flexDir="row" justifyContent="space-between">
          <Text fontWeight={400} fontSize="14px">
            Válido até 03/{new Date().getFullYear() + 1}
          </Text>
          <Image
            width="51px"
            height="16px"
            source={yearImg}
            alt="Ano de 2022"
          />
        </Box>
      </Box>
    </Pressable>
  );
};

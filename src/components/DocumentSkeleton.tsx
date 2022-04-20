import React from 'react';

import { Box, Center, Skeleton, VStack } from 'native-base';

export const DocumentSkeleton: React.FC = () => {
  return (
    <Center w="100%" marginTop="12px">
      <VStack
        w="100%"
        height="396px"
        borderRadius="4px"
        borderWidth="1px"
        borderColor="brand.dne.500"
        padding="16px"
      >
        <Box flexDirection="row" justifyContent="space-between">
          <Skeleton
            h="32px"
            w="115px"
            borderRadius="4px"
            marginBottom="12px"
            startColor="brand.dne.500"
          />

          <Box flexDirection="row">
            <Skeleton
              h="32px"
              w="32px"
              borderRadius="16px"
              startColor="brand.light.500"
            />
            <Skeleton
              h="32px"
              w="32px"
              borderRadius="16px"
              marginLeft="8px"
              startColor="brand.light.500"
            />
            <Skeleton
              h="32px"
              w="52px"
              borderRadius="4px"
              marginLeft="8px"
              startColor="brand.primary.500"
            />
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton w="127px" h="158px" borderRadius="4px" />
          <Box alignItems="center">
            <Skeleton w="90px" h="90px" borderRadius="4px" />
            <Skeleton
              height="16px"
              width="65px"
              marginTop="8px"
              borderRadius="4px"
            />
          </Box>
        </Box>
        <Skeleton w="303px" h="110px" borderRadius="4px" marginTop="12px" />
        <Box
          marginTop="12px"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton w="203px" h="18px" borderRadius="4px" />
          <Skeleton
            w="88px"
            h="28px"
            borderRadius="4px"
            startColor="brand.secondary.500"
          />
        </Box>
      </VStack>
    </Center>
  );
};

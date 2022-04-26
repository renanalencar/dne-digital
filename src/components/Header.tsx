import React from 'react';

import { Box, Heading, IBoxProps, Icon, Pressable } from 'native-base';

import { Feather } from '@expo/vector-icons';

import { Text } from './Text';

export type HeaderProps = IBoxProps & {
  title: string;
  subtitle?: string;
  hasGoback?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  hasGoback = undefined,
  ...rest
}) => {
  return (
    <Box marginTop="32px" {...rest} flexDir="row" alignItems="flex-start">
      {hasGoback && (
        <Pressable
          marginRight="8px"
          justifyContent="center"
          alignItems="center"
          marginLeft="-4px"
          onPress={hasGoback}
        >
          <Icon
            as={Feather}
            name="chevron-left"
            size="28px"
            color="brand.light.500"
          />
        </Pressable>
      )}
      <Box>
        <Heading
          fontSize="36px"
          fontWeight={600}
          color="brand.light.500"
          lineHeight="36px"
        >
          {title}
        </Heading>
        {subtitle && <Text>{subtitle}</Text>}
      </Box>
    </Box>
  );
};

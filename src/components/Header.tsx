import React from 'react';

import { Box, Heading, IBoxProps } from 'native-base';

import { Text } from './Text';

export type HeaderProps = IBoxProps & {
  title: string;
  subtitle?: string;
};

export const Header: React.FC<HeaderProps> = ({ title, subtitle, ...rest }) => {
  return (
    <Box marginTop="32px" {...rest}>
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
  );
};

import React from 'react';

import { IButtonProps, Button as NativeButton } from 'native-base';

import { Text } from './Text';

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <NativeButton
      bgColor="brand.primary.500"
      height="50px"
      borderRadius="4px"
      _pressed={{
        bgColor: 'brand.primary.400',
      }}
      {...rest}
    >
      <Text fontWeight={600}>{children}</Text>
    </NativeButton>
  );
};

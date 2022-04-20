import React from 'react';

import { IButtonProps, Button as NativeButton } from 'native-base';

import { Text } from './Text';

type ButtonProps = IButtonProps & {
  type?: 'primary' | 'secondary';
};

const colors = {
  secondary: {
    border: 'brand.secondary.500',
    text: 'brand.secondary.500',
    background: 'transparent',
    pressedBackground: 'brand.secondary.400',
  },
  primary: {
    border: null,
    text: 'brand.light.500',
    background: 'brand.primary.500',
    pressedBackground: 'brand.primary.400',
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  ...rest
}) => {
  return (
    <NativeButton
      bgColor={colors[type].background}
      borderColor={colors[type].border}
      borderWidth={colors[type].border ? 1 : 0}
      height="50px"
      borderRadius="4px"
      _pressed={{
        bgColor: colors[type].pressedBackground,
      }}
      {...rest}
    >
      <Text color={colors[type].text} fontWeight={600} textAlign="center">
        {children}
      </Text>
    </NativeButton>
  );
};

import React from 'react';

import { Button, IButtonProps } from 'native-base';

type CircleButtonProps = IButtonProps & {
  isSecondary?: boolean;
};

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  isSecondary = false,
  ...rest
}) => {
  return (
    <Button
      backgroundColor={
        isSecondary ? 'brand.secondary.500' : 'brand.primary.500'
      }
      height="50px"
      width="50px"
      borderRadius="25px"
      _pressed={{
        background: isSecondary ? 'brand.secondary.400' : 'brand.primary.400',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

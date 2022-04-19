import React from 'react';

import { Text as NativeText, ITextProps } from 'native-base';

export const Text: React.FC<ITextProps> = ({ children, ...rest }) => {
  return (
    <NativeText
      color="brand.light.500"
      fontSize="16px"
      fontWeight={400}
      lineHeight="18px"
      {...rest}
    >
      {children}
    </NativeText>
  );
};

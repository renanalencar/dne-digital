import React from 'react';

import { Box, IBoxProps } from 'native-base';

export const Container: React.FC<IBoxProps> = ({ children, ...rest }) => {
  return (
    <Box flex={1} paddingX="20px" {...rest}>
      {children}
    </Box>
  );
};

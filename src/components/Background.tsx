import React from 'react';

import { Box, IBoxProps } from 'native-base';

export const Background: React.FC<IBoxProps> = ({ children, ...rest }) => {
  return (
    <Box safeArea flex={1} backgroundColor="brand.dark.500" {...rest}>
      {children}
    </Box>
  );
};

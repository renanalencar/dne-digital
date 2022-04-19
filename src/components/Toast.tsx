import React from 'react';

import { Box } from 'native-base';

import { Text } from './Text';

type ToastProps = {
  type?: 'success' | 'danger' | 'warning' | 'info';
};

const colors = {
  success: 'success.700',
  danger: 'danger.700',
  warning: 'amber.600',
  info: 'info.600',
};

export const Toast: React.FC<ToastProps> = ({ children, type = 'success' }) => {
  return (
    <Box bg={colors[type]} px="12px" py="12px" borderRadius="4px">
      <Text>{children}</Text>
    </Box>
  );
};

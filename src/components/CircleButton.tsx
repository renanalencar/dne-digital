import React, { useCallback } from 'react';

import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { Button, IButtonProps } from 'native-base';
import { GestureResponderEvent } from 'react-native';

type CircleButtonProps = IButtonProps & {
  isSecondary?: boolean;
};

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  isSecondary = false,
  onPress,
  ...rest
}) => {
  const handlePressed = useCallback(
    async (event: GestureResponderEvent) => {
      await impactAsync(ImpactFeedbackStyle.Light);

      if (onPress) {
        onPress(event);
      }
    },
    [onPress],
  );
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
      onPress={handlePressed}
      {...rest}
    >
      {children}
    </Button>
  );
};

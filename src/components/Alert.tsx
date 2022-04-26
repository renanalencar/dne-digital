import React, { useCallback } from 'react';

import { AlertDialog, Button } from 'native-base';
import { IAlertDialogProps } from 'native-base/lib/typescript/components/composites';

import { Text } from './Text';

type AlertProps = IAlertDialogProps & {
  title: string;
  action: () => void;
  actionText: string;
  onClose: () => void;
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cancelRef: React.RefObject<any>;
};

export const Alert: React.FC<AlertProps> = ({
  isOpen,
  onClose,
  title,
  children,
  action,
  actionText,
  cancelRef,
}) => {
  const handleAction = useCallback(() => {
    action();
    onClose();
  }, [onClose, action]);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>
          <Text color="brand.dark.500" fontWeight={600} fontSize="18px">
            {title}
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Text color="brand.dark.500">{children}</Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}
            >
              <Text color="brand.dark.500">Cancelar</Text>
            </Button>
            <Button colorScheme="danger" onPress={handleAction}>
              <Text>{actionText}</Text>
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

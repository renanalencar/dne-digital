import React, { createContext, useCallback, useContext } from 'react';

import { notificationAsync, NotificationFeedbackType } from 'expo-haptics';
import { useToast } from 'native-base';

import { Toast } from '../components/Toast';

type NotificationProps = {
  type: NotificationFeedbackType;
  message: string;
};

type NotificationContextData = {
  notification(data: NotificationProps): Promise<void>;
};

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const NotificationProvider: React.FC = ({ children }) => {
  const toast = useToast();

  const notification = useCallback(
    async ({
      type = NotificationFeedbackType.Success,
      message,
    }: NotificationProps) => {
      await notificationAsync(type);

      toast.show({
        placement: 'top',
        render: () => <Toast type={type}>{message}</Toast>,
      });
    },
    [toast],
  );

  return (
    <NotificationContext.Provider value={{ notification }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = (): NotificationContextData => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'useNotification must be used within an NotificationProvider',
    );
  }

  return context;
};

export { NotificationProvider, useNotification };

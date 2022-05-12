import React from 'react';

import { DocumentProvider } from './document';
import { NotificationProvider } from './notification';

const AppProvider: React.FC = ({ children }) => {
  return (
    <NotificationProvider>
      <DocumentProvider>{children}</DocumentProvider>
    </NotificationProvider>
  );
};

export default AppProvider;

import React from 'react';

import { DocumentProvider } from './document';

const AppProvider: React.FC = ({ children }) => {
  return <DocumentProvider>{children}</DocumentProvider>;
};

export default AppProvider;

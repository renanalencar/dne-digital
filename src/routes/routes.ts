import React from 'react';

import { AddDocument } from '../screens/AddDocument';
import { DocumentDetails } from '../screens/DocumentDetails';
import { GetStarted } from '../screens/GetStarted';
import { Home } from '../screens/Home';
import { Scan } from '../screens/Scan';

type Route = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
};

export const routes: Route[] = [
  {
    name: 'GetStarted',
    component: GetStarted,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Scan',
    component: Scan,
  },
  {
    name: 'AddDocument',
    component: AddDocument,
  },
  {
    name: 'DocumentDetails',
    component: DocumentDetails,
  },
];

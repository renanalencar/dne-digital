import React from 'react';

import { AddDocument } from '../screens/AddDocument';
import { GetStarted } from '../screens/GetStarted';
import { Home } from '../screens/Home';
import { Scan } from '../screens/Scan';

type Route = {
  name: string;
  component: React.FC;
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
];

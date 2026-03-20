import React from 'react';

import { HomePage } from '@pages/Home';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  return <HomePage />;
};

App.displayName = 'App';

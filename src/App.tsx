import React from 'react';

import { EngenhariaClinicaPage } from '@pages/EngenhariaClinica';
import { HomePage } from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/engenharia-clinica" element={<EngenhariaClinicaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = 'App';

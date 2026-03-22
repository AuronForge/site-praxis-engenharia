import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '@pages/Home';
import { EngenhariaClinicaPage } from '@pages/EngenhariaClinica';
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

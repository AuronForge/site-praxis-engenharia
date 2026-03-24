import './App.css';

import React from 'react';

import { EngenhariaClinicaPage } from '@pages/EngenhariaClinica';
import { HomePage } from '@pages/Home';
import { PlanejamentoTecnologicoPage } from '@pages/PlanejamentoTecnologico';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/engenharia-clinica" element={<EngenhariaClinicaPage />} />
        <Route path="/planejamento-tecnologico" element={<PlanejamentoTecnologicoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = 'App';

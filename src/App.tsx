import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '@pages/Home';
import { PlanejamentoTecnologicoPage } from '@pages/PlanejamentoTecnologico';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planejamento-tecnologico" element={<PlanejamentoTecnologicoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = 'App';

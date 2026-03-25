import './App.css';

import React from 'react';

import { AcreditacaoPage } from '@pages/Acreditacao';
import { CarreirasPage } from '@pages/Carreiras';
import { ContatoPage } from '@pages/Contato';
import { EngenhariaClinicaPage } from '@pages/EngenhariaClinica';
import { HomePage } from '@pages/Home';
import { PlanejamentoTecnologicoPage } from '@pages/PlanejamentoTecnologico';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/engenharia-clinica" element={<EngenhariaClinicaPage />} />
        <Route path="/planejamento-tecnologico" element={<PlanejamentoTecnologicoPage />} />
        <Route path="/acreditacao" element={<AcreditacaoPage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = 'App';

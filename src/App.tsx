import React from 'react';

import { Button } from '@ui-components/Button';
import { Header } from '@ui-components/layout/Header';
import { HeroSection } from '@ui-components/sections/HeroSection';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const handleClick = (): void => {
    console.warn('Button clicked!');
  };

  return (
    <div className="app">
      <Header
        brand={{
          name: 'Praxis Engenharia Clínica',
          href: '/',
          logoAlt: 'Praxis Logo',
        }}
        links={[
          { label: 'Serviços', href: '#servicos' },
          { label: 'Experiência', href: '#experiencia' },
          { label: 'Gestão', href: '#gestao' },
          { label: 'Clientes', href: '#clientes' },
        ]}
        cta={{
          label: 'Contato',
          href: '#contato',
        }}
      />

      <HeroSection
        badge="Certificações e Reconhecimento"
        title="Engenharia Clínica de Excelência"
        highlightWord="Excelência"
        subtitle="Soluções Completas para Gestão Hospitalar"
        description="Oferecemos um portfólio integrado de serviços para garantir a segurança e eficiência de equipamentos médicos."
        primaryCta={{
          label: 'Fale com Especialista',
          href: '#contato',
        }}
        secondaryCta={{
          label: 'Conheça os Serviços',
          href: '#servicos',
        }}
        stats={[
          { value: '25+', label: 'Anos de Experiência' },
          { value: '500+', label: 'Projetos Concluídos' },
          { value: '100%', label: 'Conformidade ANVISA' },
        ]}
      />

      <main className="app-main">
        <section className="button-showcase">
          <h2>Button Component Examples</h2>

          <div className="button-group">
            <h3>Variants</h3>
            <Button onClick={handleClick}>Primary Button</Button>
            <Button variant="secondary" onClick={handleClick}>
              Secondary Button
            </Button>
            <Button variant="outline" onClick={handleClick}>
              Outline Button
            </Button>
          </div>

          <div className="button-group">
            <h3>Sizes</h3>
            <Button size="small" onClick={handleClick}>
              Small
            </Button>
            <Button size="medium" onClick={handleClick}>
              Medium
            </Button>
            <Button size="large" onClick={handleClick}>
              Large
            </Button>
          </div>

          <div className="button-group">
            <h3>States</h3>
            <Button onClick={handleClick}>Enabled</Button>
            <Button disabled>Disabled</Button>
          </div>

          <div className="button-group">
            <h3>Full Width</h3>
            <Button fullWidth onClick={handleClick}>
              Full Width Button
            </Button>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Praxis Engenharia. All rights reserved.</p>
      </footer>
    </div>
  );
};

App.displayName = 'App';

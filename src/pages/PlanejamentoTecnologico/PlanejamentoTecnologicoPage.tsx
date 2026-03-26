import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer, defaultFooterData } from '@ui-components/sections/Footer';
import { HeroSection } from '@ui-components/sections/HeroSection';
import { ManagementSection } from '@ui-components/sections/ManagementSection';
import { ServicesSection } from '@ui-components/sections/ServicesSection';

import styles from './PlanejamentoTecnologico.module.scss';

import type { ServiceCardProps } from '@ui-components/cards/ServiceCard';

// Header data
const headerData = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Engenharia Clínica',
    logoSrc: '/images/logo.jpg',
  },
  links: [
    { label: 'Engenharia Clinica', href: '/engenharia-clinica' },
    { label: 'Planejamento Tecnoloógico', href: '/planejamento-tecnologico' },
    { label: 'Acreditação', href: '/acreditacao' },
    { label: 'Trabalhe Conosco', href: '/carreiras' },
  ],
  cta: {
    label: 'Contato',
    href: '/#contato',
  },
};

// Hero data
const heroData = {
  badge: 'Serviço Especializado',
  title: 'Planejamento Tecnológico',
  description:
    'Assessoria estratégica para aquisição, dimensionamento e implementação de tecnologias médicas alinhadas às necessidades e objetivos da sua instituição.',
};

// Services data
const servicesData: ServiceCardProps[] = [
  {
    title: 'Plano Diretor de Tecnologia',
    description:
      'Planejamento estratégico de médio e longo prazo para renovação e aquisição de equipamentos médicos.',
    bullets: [
      'Diagnóstico do parque atual',
      'Projeção de investimentos 5-10 anos',
      'Priorização baseada em criticidade',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M9 16h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Dimensionamento de Equipamentos',
    description:
      'Cálculo técnico da quantidade ideal de equipamentos por setor baseado em demanda, fluxo e protocolos.',
    bullets: [
      'Análise de fluxo e produção',
      'Estudo de demanda assistencial',
      'Otimização de recursos',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 20l-4.2-4.2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Especificação Técnica',
    description:
      'Elaboração de especificações técnicas detalhadas para processos licitatórios e aquisições diretas.',
    bullets: [
      'Requisitos técnicos obrigatórios',
      'Conformidade regulatória',
      'Análise de propostas técnicas',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4 15a1.7 1.7 0 0 0 .33 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.33 1.7 1.7 0 0 0-1.03 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.57 1.7 1.7 0 0 0-1.87.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.66 8.9a1.7 1.7 0 0 0-.33-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9.03 4.6h.14A1.7 1.7 0 0 0 10.7 3V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.87-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.14A1.7 1.7 0 0 0 21 10.7H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Análise de Viabilidade',
    description:
      'Estudo técnico e financeiro para avaliação de viabilidade de projetos e aquisições de equipamentos.',
    bullets: [
      'Análise custo-benefício',
      'Projeção de retorno de investimento',
      'Impacto operacional e financeiro',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M5 15l4-4 3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7h3v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Consultoria em Aquisições',
    description:
      'Assessoria completa em processos de aquisição, desde a especificação até a entrega e aceite técnico.',
    bullets: [
      'Suporte em licitações',
      'Análise de propostas comerciais',
      'Aceite técnico de equipamentos',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 3C8.686 3 6 5.686 6 9c0 2.05 1.029 3.86 2.598 4.944c.53.367.902.908 1.036 1.537L9.8 16.5h4.4l.166-1.019c.134-.629.506-1.17 1.036-1.537A5.99 5.99 0 0 0 18 9c0-3.314-2.686-6-6-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 16.5h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 21h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Infraestrutura e Instalações',
    description:
      'Planejamento de infraestrutura física necessária para instalação de equipamentos médicos de alta complexidade.',
    bullets: [
      'Requisitos elétricos e hidráulicos',
      'Adequação de ambientes',
      'Blindagem e proteção radiológica',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 21V9.5L12 4l7 5.5V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21v-5h6v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11h.01M15 11h.01"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const managementData = {
  title: 'Decisões Estratégicas Baseadas em Dados',
  description:
    'O planejamento tecnológico hospitalar é um processo crítico que requer análise técnica especializada, conhecimento de mercado e visão estratégica para garantir investimentos assertivos em equipamentos médicos.',
  methodology:
    'Nossa equipe multidisciplinar de engenheiros clínicos e consultores especializados atua desde a concepção do projeto até a implementação final, garantindo que cada decisão esteja alinhada com as necessidades assistenciais, capacidade financeira e objetivos estratégicos da instituição.',
  whyChooseTitle: 'Benefícios do Planejamento',
  whyChooseItems: [
    { text: 'Redução de custos de aquisição e operação' },
    { text: 'Alinhamento com objetivos estratégicos' },
    { text: 'Otimização do investimento em tecnologia' },
    { text: 'Previsibilidade orçamentária de médio/longo prazo' },
  ],
  metrics: [
    {
      value: '30%',
      label: 'Redução de Custos',
      description: 'Economia média em aquisições com planejamento adequado',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M5 15l5-5 4 4 5-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7h4v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: '200+',
      label: 'Projetos Realizados',
      description: 'Planos diretores e dimensionamentos implementados',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      value: '15+',
      label: 'Anos de Experiência',
      description: 'Em planejamento e gestão de tecnologia médica',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 8v6M17 11h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
};

// Process data
const processData = {
  title: 'Nossa Metodologia de Planejamento',
  subtitle: 'Processo estruturado para garantir investimentos assertivos',
  steps: [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Levantamento da situação atual e necessidades institucionais',
    },
    {
      number: '2',
      title: 'Análise',
      description: 'Estudo técnico e financeiro das alternativas disponíveis',
    },
    {
      number: '3',
      title: 'Planejamento',
      description: 'Elaboração do plano diretor com cronograma e orçamento',
    },
    {
      number: '4',
      title: 'Implementação',
      description: 'Suporte na execução do plano e aquisições',
    },
    {
      number: '5',
      title: 'Revisão',
      description: 'Acompanhamento e atualização contínua do planejamento',
    },
  ],
};

const ctaData = {
  title: 'Precisa Estruturar Seu Planejamento Tecnológico?',
  description:
    'Nossa equipe está pronta para desenvolver um plano diretor customizado para as necessidades da sua instituição',
  primaryButtonLabel: 'Solicitar Consultoria',
  primaryButtonHref: '/contato',
  secondaryButtonLabel: 'Voltar ao Início',
  secondaryButtonHref: '/',
};

/**
 * PlanejamentoTecnologicoPage Component
 *
 * Page dedicated to the "Planejamento Tecnológico" service,
 * accessible from the Home page through the service card.
 *
 * Architecture:
 * - This is a PAGE component (orchestrator)
 * - Composes UI section components
 * - Uses semantic HTML for accessibility
 */
export function PlanejamentoTecnologicoPage(): React.ReactElement {
  return (
    <>
      {/* Header */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      {/* Main content */}
      <main role="main" className={styles.main}>
        {/* Hero Section */}
        <HeroSection
          badge={heroData.badge}
          title={heroData.title}
          description={heroData.description}
          variant="compact"
        />

        <ManagementSection
          title={managementData.title}
          description={managementData.description}
          methodology={managementData.methodology}
          whyChooseTitle={managementData.whyChooseTitle}
          whyChooseItems={managementData.whyChooseItems}
          metrics={managementData.metrics}
        />

        <ServicesSection
          sectionId="servicos"
          title="Nossos Serviços de Planejamento"
          description="Soluções completas para estruturar seu parque tecnológico"
          services={servicesData}
          cardVariant="planning"
        />

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.processPanel}>
              <div className={styles.processHeader}>
                <h2 className={styles.processTitle}>{processData.title}</h2>
                <p className={styles.processSubtitle}>{processData.subtitle}</p>
              </div>

              <div className={styles.processGrid}>
                {processData.steps.map((step, index) => (
                  <div key={`step-${index}`} className={styles.processStep}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>{ctaData.title}</h2>
              <p className={styles.ctaText}>{ctaData.description}</p>

              <div className={styles.ctaActions}>
                <a
                  href={ctaData.primaryButtonHref}
                  className={`${styles.ctaButton} ${styles.ctaPrimary}`}
                >
                  {ctaData.primaryButtonLabel}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h12M12 6l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href={ctaData.secondaryButtonHref}
                  className={`${styles.ctaButton} ${styles.ctaSecondary}`}
                >
                  {ctaData.secondaryButtonLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer {...defaultFooterData} />
    </>
  );
}

PlanejamentoTecnologicoPage.displayName = 'PlanejamentoTecnologicoPage';

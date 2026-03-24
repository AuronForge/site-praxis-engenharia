import React from 'react';

import { ServiceCard, type ServiceCardProps } from '@ui-components/cards/ServiceCard';
import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';
import { HeroSection } from '@ui-components/sections/HeroSection';

import styles from './PlanejamentoTecnologico.module.scss';

// Header data
const headerData = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Engenharia Clínica',
    logoSrc: '/images/logo.jpg',
  },
  links: [
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Experiência', href: '/#experiencia' },
    { label: 'Gestão', href: '/#plataforma' },
    { label: 'Clientes', href: '/#clientes' },
  ],
  cta: {
    label: 'Contato',
    href: '/#contato',
  },
};

// Hero data
const heroData = {
  badge: 'Planejamento Tecnológico',
  title: 'Assessoria Especializada em Gestão Tecnológica',
  highlightWord: 'Tecnológica',
  description:
    'Oferecemos consultoria especializada para aquisição, dimensionamento e substituição tecnológica de equipamentos médico-hospitalares, garantindo investimentos assertivos e conformidade regulatória.',
  primaryCta: {
    label: 'Fale com Especialistas',
    href: '#contato',
  },
  secondaryCta: {
    label: 'Nossos Serviços',
    href: '#servicos',
  },
  stats: [
    { label: 'Anos de Experiência', value: '25+' },
    { label: 'Projetos Concluídos', value: '500+' },
    { label: 'Conformidade ANVISA', value: '100%' },
  ],
  backgroundImageUrl: '/images/hero-bg.jpg',
};

// Services data
const servicesData: ServiceCardProps[] = [
  {
    title: 'Plano Diretor',
    description:
      'Elaboração de plano diretor de tecnologia alinhado ao planejamento estratégico da instituição, com análise de ciclo de vida e horizonte de investimentos.',
    bullets: [
      'Análise de demanda',
      'Projeção de crescimento',
      'Orçamento plurianual',
      'Cronograma de substituição',
    ],
    href: '#contato',
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
    title: 'Especificações Técnicas',
    description:
      'Desenvolvimento de especificações técnicas detalhadas para aquisição de equipamentos, garantindo qualidade e adequação às necessidades clínicas.',
    bullets: [
      'Termos de referência',
      'Critérios de aceitação',
      'Testes de performance',
      'Análise técnica de propostas',
    ],
    href: '#contato',
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
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Comissionamento',
    description:
      'Serviço de comissionamento completo para novos equipamentos e instalações, garantindo funcionamento adequado e segurança.',
    bullets: [
      'Instalação supervisionada',
      'Testes de aceitação',
      'Treinamento de operadores',
      'Documentação técnica',
    ],
    href: '#contato',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Análise de Viabilidade',
    description:
      'Estudos de viabilidade técnica e econômica para novos projetos e tecnologias, auxiliando na tomada de decisão.',
    bullets: [
      'Análise custo-benefício',
      'ROI projetado',
      'Riscos e oportunidades',
      'Relatório técnico completo',
    ],
    href: '#contato',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Benefits data
const benefitsData = {
  title: 'Por que escolher nosso Planejamento Tecnológico?',
  items: [
    {
      title: 'Especialização Técnica',
      description:
        'Equipe multidisciplinar com experiência em equipamentos de alta complexidade e conhecimento das normas técnicas vigentes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Conformidade Regulatória',
      description:
        'Acompanhamento contínuo das normativas ANVISA e normas técnicas para garantir que todos os equipamentos estejam em conformidade.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Otimização de Investimentos',
      description:
        'Análise detalhada do ciclo de vida dos equipamentos para planejamento financeiro assertivo e redução de custos operacionais.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Suporte Contínuo',
      description:
        'Acompanhamento permanente após a aquisição, garantindo performance ideal e suporte técnico especializado.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
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
  title: 'Nossa Metodologia',
  subtitle: 'Seguimos um processo estruturado para garantir resultados assertivos em cada projeto.',
  steps: [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Análise detalhada do parque tecnológico atual e necessidades da instituição.',
    },
    {
      number: '02',
      title: 'Planejamento',
      description:
        'Elaboração do plano diretor com cronograma, orçamento e priorização de investimentos.',
    },
    {
      number: '03',
      title: 'Execução',
      description: 'Acompanhamento da aquisição, instalação e comissionamento dos equipamentos.',
    },
    {
      number: '04',
      title: 'Validação',
      description: 'Testes de aceitação, treinamento e documentação técnica completa.',
    },
  ],
};

// Footer data
const footerData = {
  logo: {
    src: '/images/logo.jpg',
    alt: 'Praxis Engenharia Clínica',
  },
  description:
    'Excelência em gestão de tecnologia médico-hospitalar com mais de 25 anos de experiência no mercado brasileiro.',
  sections: [
    {
      title: 'Serviços',
      links: [
        { label: 'Engenharia Clínica', href: '/#engenharia-clinica' },
        { label: 'Planejamento', href: '/#planejamento' },
        { label: 'Acreditação', href: '/#acreditacao' },
        { label: 'Consultoria', href: '/#consultoria' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '/#sobre' },
        { label: 'Equipe', href: '/#equipe' },
        { label: 'Carreiras', href: '/#carreiras' },
        { label: 'Blog', href: '/#blog' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: '+55 11 3000-0000', href: 'tel:+551130000000', icon: 'phone' },
        { label: 'contato@praxis.com.br', href: 'mailto:contato@praxis.com.br', icon: 'email' },
        {
          label: 'Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100',
          href: '#',
          icon: 'location',
        },
      ],
    },
  ],
  social: [
    {
      platform: 'linkedin',
      href: 'https://www.linkedin.com/company/praxisengenhariaclinica/',
      ariaLabel: 'LinkedIn',
    },
    { platform: 'facebook', href: 'https://facebook.com', ariaLabel: 'Facebook' },
    { platform: 'instagram', href: 'https://instagram.com', ariaLabel: 'Instagram' },
  ],
  copyright: '© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.',
  legalLinks: [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
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
          highlightWord={heroData.highlightWord}
          description={heroData.description}
          primaryCta={heroData.primaryCta}
          secondaryCta={heroData.secondaryCta}
          stats={heroData.stats}
          backgroundImageUrl={heroData.backgroundImageUrl}
        />

        {/* Services Section */}
        <section id="servicos" className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Nossas Soluções</span>
              <h2 className={styles.sectionTitle}>
                Servicios Especializados em Planejamento Tecnológico
              </h2>
              <p className={styles.sectionDescription}>
                Oferecemos um portfólio completo de serviços para garantir a gestão eficiente do
                ciclo de vida dos equipamentos médico-hospitalares.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {servicesData.map((service, index) => (
                <ServiceCard key={`${service.title}-${index}`} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Diferenciais</span>
              <h2 className={styles.sectionTitle}>{benefitsData.title}</h2>
            </div>

            <div className={styles.benefitsGrid}>
              {benefitsData.items.map((benefit, index) => (
                <div key={`benefit-${index}`} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Metodologia</span>
              <h2 className={styles.sectionTitle}>{processData.title}</h2>
              <p className={styles.sectionDescription}>{processData.subtitle}</p>
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
        </section>

        {/* CTA Section */}
        <section id="contato" className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Pronto para otimizar a gestão tecnológica da sua instituição?
              </h2>
              <p className={styles.ctaText}>
                Nossa equipe está pronta para desenvolver um projeto personalizado para suas
                necessidades. Entre em contato conosco.
              </p>
              <a href="mailto:contato@praxis.com.br" className={styles.ctaButton}>
                Falar com Especialista
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        logo={footerData.logo}
        description={footerData.description}
        sections={footerData.sections}
        social={footerData.social}
        copyright={footerData.copyright}
        legalLinks={footerData.legalLinks}
      />
    </>
  );
}

PlanejamentoTecnologicoPage.displayName = 'PlanejamentoTecnologicoPage';

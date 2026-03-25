import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';
import { HeroSection } from '@ui-components/sections/HeroSection';
import { ManagementSection } from '@ui-components/sections/ManagementSection';
import { ServicesSection } from '@ui-components/sections/ServicesSection';

import styles from './Acreditacao.module.scss';

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
  badge: 'Serviço Especializado',
  title: 'Acreditação',
  description:
    'Suporte completo para processos de certificação e acreditação hospitalar, garantindo conformidade com os mais altos padrões de qualidade e segurança.',
};

// Services data
const servicesData: ServiceCardProps[] = [
  {
    title: 'Preparação ONA',
    description:
      'Acompanhamento completo no processo de acreditação pela Organização Nacional de Acreditação, desde o diagnóstico inicial até a certificação.',
    bullets: [
      'Diagnóstico de maturidade',
      'Plano de ação estruturado',
      'Treinamento de equipes',
      'Simulado de avaliação',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'ISO 9001',
    description:
      'Implementação e certificação do Sistema de Gestão de Qualidade conforme requisitos da norma ISO 9001:2015.',
    bullets: [
      'Mapeamento de processos',
      'Documentação técnica',
      'Auditoria interna',
      'Certificação',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 15l-2 5 2-2 2 2-2-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 5l3-3 3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'ISO 14001',
    description:
      'Implementação do Sistema de Gestão Ambiental para organizações que buscam sustentabilidade e conformidade ambiental.',
    bullets: [
      'Diagnóstico ambiental',
      'Aspectos e impactos',
      'Controle operacional',
      'Melhoria contínua',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 3v18M3 12h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3a9 9 0 019 9c0 5-9 9-9 9s-9-4-9-9 4-9 9-9z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'ISO 45001',
    description:
      'Sistema de Gestão de Saúde e Segurança Ocupacional, prevenindo riscos e promovendo ambiente de trabalho seguro.',
    bullets: [
      'Identificação de perigos',
      'Avaliação de riscos',
      'Controle de perigos',
      'Auditoria do SGSO',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
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
    title: 'Documentação Técnica',
    description:
      'Elaboração e organização de toda a documentação técnica exigida pelos processos de acreditação e certificação.',
    bullets: [
      'Procedimentos operacionais',
      'Registros de qualidade',
      'Políticas e instruções',
      'Gestão documental',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v6h6M16 13H8m8 4H8m2-8H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Auditoria',
    description:
      'Serviços de auditoria interna e externa para verificar conformidade e identificar oportunidades de melhoria.',
    bullets: [
      'Auditoria interna',
      'Auditoria de fornecedores',
      'Auditoria de processos',
      'Relatórios e ações',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <path
          d="M9 12h6M9 16h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const managementData = {
  title: 'Excelência em Gestão de Qualidade',
  description:
    'Acreditação é um processo de avaliação sistemática que verifica se uma instituição de saúde atende a padrões internacionais de qualidade e segurança. A Praxis oferece suporte completo para transformar essa jornada em um processo estruturado e eficiente.',
  methodology:
    'Nossa metodologia combina expertise técnica em engenharia clínica com profundo conhecimento dos requisitos de acreditação, garantindo uma abordagem prática e objetiva que agrega valor real aos processos da instituição.',
  whyChooseTitle: 'Por que contar com a Praxis?',
  whyChooseItems: [
    { text: 'Experiência em múltiplos modelos de acreditação' },
    { text: 'Metodologia focada em resultados sustentáveis' },
    { text: 'Equipemultidisciplinar com certificação internacional' },
    { text: 'Acompanhamento integral do processo' },
  ],
  metrics: [
    {
      value: '50+',
      label: 'Instituições Acreditadas',
      description: 'Hospitais e clínicas que conquistaram certificação com nosso suporte',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: '98%',
      label: 'Taxa de Sucesso',
      description: 'Instituições que alcançaram a certificação na primeira tentativa',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: '100%',
      label: 'Conformidade',
      description: 'Índice de atendimento aos requisitos das normas de acreditação',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
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
  ],
};

// Process data
const processData = {
  title: 'Nossa Metodologia de Acreditação',
  subtitle: 'Processo estruturado para garantir resultado assertivo',
  steps: [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Avaliação do estado atual e identificação de gaps',
    },
    {
      number: '2',
      title: 'Planejamento',
      description: 'Elaboração do plano de ação com cronograma e metas',
    },
    {
      number: '3',
      title: 'Implementação',
      description: 'Execução das ações corretivas e treinamento de equipes',
    },
    {
      number: '4',
      title: 'Auditoria',
      description: 'Verificação interna da conformidade antes da avaliação externa',
    },
    {
      number: '5',
      title: 'Certificação',
      description: 'Acompanhamento na avaliação externa e pós-certificação',
    },
  ],
};

const ctaData = {
  title: 'Pronto para Elevar o Padrão de Qualidade?',
  description:
    'Nossa equipe está pronta para guiar sua instituição no caminho da excelência em acreditação',
  primaryButtonLabel: 'Solicitar Consultoria',
  primaryButtonHref: 'mailto:contato@praxis.com.br',
  secondaryButtonLabel: 'Voltar ao Início',
  secondaryButtonHref: '/',
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
        { label: 'Engenharia Clínica', href: '/engenharia-clinica' },
        { label: 'Planejamento', href: '/planejamento-tecnologico' },
        { label: 'Acreditação', href: '/acreditacao' },
        { label: 'Consultoria', href: '#consultoria' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Equipe', href: '#equipe' },
        { label: 'Carreiras', href: '#carreiras' },
        { label: 'Blog', href: '#blog' },
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
 * AcreditacaoPage Component
 *
 * Dedicated page for Accreditation services,
 * accessible from the Home page through the service card.
 *
 * Architecture:
 * - This is a PAGE component (orchestrator)
 * - Composes UI section components
 * - Uses semantic HTML for accessibility
 */
export function AcreditacaoPage(): React.ReactElement {
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
          title="Nossos Serviços de Acreditação"
          description="Soluções completas para transformar a qualidade da sua instituição"
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

AcreditacaoPage.displayName = 'AcreditacaoPage';
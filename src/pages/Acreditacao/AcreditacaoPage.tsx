import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer, defaultFooterData } from '@ui-components/sections/Footer';
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
  title: 'Acreditação',
  description:
    'Suporte completo para processos de certificação e acreditação hospitalar, garantindo conformidade com os mais altos padrões de qualidade e segurança.',
};

// Services data
const servicesData: ServiceCardProps[] = [
  {
    title: 'Preparação ONA',
    description:
      'Adequação completa do parque tecnológico e documentação para atender aos requisitos da Organização Nacional de Acreditação.',
    bullets: [
      'Diagnóstico de conformidade',
      'Plano de ação customizado',
      'Acompanhamento de visita',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M9 3h6v3H9z"
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
    title: 'Adequação JCI',
    description:
      'Preparação para certificação internacional com adequação aos rigorosos padrões da Joint Commission International.',
    bullets: ['Gap analysis detalhado', 'Adequação de processos', 'Simulados de auditoria'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 3.5l2.6 5.26 5.8.84-4.2 4.09.99 5.78L12 16.73l-5.19 2.74.99-5.78-4.2-4.09 5.8-.84L12 3.5z"
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
      'Organização e padronização de toda documentação técnica dos equipamentos conforme requisitos das certificadoras.',
    bullets: [
      'Inventário técnico completo',
      'Registros de manutenção',
      'Certificados de calibração',
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
    title: 'Auditorias Internas',
    description:
      'Realização de auditorias periódicas para garantir manutenção dos padrões de qualidade e conformidade contínua.',
    bullets: ['Auditorias programadas', 'Relatórios detalhados', 'Planos de ação corretiva'],
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
    title: 'Treinamento de Equipes',
    description:
      'Capacitação de equipes técnicas e assistenciais sobre requisitos e práticas de acreditação relacionadas a equipamentos.',
    bullets: ['Workshops customizados', 'Material didático exclusivo', 'Simulações práticas'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11a4 4 0 100-8 4 4 0 000 8zM21 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Manutenção de Certificação',
    description:
      'Suporte contínuo para manter e renovar certificações, garantindo conformidade permanente aos requisitos.',
    bullets: [
      'Acompanhamento periódico',
      'Preparação para reacreditação',
      'Gestão de não conformidades',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M4 16l6-6 4 4 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8h6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

const certificationsData = {
  title: 'Certificações que Atendemos',
  description: 'Suporte especializado para as principais acreditadoras do mercado',
  ona: {
    title: 'ONA',
    subtitle: 'Organização Nacional de Acreditação',
    description:
      'A ONA é a principal certificadora de qualidade em saúde no Brasil, reconhecida pelo Ministério da Saúde e ISQua (International Society for Quality in Health Care).',
    levels: [
      {
        badge: 'N1',
        title: 'Acreditado',
        description: 'Atende aos requisitos de segurança do paciente',
      },
      {
        badge: 'N2',
        title: 'Acreditado Pleno',
        description: 'Gestão integrada com foco em processos',
      },
      {
        badge: 'N3',
        title: 'Acreditado com Excelência',
        description: 'Cultura de melhoria contínua e inovação',
      },
    ],
  },
  jci: {
    title: 'JCI',
    subtitle: 'Joint Commission International',
    description:
      'A JCI é a maior acreditadora internacional de serviços de saúde, presente em mais de 100 países e padrão ouro para hospitais de excelência.',
    highlights: [
      {
        title: 'Padrões Internacionais',
        description: 'Reconhecimento global de qualidade e segurança',
      },
      {
        title: 'Metas Internacionais',
        description: 'Foco em segurança do paciente e qualidade assistencial',
      },
      {
        title: 'Certificação Triênio',
        description: 'Validade de 3 anos com avaliações periódicas',
      },
    ],
  },
};

// Process data
const processData = {
  title: 'Nosso Processo de Acreditação',
  subtitle: 'Metodologia comprovada para garantir certificação',
  steps: [
    {
      number: '1',
      title: 'Diagnóstico Inicial',
      description: 'Análise completa de conformidade com os padrões da certificadora',
    },
    {
      number: '2',
      title: 'Plano de Ação',
      description: 'Desenvolvimento de cronograma com todas as adequações necessárias',
    },
    {
      number: '3',
      title: 'Implementação',
      description: 'Execução das melhorias e organização da documentação técnica',
    },
    {
      number: '4',
      title: 'Certificação',
      description: 'Acompanhamento da visita e suporte durante todo o processo',
    },
  ],
};

const benefitsData = {
  title: 'Benefícios da Acreditação Hospitalar',
  items: [
    {
      title: 'Reconhecimento de Qualidade',
      description:
        'Certificação reconhecida nacional e internacionalmente como selo de excelência e segurança em saúde.',
    },
    {
      title: 'Segurança do Paciente',
      description:
        'Processos estruturados que garantem máxima segurança no uso de equipamentos e tecnologias médicas.',
    },
    {
      title: 'Vantagem Competitiva',
      description:
        'Diferenciação no mercado atraindo médicos, convênios e pacientes em busca de instituições certificadas.',
    },
    {
      title: 'Melhoria Contínua',
      description:
        'Cultura de qualidade e excelência com processos de monitoramento e aprimoramento constantes.',
    },
  ],
};

const ctaData = {
  title: 'Pronto para Conquistar a Acreditação?',
  description:
    'Nossa equipe especializada está pronta para guiar sua instituição rumo à certificação de excelência',
  primaryButtonLabel: 'Solicitar Diagnóstico',
  primaryButtonHref: '/contato',
  secondaryButtonLabel: 'Voltar ao Início',
  secondaryButtonHref: '/',
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
          spacing="compact"
        />

        <section className={styles.certificationsSection} aria-labelledby="certifications-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 id="certifications-title" className={styles.sectionTitle}>
                {certificationsData.title}
              </h2>
              <p className={styles.sectionDescription}>{certificationsData.description}</p>
            </div>

            <div className={styles.certificationsGrid}>
              <article className={`${styles.certificationCard} ${styles.certificationCardBlue}`}>
                <div className={styles.certificationCardHeader}>
                  <div className={`${styles.certificationIcon} ${styles.certificationIconBlue}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8.5 12.5v7l3.5-2 3.5 2v-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className={styles.certificationTitle}>{certificationsData.ona.title}</h3>
                    <p className={styles.certificationSubtitle}>
                      {certificationsData.ona.subtitle}
                    </p>
                  </div>
                </div>

                <p className={styles.certificationText}>{certificationsData.ona.description}</p>

                <div className={styles.levelList}>
                  {certificationsData.ona.levels.map((level, index) => (
                    <div key={`ona-level-${index}`} className={styles.levelCard}>
                      <div className={styles.levelHeaderRow}>
                        <span className={styles.levelBadge}>{level.badge}</span>
                        <h4 className={styles.levelTitle}>{level.title}</h4>
                      </div>
                      <p className={styles.levelDescription}>{level.description}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${styles.certificationCard} ${styles.certificationCardViolet}`}>
                <div className={styles.certificationCardHeader}>
                  <div className={`${styles.certificationIcon} ${styles.certificationIconViolet}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3.5l2.6 5.26 5.8.84-4.2 4.09.99 5.78L12 16.73l-5.19 2.74.99-5.78-4.2-4.09 5.8-.84L12 3.5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className={styles.certificationTitle}>{certificationsData.jci.title}</h3>
                    <p className={styles.certificationSubtitle}>
                      {certificationsData.jci.subtitle}
                    </p>
                  </div>
                </div>

                <p className={styles.certificationText}>{certificationsData.jci.description}</p>

                <ul className={styles.highlightList}>
                  {certificationsData.jci.highlights.map((highlight, index) => (
                    <li key={`jci-highlight-${index}`} className={styles.highlightItem}>
                      <span className={styles.highlightIcon} aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path
                            d="M9.25 12l1.85 1.85L14.75 10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className={styles.highlightContent}>
                        <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                        <p className={styles.highlightDescription}>{highlight.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <ServicesSection
          sectionId="servicos"
          title="Nossos Serviços de Acreditação"
          description="Soluções completas para transformar a qualidade da sua instituição"
          services={servicesData}
          cardVariant="planning"
          spacing="compact"
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

        <section className={styles.benefitsSection} aria-labelledby="benefits-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 id="benefits-title" className={styles.sectionTitle}>
                {benefitsData.title}
              </h2>
            </div>

            <div className={styles.benefitsGrid}>
              {benefitsData.items.map((benefit, index) => (
                <article key={`benefit-${index}`} className={styles.benefitItem}>
                  <div className={styles.benefitIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M10.1 12l1.4 1.4 2.9-3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </article>
              ))}
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

AcreditacaoPage.displayName = 'AcreditacaoPage';

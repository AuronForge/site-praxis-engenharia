import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer, defaultFooterData } from '@ui-components/sections/Footer';
import { HeroSection } from '@ui-components/sections/HeroSection';

import styles from './SobreNos.module.scss';

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
    href: '/contato',
  },
};

// Hero data
const heroData = {
  badge: 'Institucional',
  title: 'Sobre a Praxis',
  description:
    'Mais de 25 anos dedicados à excelência em engenharia clínica, construindo um legado de confiança, segurança e inovação na saúde brasileira.',
};

const historyHighlightsData = {
  badge: 'Nossa História',
  title: 'Pioneiros em Gestão de Tecnologia Hospitalar',
  paragraphs: [
    'Fundada em 1998, a Praxis Engenharia Clínica nasceu com o propósito de transformar a gestão de equipamentos médico-hospitalares no Brasil, trazendo metodologias internacionais e práticas de excelência para o setor de saúde.',
    'Ao longo de mais de duas décadas, consolidamos nossa posição como referência nacional em engenharia clínica, atendendo desde pequenos hospitais até grandes complexos hospitalares, sempre com o compromisso de garantir segurança, conformidade e eficiência operacional.',
    'Nossa trajetória é marcada por inovação constante, investimento em capacitação técnica e desenvolvimento de soluções proprietárias que atendem às necessidades específicas do mercado brasileiro de saúde.',
  ],
  stats: [
    { value: '25+', label: 'Anos de Experiência' },
    { value: '200+', label: 'Clientes Ativos' },
    { value: '50K+', label: 'Equipamentos Gerenciados' },
    { value: '150+', label: 'Profissionais Especializados' },
  ],
};

// Mission, Vision, Values data
const missionData = {
  title: 'Missão, Visão e Valores',
  description: 'Os princípios que guiam nossa atuação e definem nosso compromisso com a excelência',
  mission: {
    title: 'Missão',
    description:
      'Garantir a segurança e eficiência de equipamentos médico-hospitalares através de soluções técnicas especializadas, contribuindo para a excelência no atendimento à saúde e segurança dos pacientes.',
  },
  vision: {
    title: 'Visão',
    description:
      'Ser reconhecida como a empresa líder em engenharia clínica no Brasil, referência em inovação, qualidade técnica e compromisso com resultados, expandindo nossa atuação para toda a América Latina.',
  },
  valuesTitle: 'Valores',
  values: [
    'Excelência Técnica',
    'Ética e Transparência',
    'Inovação Contínua',
    'Compromisso com Pessoas',
    'Segurança em Primeiro Lugar',
  ],
};

// Diferenciais data
const diferenciaisData = {
  title: 'Nossos Diferenciais',
  description: 'O que nos torna únicos no mercado de engenharia clínica',
  items: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 3.5L18.5 6.4V11.6C18.5 16 15.4 18.9 12 20.5C8.6 18.9 5.5 16 5.5 11.6V6.4L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Expertise Técnica Comprovada',
      description:
        'Equipe altamente qualificada com certificações nacionais e internacionais, atualizada com as melhores práticas do setor.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 19.5C15.866 19.5 19 16.366 19 12.5C19 8.63401 15.866 5.5 12 5.5C8.13401 5.5 5 8.63401 5 12.5C5 16.366 8.13401 19.5 12 19.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M12 10.5V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M10.5 14.5H13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Tecnologia Proprietária',
      description:
        'Plataforma de gestão desenvolvida internamente, customizada para as necessidades específicas da engenharia clínica brasileira.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M7.5 19V17.5C7.5 15.6 9 14 11 14H13C15 14 16.5 15.6 16.5 17.5V19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Certificações e Reconhecimento',
      description:
        'Parceiros oficiais de acreditadoras e reconhecidos por entidades do setor pela qualidade e conformidade de nossos serviços.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M16 11.5C17.7 11.5 19 10.2 19 8.5C19 6.8 17.7 5.5 16 5.5C14.3 5.5 13 6.8 13 8.5C13 10.2 14.3 11.5 16 11.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18V16.5C5 14.6 6.5 13 8.5 13H11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 11C10.2 11 11.5 9.7 11.5 8C11.5 6.3 10.2 5 8.5 5C6.8 5 5.5 6.3 5.5 8C5.5 9.7 6.8 11 8.5 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Atendimento Personalizado',
      description:
        'Soluções sob medida para cada cliente, com equipe dedicada e acompanhamento próximo em todas as etapas do projeto.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M6 16L10 12L13 15L18 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 9H18V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      title: 'Resultados Mensuráveis',
      description:
        'Indicadores claros de performance e ROI comprovado, com redução de custos e aumento de disponibilidade de equipamentos.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 20L6.5 17.2C5.2 16.5 4.5 15.2 4.5 13.8V7.5L12 4L19.5 7.5V13.8C19.5 15.2 18.8 16.5 17.5 17.2L12 20Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.7 12.3L10.8 14.4L15.3 9.9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Parceria de Longo Prazo',
      description:
        'Relacionamentos duradouros baseados em confiança, transparência e comprometimento mútuo com resultados sustentáveis.',
    },
  ],
};

const commitmentData = {
  title: 'Nosso Compromisso com a Saúde Brasileira',
  description:
    'Acreditamos que cada equipamento médico bem gerenciado representa não apenas eficiência operacional, mas principalmente segurança para pacientes e profissionais de saúde. Esse é o propósito que nos move todos os dias.',
  stats: [
    { value: '100%', label: 'Conformidade ANVISA' },
    { value: '24/7', label: 'Suporte Emergencial' },
    { value: '99,5%', label: 'Taxa de Satisfação' },
  ],
};

/**
 * SobreNosPage Component
 *
 * Page displaying company information including mission, vision, values,
 * history, team, and diferentials.
 */
export function SobreNosPage(): React.ReactElement {
  return (
    <>
      {/* Header */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      <main role="main">
        {/* Hero Section */}
        <HeroSection
          badge={heroData.badge}
          title={heroData.title}
          description={heroData.description}
          variant="compact"
          contentAlignment="center"
        />

        {/* History Highlights Section */}
        <section className={styles.historyHighlightsSection}>
          <div className={styles.container}>
            <div className={styles.historyHighlightsGrid}>
              <div className={styles.historyHighlightsContent}>
                <span className={styles.historyHighlightsBadge}>{historyHighlightsData.badge}</span>
                <h2 className={styles.historyHighlightsTitle}>{historyHighlightsData.title}</h2>
                {historyHighlightsData.paragraphs.map((paragraph, index) => (
                  <p key={`history-paragraph-${index}`} className={styles.historyHighlightsText}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.historyHighlightsStats}>
                {historyHighlightsData.stats.map((stat, index) => (
                  <article
                    key={`history-stat-${index}`}
                    className={styles.historyHighlightsStatCard}
                  >
                    <span className={styles.historyHighlightsStatValue}>{stat.value}</span>
                    <span className={styles.historyHighlightsStatLabel}>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{missionData.title}</h2>
              <p className={styles.sectionDescription}>{missionData.description}</p>
            </div>

            <div className={styles.missionCardsGrid}>
              <article className={`${styles.missionCard} ${styles.missionCardBlue}`}>
                <div
                  className={`${styles.missionIcon} ${styles.missionIconBlue}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className={styles.missionTitle}>{missionData.mission.title}</h3>
                <p className={styles.missionDescription}>{missionData.mission.description}</p>
              </article>

              <article className={`${styles.missionCard} ${styles.missionCardPurple}`}>
                <div
                  className={`${styles.missionIcon} ${styles.missionIconPurple}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.5C8 4.5 4.8 7.7 4.8 11.7C4.8 15.7 8 18.9 12 18.9C16 18.9 19.2 15.7 19.2 11.7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 7.2V11.7L14.9 13.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.missionTitle}>{missionData.vision.title}</h3>
                <p className={styles.missionDescription}>{missionData.vision.description}</p>
              </article>

              <article className={`${styles.missionCard} ${styles.missionCardGreen}`}>
                <div
                  className={`${styles.missionIcon} ${styles.missionIconGreen}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 20L6.8 16.5C5.7 15.7 5 14.5 5 13.1C5 10.9 6.8 9.1 9 9.1C10.2 9.1 11.3 9.6 12 10.5C12.7 9.6 13.8 9.1 15 9.1C17.2 9.1 19 10.9 19 13.1C19 14.5 18.3 15.7 17.2 16.5L12 20Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.missionTitle}>{missionData.valuesTitle}</h3>
                <ul className={styles.valuesList}>
                  {missionData.values.map((value, index) => (
                    <li key={`value-${index}`} className={styles.valueItem}>
                      <span className={styles.valueBullet} aria-hidden="true">
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                          <path
                            d="M5.2 8.2L7.1 10.1L10.8 6.4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className={styles.diferenciaisSection}>
          <div className={styles.container}>
            <div className={styles.diferenciaisPanel}>
              <div className={styles.diferenciaisHeader}>
                <h2 className={styles.diferenciaisTitle}>{diferenciaisData.title}</h2>
                <p className={styles.diferenciaisSubtitle}>{diferenciaisData.description}</p>
              </div>

              <div className={styles.diferenciaisGrid}>
                {diferenciaisData.items.map((item, index) => (
                  <article key={`diferencial-${index}`} className={styles.diferencialCard}>
                    <div className={styles.diferencialIcon} aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3 className={styles.diferencialTitle}>{item.title}</h3>
                    <p className={styles.diferencialDescription}>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className={styles.commitmentSection}>
          <div className={styles.container}>
            <div className={styles.commitmentPanel}>
              <h2 className={styles.commitmentTitle}>{commitmentData.title}</h2>
              <p className={styles.commitmentDescription}>{commitmentData.description}</p>

              <div className={styles.commitmentStats}>
                {commitmentData.stats.map((stat, index) => (
                  <article key={`commitment-stat-${index}`} className={styles.commitmentStatItem}>
                    <span className={styles.commitmentStatValue}>{stat.value}</span>
                    <span className={styles.commitmentStatLabel}>{stat.label}</span>
                  </article>
                ))}
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

SobreNosPage.displayName = 'SobreNosPage';

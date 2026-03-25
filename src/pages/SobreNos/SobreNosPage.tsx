import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';
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
  badge: 'Quem Somos',
  title: 'Sobre Nós',
  description:
    'Há mais de 25 anos, a Praxis Engenharia Clínica é referência em gestão de tecnologia médico-hospitalar no Brasil, oferecendo soluções integradas que garantem segurança, conformidade e eficiência operacional.',
};

// Mission, Vision, Values data
const missionData = {
  mission: {
    title: 'Missão',
    description:
      'Proporcionar às instituições de saúde soluções integradas de engenharia clínica que garantam segurança, qualidade e eficiência na gestão de suas tecnologias, contribuindo para a excelência no atendimento ao paciente.',
  },
  vision: {
    title: 'Visão',
    description:
      'Ser reconhecida como a maior e mais confiável empresa de engenharia clínica do Brasil, referência em inovação, qualidade e sustentabilidade na gestão de tecnologia médico-hospitalar.',
  },
  values: [
    {
      title: 'Excelência Técnica',
      description: 'Compromisso com os mais altos padrões de qualidade em todos os serviços prestados',
    },
    {
      title: 'Ética e Transparência',
      description: 'Conduta profissional transparente e ética em todas as relações comerciais',
    },
    {
      title: 'Inovação Contínua',
      description: 'Busca constante por novas tecnologias e metodologias para melhorar resultados',
    },
    {
      title: 'Compromisso com o Cliente',
      description: 'Dedicação total à satisfação e ao sucesso dos clientes atendidos',
    },
    {
      title: 'Responsabilidade Social',
      description: 'Contribuição para a melhoria da saúde brasileira e bem-estar da sociedade',
    },
  ],
};

// History data
const historyData = {
  title: 'Nossa Trajetória',
  description:
    'Ao longo de mais de duas décadas, construímos uma história de pioneirismo e liderança no setor de engenharia clínica brasileira.',
  milestones: [
    {
      year: '1998',
      title: 'Fundação',
      description:
        'Início das operações da Praxis Engenharia Clínica com foco em manutenção de equipamentos médicos.',
    },
    {
      year: '2005',
      title: 'Expansão de Serviços',
      description:
        'Ampliação do portfólio para incluir planejamento tecnológico e consultoria em acreditação hospitalar.',
    },
    {
      year: '2010',
      title: 'Plataforma Digital',
      description:
        'Lançamento da primeira versão do sistema de gestão de equipamentos, pioneiro no mercado brasileiro.',
    },
    {
      year: '2015',
      title: 'Certificação ISO 9001',
      description:
        'Obtenção da certificação ISO 9001, consolidando os processos de qualidade da empresa.',
    },
    {
      year: '2020',
      title: 'Crescimento Nacional',
      description:
        'Expansão para atuar em todo o território nacional, atendendo mais de 150 instituições de saúde.',
    },
    {
      year: '2023',
      title: 'Líder de Mercado',
      description:
        'Reconhecimento como uma das maiores empresas de engenharia clínica do Brasil com mais de 500 projetos entregues.',
    },
  ],
};

// Team data
const teamData = {
  title: 'Nossa Equipe',
  description:
    'Contamos com uma equipe multidisciplinar altamente qualificada, com profissionais especializados e experiência comprovada no setor de saúde.',
  stats: [
    { value: '60+', label: 'Profissionais' },
    { value: '15+', label: 'Engenheiros Clínicos' },
    { value: '25+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Certificados' },
  ],
  features: [
    {
      title: 'Profissionais Especializados',
      description: 'Equipe com formação técnica e certificações internacionais em engenharia clínica',
    },
    {
      title: 'Experiência Comprovada',
      description: 'Anos de atuação em instituições de diferentes portes e complexidades',
    },
    {
      title: 'Atualização Contínua',
      description: 'Participação em treinamentos e congressos nacionais e internacionais',
    },
    {
      title: 'Metodologia Própria',
      description: 'Processos validados e alinhados com as melhores práticas do mercado',
    },
  ],
};

// Diferenciais data
const diferenciaisData = {
  title: 'Por Que Escolher a Praxis?',
  description:
    'Nossa experiência e metodologia diferenciada garantem resultados superiores para suas necessidades.',
  items: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Experiência Comprovada',
      description: 'Mais de 500 projetos delivered em instituições de todos os portes',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 3L18 6V12C18 16 15.5 18.8 12 20C8.5 18.8 6 16 6 12V6L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Equipe Multidisciplinar',
      description: 'Profissionais especializados em todas as áreas da engenharia clínica',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Tecnologia Própria',
      description: 'Plataforma digital com inteligência de dados e rastreabilidade completa',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: 'Certificações e Reconhecimento',
      description: 'ISO 9001 e equipe com certificações internacionais do setor',
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
        { label: 'Engenharia Clínica', href: '/engenharia-clinica' },
        { label: 'Planejamento Tecnológico', href: '/planejamento-tecnologico' },
        { label: 'Acreditação', href: '/acreditacao' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '/sobre-nos' },
        { label: 'Equipe', href: '#equipe' },
        { label: 'Carreiras', href: '/carreiras' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: '11-2609-7511', href: 'tel:+551126097511', icon: 'phone' },
        {
          label: 'contato@praxisengenharia.com.br',
          href: 'mailto:contato@praxisengenharia.com.br',
          icon: 'email',
        },
        {
          label: 'Rua Roma, 620 - Lapa, São Paulo - SP, 05050-090',
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
    {
      platform: 'instagram',
      href: 'https://www.instagram.com/praxisengenhariaclinica/',
      ariaLabel: 'Instagram',
    },
  ],
  copyright: '© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.',
  legalLinks: [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
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
        />

        {/* Mission, Vision, Values Section */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <h3 className={styles.missionTitle}>{missionData.mission.title}</h3>
                <p className={styles.missionDescription}>{missionData.mission.description}</p>
              </div>
              <div className={styles.missionCard}>
                <h3 className={styles.missionTitle}>{missionData.vision.title}</h3>
                <p className={styles.missionDescription}>{missionData.vision.description}</p>
              </div>
            </div>

            <div className={styles.valuesSection}>
              <h3 className={styles.valuesTitle}>Nossos Valores</h3>
              <div className={styles.valuesGrid}>
                {missionData.values.map((value, index) => (
                  <article key={`value-${index}`} className={styles.valueItem}>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className={styles.historySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{historyData.title}</h2>
              <p className={styles.sectionDescription}>{historyData.description}</p>
            </div>

            <div className={styles.timeline}>
              {historyData.milestones.map((milestone, index) => (
                <article key={`milestone-${index}`} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>
                    <span className={styles.yearBadge}>{milestone.year}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                    <p className={styles.timelineDescription}>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className={styles.diferenciaisSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{diferenciaisData.title}</h2>
              <p className={styles.sectionDescription}>{diferenciaisData.description}</p>
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
        </section>

        {/* Team Section */}
        <section id="equipe" className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{teamData.title}</h2>
              <p className={styles.sectionDescription}>{teamData.description}</p>
            </div>

            <div className={styles.teamStats}>
              {teamData.stats.map((stat, index) => (
                <div key={`stat-${index}`} className={styles.teamStat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.teamFeatures}>
              {teamData.features.map((feature, index) => (
                <article key={`feature-${index}`} className={styles.teamFeature}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Vamos Construir Uma Parceria?</h2>
              <p className={styles.ctaText}>
                Entre em contato conosco e descubra como a Praxis pode transformar a gestão de
                tecnologia da sua instituição.
              </p>
              <a href="/contato" className={styles.ctaButton}>
                Fale Conosco
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10H12M12 6L16 10L12 14"
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

SobreNosPage.displayName = 'SobreNosPage';
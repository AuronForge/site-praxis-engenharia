import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';

import styles from './EngenhariaClinicaPage.module.scss';

// Mock data for the page - would come from a service/API in production
const headerData = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Engenharia Clínica',
    logoSrc: '/images/logo.svg',
  },
  links: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Gestão', href: '#plataforma' },
    { label: 'Clientes', href: '#clientes' },
  ],
  cta: {
    label: 'Contato',
    href: '#contato',
  },
};

const heroData = {
  badge: 'Engenharia Clínica',
  title: 'Gestão Completa de Tecnologia Hospitalar',
  description:
    'Oferecemos soluções integradas para gestão do parque tecnológico de instituições de saúde, garantindo segurança, conformidade regulatória e eficiência operacional.',
  stats: [
    { value: '15.000+', label: 'Equipamentos Mantidos' },
    { value: '98%', label: 'Disponibilidade Média' },
    { value: '25+', label: 'Anos de Experiência' },
  ],
};

const servicesData = {
  title: 'Nossos Serviços',
  description:
    'Comprehensive solutions for clinical engineering management, from preventive maintenance to regulatory compliance.',
  services: [
    {
      icon: 'wrench',
      title: 'Manutenção Preventiva',
      description:
        'Programas de manutenção planejados para maximizar a vida útil dos equipamentos e evitar falhas inesperadas.',
      features: [
        'Cronogramas personalizados por equipamento',
        'Checklists detalhados de inspeção',
        'Relatórios de execução',
        'Gestão de peças de reposição',
      ],
    },
    {
      icon: 'tools',
      title: 'Manutenção Corretiva',
      description:
        'Resposta rápida e eficiente para reparos emergenciais, minimizando o tempo de inatividade dos equipamentos.',
      features: [
        'Suporte técnico 24/7',
        'Diagnóstico remoto e presencial',
        'Reparos com peças originais',
        'Garantia estendida',
      ],
    },
    {
      icon: 'gauge',
      title: 'Calibração',
      description:
        'Serviços de calibração rastreáveis para garantir a precisão e confiabilidade das medições.',
      features: [
        'Calibração acreditada RBC',
        'Certificados rastreáveis',
        'Ajuste e regulagem',
        'Laudos técnicos completos',
      ],
    },
    {
      icon: 'clipboard',
      title: 'Auditoria Técnica',
      description:
        'Avaliação completa do estado técnico dos equipamentos e conformidade com normas regulamentadoras.',
      features: [
        'Laudos técnicos detalhados',
        'Avaliação de conformidade ANVISA',
        'Recomendações de melhoria',
        'Plano de ação corretiva',
      ],
    },
  ],
};

const processData = {
  title: 'Nossa Metodologia',
  description:
    'Processos estruturados e baseados em evidências para garantir resultados consistentes e previsíveis.',
  steps: [
    {
      number: '01',
      title: 'Diagnóstico',
      description:
        'Avaliação detalhada do parque tecnológico, identificando necessidades e oportunidades de melhoria.',
    },
    {
      number: '02',
      title: 'Planejamento',
      description:
        'Desenvolvimento de plano de gestão personalizado com cronograma, recursos e indicadores de sucesso.',
    },
    {
      number: '03',
      title: 'Execução',
      description:
        'Implementação das atividades de manutenção, calibração e treinamento conforme planejado.',
    },
    {
      number: '04',
      title: 'Monitoramento',
      description:
        'Acompanhamento contínuo através de indicadores e relatórios gerenciais em tempo real.',
    },
  ],
};

const benefitsData = {
  title: 'Benefícios da Gestão Profissional',
  description:
    'Transforme a gestão da sua tecnologia hospitalar com uma parceria estratégica.',
  benefits: [
    {
      icon: 'shield',
      title: 'Conformidade Regulatória',
      description:
        'Garantia de atendimento às normas ANVISA, ABNT e requisitos de acreditação (ONA, ISO, JCI).',
    },
    {
      icon: 'chart',
      title: 'Redução de Custos',
      description:
        'Otimização do ciclo de vida dos equipamentos e redução de despesas com substituições emergenciais.',
    },
    {
      icon: 'pulse',
      title: 'Maior Disponibilidade',
      description:
        'Aumento do tempo de operação dos equipamentos através de manutenção preventiva efetiva.',
    },
    {
      icon: 'brain',
      title: 'Decisões Baseadas em Dados',
      description:
        'Plataforma digital com indicadores estratégicos para gestão e planejamento assertivo.',
    },
  ],
};

const ctaData = {
  title: 'Pronto para transformar a gestão da sua tecnologia hospitalar?',
  description:
    'Nossa equipe está pronta para desenvolver uma solução personalizada para sua instituição.',
  buttonLabel: 'Fale com um Especialista',
  buttonHref: '#contato',
};

const footerData = {
  logo: {
    src: '/images/logo-light.svg',
    alt: 'Praxis Engenharia Clínica',
  },
  description:
    'Excelência em gestão de tecnologia médico-hospitalar com mais de 25 anos de experiência no mercado brasileiro.',
  sections: [
    {
      title: 'Serviços',
      links: [
        { label: 'Engenharia Clínica', href: '#engenharia-clinica' },
        { label: 'Planejamento', href: '#planejamento' },
        { label: 'Acreditação', href: '#acreditacao' },
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
    { platform: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
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
 * EngenhariaClinicaPage Component
 *
 * Dedicated page for Clinical Engineering services.
 * Composes multiple sections to present a complete overview
 * of the clinical engineering services offered by Praxis.
 *
 * Architecture:
 * - This is a PAGE component (orchestrator)
 * - Manages page-level data (mock data for now)
 * - Composes UI section components
 * - Uses semantic HTML for accessibility
 */
export function EngenhariaClinicaPage(): React.ReactElement {
  return (
    <>
      {/* Header - Top navigation */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      {/* Main content wrapper */}
      <main role="main" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              {heroData.badge && (
                <span className={styles.heroBadge}>{heroData.badge}</span>
              )}
              <h1 className={styles.heroTitle}>{heroData.title}</h1>
              <p className={styles.heroDescription}>{heroData.description}</p>
              <div className={styles.heroStats}>
                {heroData.stats.map((stat, index) => (
                  <div key={index} className={styles.heroStat}>
                    <span className={styles.heroStatValue}>{stat.value}</span>
                    <span className={styles.heroStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services} id="servicos">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{servicesData.title}</h2>
              <p className={styles.sectionDescription}>{servicesData.description}</p>
            </div>
            <div className={styles.servicesGrid}>
              {servicesData.services.map((service, index) => (
                <article key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.serviceFeature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{processData.title}</h2>
              <p className={styles.sectionDescription}>{processData.description}</p>
            </div>
            <div className={styles.processSteps}>
              {processData.steps.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{benefitsData.title}</h2>
              <p className={styles.sectionDescription}>{benefitsData.description}</p>
            </div>
            <div className={styles.benefitsGrid}>
              {benefitsData.benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <BenefitIcon name={benefit.icon} />
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>{ctaData.title}</h2>
              <p className={styles.ctaDescription}>{ctaData.description}</p>
              <a href={ctaData.buttonHref} className={styles.ctaButton}>
                {ctaData.buttonLabel}
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

/**
 * ServiceIcon Component
 * Renders appropriate icon based on service type
 */
function ServiceIcon({ name }: { name: string }): React.ReactElement {
  const icons: Record<string, React.ReactNode> = {
    wrench: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tools: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <path d="M12 2v6" />
        <path d="M12 22v-6" />
      </svg>
    ),
    gauge: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    clipboard: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
  };

  return <>{icons[name] || icons.wrench}</>;
}

/**
 * BenefitIcon Component
 * Renders appropriate icon based on benefit type
 */
function BenefitIcon({ name }: { name: string }): React.ReactElement {
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    chart: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    pulse: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    brain: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
  };

  return <>{icons[name] || icons.shield}</>;
}

EngenhariaClinicaPage.displayName = 'EngenhariaClinicaPage';

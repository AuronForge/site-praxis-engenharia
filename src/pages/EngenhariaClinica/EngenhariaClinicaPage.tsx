import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';
import { Hero } from '@ui-components/sections/Hero';
import { ManagementSection } from '@ui-components/sections/ManagementSection';
import { ServicesSection } from '@ui-components/sections/ServicesSection';

import styles from './EngenhariaClinicaPage.module.scss';

// Mock data for the page - would come from a service/API in production
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
  ],
  cta: {
    label: 'Contato',
    href: '#contato',
  },
};

const heroData = {
  badge: 'Serviço Especializado',
  title: 'Engenharia Clínica',
  description:
    'Gestão completa e especializada do parque tecnológico hospitalar, garantindo segurança, disponibilidade e conformidade regulatória dos equipamentos médicos.',
};

const managementData = {
  title: 'Gestão Profissional de Tecnologia Médico-Hospitalar',
  description:
    'Nossa equipe de engenheiros clínicos e técnicos especializados atua de forma integrada na gestão do ciclo de vida dos equipamentos médico-hospitalares, desde o planejamento de aquisição até o descarte final.',
  methodology:
    'Com metodologia baseada em normas nacionais e internacionais (ABNT, ANVISA, IEC), garantimos que sua instituição opere com máxima eficiência, segurança e conformidade regulatória.',
  whyChooseTitle: 'Por que escolher a Praxis?',
  whyChooseItems: [
    { text: 'Equipe certificada e continuamente atualizada' },
    { text: 'Sistema próprio de gestão tecnológica' },
    { text: 'Atendimento 24/7 para situações emergenciais' },
    { text: 'Experiência com mais de 15.000 equipamentos' },
  ],
  metrics: [
    {
      value: '98%',
      label: 'Disponibilidade Média',
      description: 'Taxa de disponibilidade dos equipamentos críticos sob gestão',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="3 17 9 11 13 15 21 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: '4h',
      label: 'Tempo Médio de Resposta',
      description: 'Para atendimento de chamados corretivos',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      value: '100%',
      label: 'Conformidade',
      description: 'Atendimento às normas ANVISA e requisitos de acreditação',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"
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

const servicesData = {
  title: 'Nossos Serviços de Engenharia Clínica',
  description: 'Soluções completas para todas as necessidades do seu parque tecnológico',
  services: [
    {
      title: 'Manutenção Preventiva',
      description:
        'Programa estruturado de manutenções preventivas conforme recomendações dos fabricantes e criticidade dos equipamentos.',
      bullets: [
        'Cronograma customizado por equipamento',
        'Registro detalhado de todas as intervenções',
        'Redução de falhas inesperadas',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 1v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m14 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Manutenção Corretiva',
      description:
        'Atendimento ágil e eficiente para resolução de falhas e problemas técnicos, minimizando tempo de inatividade.',
      bullets: [
        'Central de atendimento dedicada',
        'Técnicos especializados por área',
        'Gestão de peças e componentes',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Calibração e Metrologia',
      description:
        'Serviços de calibração rastreável à RBC, garantindo precisão e conformidade dos equipamentos de medição.',
      bullets: [
        'Laboratório próprio credenciado',
        'Certificados rastreáveis à RBC',
        'Controle de vencimentos',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
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
      title: 'Inventário Técnico',
      description:
        'Levantamento completo do parque tecnológico com catalogação, classificação e documentação técnica.',
      bullets: [
        'Cadastro completo de equipamentos',
        'Classificação de risco e criticidade',
        'Organização de documentação técnica',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v6h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Gestão de Riscos',
      description:
        'Análise e gestão de riscos associados ao uso de tecnologias médicas, priorizando a segurança do paciente.',
      bullets: [
        'Classificação de criticidade',
        'Planos de contingência',
        'Matriz de risco atualizada',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      title: 'Treinamento de Equipes',
      description:
        'Capacitação de equipes assistenciais e técnicas para uso seguro e eficiente dos equipamentos médicos.',
      bullets: [
        'Treinamentos in loco',
        'Materiais didáticos customizados',
        'Certificados de participação',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
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

const processData = {
  title: 'Nossa Metodologia de Trabalho',
  description: 'Processo estruturado para garantir excelência operacional',
  steps: [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Análise completa do parque tecnológico e necessidades da instituição',
    },
    {
      number: '2',
      title: 'Planejamento',
      description: 'Desenvolvimento de plano de gestão customizado e cronogramas',
    },
    {
      number: '3',
      title: 'Execução',
      description: 'Implementação dos serviços com equipe dedicada e sistemas integrados',
    },
    {
      number: '4',
      title: 'Monitoramento',
      description: 'Acompanhamento contínuo com indicadores e relatórios gerenciais',
    },
  ],
};

const ctaData = {
  title: 'Pronto para Otimizar Sua Engenharia Clínica?',
  description:
    'Entre em contato com nossos especialistas e conheça como podemos ajudar sua instituição a alcançar excelência operacional',
  primaryButtonLabel: 'Solicitar Proposta',
  primaryButtonHref: '/contato',
  secondaryButtonLabel: 'Voltar ao Início',
  secondaryButtonHref: '/',
};

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
        { label: 'Acreditação', href: '#acreditacao' },
        { label: 'Contato', href: '/contato' },
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
        <Hero badge={heroData.badge} title={heroData.title} description={heroData.description} />

        {/* Management Section */}
        <ManagementSection
          title={managementData.title}
          description={managementData.description}
          methodology={managementData.methodology}
          whyChooseTitle={managementData.whyChooseTitle}
          whyChooseItems={managementData.whyChooseItems}
          metrics={managementData.metrics}
        />

        {/* Services Section */}
        <ServicesSection
          title={servicesData.title}
          description={servicesData.description}
          services={servicesData.services}
        />

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.processContainer}>
            <div className={styles.processPanel}>
              <div className={styles.processHeader}>
                <h2 className={styles.processTitle}>{processData.title}</h2>
                <p className={styles.processDescription}>{processData.description}</p>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaPanel}>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>{ctaData.title}</h2>
                <p className={styles.ctaDescription}>{ctaData.description}</p>
                <div className={styles.ctaActions}>
                  <a href={ctaData.primaryButtonHref} className={styles.ctaButtonPrimary}>
                    <span>{ctaData.primaryButtonLabel}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href={ctaData.secondaryButtonHref} className={styles.ctaButtonSecondary}>
                    {ctaData.secondaryButtonLabel}
                  </a>
                </div>
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

EngenhariaClinicaPage.displayName = 'EngenhariaClinicaPage';

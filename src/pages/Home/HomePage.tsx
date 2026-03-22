import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { ExperienceSection } from '@ui-components/sections/ExperienceSection';
import { Footer } from '@ui-components/sections/Footer';
import { Hero } from '@ui-components/sections/Hero';
import { PlatformSection } from '@ui-components/sections/PlatformSection';
import { SegmentsSection } from '@ui-components/sections/SegmentsSection';
import { ServicesSection } from '@ui-components/sections/ServicesSection';
import { TestimonialsSection } from '@ui-components/sections/TestimonialsSection';

// Mock data for sections
const heroData = {
  badge: 'Certificados e Reconhecidos',
  title: 'Engenharia Clínica de Excelência',
  highlightWord: 'Excelência',
  description:
    'Soluções integradas em gestão de tecnologia médico-hospitalar para instituições que buscam segurança, conformidade e eficiência operacional.',
  primaryCTA: {
    text: 'Fale com Especialistas',
    href: '#contato',
  },
  secondaryCTA: {
    text: 'Conheça os Serviços',
    href: '#servicos',
  },
  stats: [
    { value: '25+', label: 'Anos de Experiência', icon: 'trophy' as const },
    {
      value: '500+',
      label: 'Projetos Concluídos',
      icon: 'chart' as const,
    },
    { value: '100%', label: 'Conformidade ANVISA', icon: 'shield' as const },
  ],
  backgroundImage: '/images/hero-bg.jpg',
};

const servicesData = {
  services: [
    {
      title: 'Engenharia Clínica',
      description:
        'Gestão completa do parque tecnológico das instituições assistenciais, incluindo planejamento, manutenção e controle de qualidade.',
      bullets: ['Manutenção Preventiva', 'Manutenção Corretiva', 'Calibração', 'Auditoria Técnica'],
      href: '#engenharia-clinica',
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
    {
      title: 'Planejamento Tecnológico',
      description:
        'Assessoria especializada para aquisição, dimensionamento e substituição tecnológica de equipamentos médico-hospitalares.',
      bullets: [
        'Plano Diretor',
        'Especificações Técnicas',
        'Comissionamento',
        'Análise de Viabilidade',
      ],
      href: '#planejamento',
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
      title: 'Acreditação',
      description:
        'Suporte integrado para processos de certificação (ONA, ISO, JCI) com adequação de processos e documentação técnica.',
      bullets: ['Preparação ONA', 'ISO 9001', 'Documentação Técnica', 'Auditoria'],
      href: '#acreditacao',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M9 13L7 22L12 19L17 22L15 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
  ctaBanner: {
    title: 'Precisa de uma solução personalizada?',
    text: 'Nossa equipe está pronta para desenvolver um projeto sob medida para sua instituição.',
    buttonLabel: 'Solicitar Proposta',
    href: '#contato',
  },
};

const experienceData = {
  heading: 'Mais de 25 Anos Servindo a Saúde Brasileira',
  description:
    'Somos referência em engenharia clínica no Brasil, com expertise consolidada em instituições de pequeno, médio e grande porte.',
  features: [
    {
      title: 'Equipe Multidisciplinar',
      description:
        'Profissionais especializados e experientes com formação técnica, além de certificações e qualificações.',
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
      title: 'Metodologia Reconhecida',
      description:
        'Processos validados e orientados por indicadores para garantir previsibilidade e segurança operacional.',
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
      title: 'Tecnologia Própria',
      description:
        'Plataforma com rastreabilidade, inteligência de dados e suporte à decisão em tempo real.',
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
          <path
            d="M8 21h8M12 17v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
  images: [
    { src: '/images/experience-1.jpg', alt: 'Equipe técnica trabalhando' },
    { src: '/images/experience-2.jpg', alt: 'Profissional em atendimento' },
    { src: '/images/experience-3.jpg', alt: 'Análise de equipamentos' },
    { src: '/images/experience-4.jpg', alt: 'Tecnologia e inovação' },
  ],
  badge: 'ISO 9001\nCertificado',
  stats: [
    { value: '150+', label: 'Instituições Atendidas', icon: 'building' as const },
    { value: '60+', label: 'Profissionais Especializados', icon: 'users' as const },
    { value: '98%', label: 'Taxa de Satisfação', icon: 'trending-up' as const },
    { value: '15k+', label: 'Equipamentos Gerenciados', icon: 'check-circle' as const },
  ],
};

const platformData = {
  features: [
    {
      iconName: 'database',
      title: 'Inventário Inteligente',
      description:
        'Cadastro completo com histórico, documentação técnica e rastreabilidade de cada equipamento.',
    },
    {
      iconName: 'chart',
      title: 'Indicadores de Performance',
      description:
        'KPIs customizados para análise de disponibilidade, custos e eficiência operacional.',
    },
    {
      iconName: 'shield',
      title: 'Gestão de Riscos',
      description: 'Classificação e priorização baseada em criticidade para segurança do paciente.',
    },
    {
      iconName: 'document',
      title: 'Conformidade Regulatória',
      description:
        'Controle de documentação, calibrações e manutenções conforme ANVISA e normas técnicas.',
    },
    {
      iconName: 'bell',
      title: 'Alertas Automatizados',
      description:
        'Notificações proativas para manutenções preventivas, calibrações e vencimentos.',
    },
    {
      iconName: 'gauge',
      title: 'Dashboards Executivos',
      description: 'Visualização estratégica para tomada de decisão gerencial em tempo real.',
    },
  ],
};

const segmentsData = {
  title: 'Confiança de Instituições Líderes',
  description:
    'Atendemos diversos segmentos do setor de saúde com soluções personalizadas para cada necessidade específica.',
  segments: [
    {
      iconName: 'hospital',
      value: '80+',
      label: 'Hospitais Gerais',
      description: 'Instituições de média e grande complexidade',
    },
    {
      iconName: 'heart',
      value: '35+',
      label: 'Clínicas Especializadas',
      description: 'Centros de diagnóstico, cirurgia e terapia',
    },
    {
      iconName: 'lab',
      value: '45+',
      label: 'Centros Diagnósticos',
      description: 'Laboratórios e centros de imagem',
    },
    {
      iconName: 'building',
      value: '12+',
      label: 'Operadoras de Saúde',
      description: 'Planos de saúde corporativos',
    },
  ],
};

const testimonialsData = {
  title: 'O que nossos clientes dizem',
  testimonials: [
    {
      id: '1',
      quote:
        'A Praxis transformou nossa gestão de equipamentos. O atendimento é excepcional e a plataforma digital trouxe transparência e eficiência que não tínhamos antes.',
      author: 'Dra. Maria Silva',
      role: 'Diretora Técnica',
      organization: 'Hospital Regional de São Paulo',
      avatar: '/images/testimonial-1.svg',
    },
    {
      id: '2',
      quote:
        'Serviço técnico ágil e de extrema qualidade. A equipe é altamente qualificada e sempre pronta para resolver qualquer demanda de forma rápida e eficiente.',
      author: 'Eng. João Martins',
      role: 'Gerente de Manutenção',
      organization: 'Clínica Vida Plena',
      avatar: '/images/testimonial-2.svg',
    },
    {
      id: '3',
      quote:
        'Profissionalismo e expertise técnica de alto nível. O suporte para nossa acreditação ONA foi fundamental para alcançarmos a certificação com excelência.',
      author: 'Eng. Roberto Alves',
      role: 'Coordenador de Engenharia',
      organization: 'Centro Médico Esperança',
      avatar: '/images/testimonial-3.svg',
    },
  ],
  clientLogos: [
    { src: '/images/logo.svg', alt: 'Cliente 1' },
    { src: '/images/logo.svg', alt: 'Cliente 2' },
    { src: '/images/logo.svg', alt: 'Cliente 3' },
    { src: '/images/logo.svg', alt: 'Cliente 4' },
    { src: '/images/logo.svg', alt: 'Cliente 5' },
    { src: '/images/logo.svg', alt: 'Cliente 6' },
  ],
};

const headerData = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Engenharia Clínica',
    logoSrc: '/images/logo.jpg',
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
 * HomePage Component
 *
 * Orchestrates the home page layout by composing multiple section components.
 * Each section is a presentational component that receives data via props.
 *
 * Architecture:
 * - This is a PAGE component (orchestrator)
 * - Manages page-level data (mock data for now)
 * - Composes UI section components
 * - Uses semantic HTML for accessibility
 */
export function HomePage(): React.ReactElement {
  return (
    <>
      {/* Header - Top navigation */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      {/* Main content wrapper for semantic HTML */}
      <main role="main" className="main">
        {/* Hero Section - Above the fold with CTA */}
        <Hero
          badge={heroData.badge}
          title={heroData.title}
          highlightWord={heroData.highlightWord}
          description={heroData.description}
          primaryCTA={heroData.primaryCTA}
          secondaryCTA={heroData.secondaryCTA}
          stats={heroData.stats}
          backgroundImage={heroData.backgroundImage}
        />

        {/* Services Section - 3 service cards + CTA banner */}
        <ServicesSection services={servicesData.services} ctaBanner={servicesData.ctaBanner} />

        {/* Experience Section - Company history + features + stats */}
        <ExperienceSection
          heading={experienceData.heading}
          description={experienceData.description}
          features={experienceData.features}
          images={experienceData.images}
          badge={experienceData.badge}
          stats={experienceData.stats}
        />

        {/* Platform Section - Dark section with platform features */}
        <PlatformSection features={platformData.features} />

        {/* Segments Section - Market segments with metrics */}
        <SegmentsSection
          title={segmentsData.title}
          description={segmentsData.description}
          segments={segmentsData.segments}
        />

        {/* Testimonials Section - Client testimonials + logos */}
        <TestimonialsSection
          title={testimonialsData.title}
          testimonials={testimonialsData.testimonials}
          clientLogos={testimonialsData.clientLogos}
        />
      </main>

      {/* Footer - Bottom navigation and contact info */}
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

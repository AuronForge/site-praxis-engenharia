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
  title: 'Engenharia Clínica',
  subtitle: 'de Excelência',
  description:
    'Soluções integradas em gestão de tecnologia médico-hospitalar para instituições que buscam segurança, sustentabilidade e eficiência operacional.',
  primaryCTA: {
    text: 'Solicitar Orçamento',
    href: '#contato',
  },
  secondaryCTA: {
    text: 'Conheça os Serviços',
    href: '#servicos',
  },
  stats: [
    { value: '25+', label: 'Anos de Experiência' },
    { value: '500+', label: 'Equipamentos Gerenciados' },
    { value: '100%', label: 'Conformidade Regulatória' },
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
    },
    {
      title: 'Acreditação',
      description:
        'Suporte integrado para processos de certificação (ONA, ISO, JCI) com adequação de processos e documentação técnica.',
      bullets: ['Preparação ONA', 'ISO 9001', 'Documentação Técnica', 'Auditoria'],
      href: '#acreditacao',
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
  badge: 'Experiência Comprovada',
  title: 'Mais de 25 Anos',
  subtitle: 'Servindo à Saúde Brasileira',
  description:
    'Somos referência em engenharia clínica no Brasil, com expertise consolidada em instituições de pequeno, médio e grande porte.',
  features: [
    {
      icon: 'users',
      title: 'Equipe Multidisciplinar',
      description:
        'Profissionais especializados e experientes com formação técnica, além de certificações e qualificações.',
    },
    {
      icon: 'lightbulb',
      title: 'Tecnologia Prática',
      description:
        'Implementamos soluções tecnológicas que otimizam a rotina das equipes médicas e aumentam a segurança do paciente.',
    },
  ],
  images: [
    { src: '/images/experience-1.jpg', alt: 'Equipe técnica trabalhando' },
    { src: '/images/experience-2.jpg', alt: 'Profissional em atendimento' },
    { src: '/images/experience-3.jpg', alt: 'Análise de equipamentos' },
    { src: '/images/experience-4.jpg', alt: 'Tecnologia médica' },
  ],
  stats: [
    { value: '150+', label: 'Clientes Ativos' },
    { value: '60+', label: 'Cidades Atendidas' },
    { value: '98%', label: 'Taxa de Contratos Renovados' },
    { value: '15k+', label: 'Equipamentos Mantidos' },
  ],
};

const platformData = {
  title: 'Sistema de Gestão Avançado',
  description:
    'Tecnologia proprietária desenvolvida especificamente para as necessidades de engenharia clínica moderna, integrando gestão, rastreabilidade e inteligência de dados.',
  features: [
    {
      icon: 'brain',
      title: 'Inventário Inteligente',
      description:
        'Controle total do parque de equipamentos, status de manutenções, histórico e gestão integrada.',
    },
    {
      icon: 'gauge',
      title: 'Indicadores de Performance',
      description:
        'Mais de 40 indicadores para gestão estratégica, acompanhamento contínuo e melhoria de processos.',
    },
    {
      icon: 'shield',
      title: 'Gestão de Riscos',
      description:
        'Identificação e mitigação de riscos associados ao uso de equipamentos médicos em tempo real.',
    },
    {
      icon: 'settings',
      title: 'Conformidade Regulatória',
      description:
        'Atendimento automático às normas ANVISA, ABNT e demais requisitos regulatórios.',
    },
    {
      icon: 'bell',
      title: 'Alertas Automatizados',
      description:
        'Notificações preventivas para calibrações, manutenções preventivas e vencimentos.',
    },
    {
      icon: 'monitor',
      title: 'Dashboards Executivos',
      description:
        'Visualização estratégica dos dados críticos para tomada de decisão ágil e assertiva.',
    },
  ],
};

const segmentsData = {
  title: 'Confiança de Instituições Líderes',
  description:
    'Atendemos diversos segmentos do setor de saúde com soluções personalizadas para cada necessidade específica.',
  segments: [
    {
      icon: 'hospital',
      value: '80+',
      label: 'Hospitais Gerais',
      description: 'Instituições de média e grande complexidade',
    },
    {
      icon: 'heart',
      value: '35+',
      label: 'Clínicas Especializadas',
      description: 'Centros de diagnóstico, cirurgia e terapia',
    },
    {
      icon: 'lab',
      value: '45+',
      label: 'Centros Diagnósticos',
      description: 'Laboratórios e centros de imagem',
    },
    {
      icon: 'building',
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
      avatar: '/images/testimonial-1.jpg',
    },
    {
      id: '2',
      quote:
        'Serviço técnico ágil e de extrema qualidade. A equipe é altamente qualificada e sempre pronta para resolver qualquer demanda de forma rápida e eficiente.',
      author: 'Eng. João Martins',
      role: 'Gerente de Manutenção',
      organization: 'Clínica Vida Plena',
      avatar: '/images/testimonial-2.jpg',
    },
    {
      id: '3',
      quote:
        'Profissionalismo e expertise técnica de alto nível. O suporte para nossa acreditação ONA foi fundamental para alcançarmos a certificação com excelência.',
      author: 'Eng. Roberto Alves',
      role: 'Coordenador de Engenharia',
      organization: 'Centro Médico Esperança',
      avatar: '/images/testimonial-3.jpg',
    },
  ],
  clientLogos: [
    { src: '/images/client-logo-1.png', alt: 'Cliente 1' },
    { src: '/images/client-logo-2.png', alt: 'Cliente 2' },
    { src: '/images/client-logo-3.png', alt: 'Cliente 3' },
    { src: '/images/client-logo-4.png', alt: 'Cliente 4' },
    { src: '/images/client-logo-5.png', alt: 'Cliente 5' },
    { src: '/images/client-logo-6.png', alt: 'Cliente 6' },
  ],
};

const headerData = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Engenharia Clínica',
    logoSrc: '/images/logo.png',
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
    src: '/images/logo-light.png',
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
      <main role="main">
        {/* Hero Section - Above the fold with CTA */}
        <Hero
          title={heroData.title}
          subtitle={heroData.subtitle}
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
          badge={experienceData.badge}
          title={experienceData.title}
          subtitle={experienceData.subtitle}
          description={experienceData.description}
          features={experienceData.features}
          images={experienceData.images}
          stats={experienceData.stats}
        />

        {/* Platform Section - Dark section with platform features */}
        <PlatformSection
          title={platformData.title}
          description={platformData.description}
          features={platformData.features}
        />

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

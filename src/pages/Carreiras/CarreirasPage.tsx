import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';
import { HeroSection } from '@ui-components/sections/HeroSection';

import styles from './Carreiras.module.scss';

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
  ],
  cta: {
    label: 'Contato',
    href: '/contato',
  },
};

// Hero data
const heroData = {
  badge: 'Junte-se à Nossa Equipe',
  title: 'Carreiras na Praxis',
  description:
    'Trabalho em uma empresa referência em engenharia clínica no Brasil. Buscamos profissionais engajados que queiram fazer a diferença no setor de saúde.',
  primaryCta: {
    label: 'Ver Vagas',
    href: '#vagas',
  },
  secondaryCta: {
    label: 'Nos conheça melhor',
    href: '#sobre',
  },
};

// Benefits data
const benefitsData = {
  title: 'Benefícios e Vantagens',
  description:
    'Oferecemos um pacote de benefícios completo para valorizar e engajar nossos colaboradores.',
  benefits: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Plano de Carreira',
      description: 'Desenvolvimento profissional com plano de crescimento claro e estruturado.',
    },
    {
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
      title: 'Plano de Saúde',
      description: 'Plano de saúde abrangente para você e sua família com cobertura nacional.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6l-10 7L2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Vale Alimentação',
      description: 'Cartão alimentaçao para suas compras do mês com flexibilidade.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Horário Flexível',
      description: 'Flexibilidade de horário para melhor qualidade de vida e produtividade.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Home Office',
          description: 'Política de trabalho híbrido para equilibrar vida pessoal e profissional.',
    },
    {
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
      title: 'Gympass',
      description: 'Acesso a academias e centros esportivos em todo o Brasil.',
    },
  ],
};

// Culture data
const cultureData = {
  title: 'Cultura e Valores',
  description:
    'Nossa cultura é construída sobre pilares sólidos que guiam todas as nossas ações e decisões.',
  items: [
    {
      title: 'Excelência Técnica',
      description:
        'Buscamos sempre o mais alto padrão de qualidade em tudo que fazemos, desde o atendimento ao cliente até a execução técnica.',
    },
    {
      title: 'Inovação Contínua',
      description:
        'Inovamos constantemente nossos processos e soluções para oferecer o melhor aos nossos clientes e pacientes.',
    },
    {
      title: 'Compromisso com o Cliente',
      description:
        'Colocamos as necessidades dos clientes em primeiro lugar, superando expectativas e construindo relacionamentos duradouros.',
    },
    {
      title: 'Desenvolvimento Humano',
      description:
        'Investimos no crescimento e desenvolvimento de nossos colaboradores, acreditando que pessoas são nosso maior ativo.',
    },
  ],
};

// Open positions data
const positionsData = {
  title: 'Vagas Abertas',
  description: 'Estamos em busca de talentos para compor nosso time.',
  positions: [
    {
      id: '1',
      title: 'Engenheiro Clínico Sênior',
      location: 'São Paulo, SP',
      type: 'CLT',
      department: 'Engenharia Clínica',
      description:
        'Responsável pela gestão técnica de equipamentos médico-hospitalares em instituições de saúde.',
      requirements: [
        'Formação em Engenharia Biomédica, Elétrica ou relacionada',
        'Experiência mínima de 5 anos na área',
        'Conhecimento em normas ANVISA e regulatórios',
        'Certificação em gestão de equipamentos médicos',
      ],
    },
    {
      id: '2',
      title: 'Técnico de Manutenção de Equipamentos',
      location: 'São Paulo, SP',
      type: 'CLT',
      department: 'Manutenção',
      description:
        'Executar manutenção preventiva e corretiva em equipamentos médico-hospitalares.',
      requirements: [
        'Formação técnica em Eletrônica, Eletromedicina ou relacionada',
        'Experiência mínima de 3 anos com equipamentos médicos',
        'Conhecimento em normas de segurança',
        'Disponibilidade para plantões',
      ],
    },
    {
      id: '3',
      title: 'Analista de Qualidade',
      location: 'São Paulo, SP',
      type: 'CLT',
      department: 'Qualidade',
      description:
        'Apoiar processos de acreditação e implementar políticas de qualidade.',
      requirements: [
        'Formação em Administração, Engenharia ou relacionada',
        'Experiência em processos de acreditação (ONA, ISO)',
        'Conhecimento em ferramentas de qualidade',
        'Certificação em auditorias internas',
      ],
    },
    {
      id: '4',
      title: 'Coordenador de Projetos',
      location: 'São Paulo, SP',
      type: 'CLT',
      department: 'Gestão de Projetos',
      description:
        'Coordenar projetos de implementação de sistemas e gestão de tecnologia.',
      requirements: [
        'Formação em Engenharia ou Administração',
        'Experiência mínima de 4 anos em gestão de projetos',
        'Certificação PMP ou similar',
        'Conhecimento em metodologias ágeis',
      ],
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
        { label: 'Sobre Nós', href: '#sobre' },
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
 * CarreirasPage Component
 *
 * Page displaying career opportunities, benefits and company culture.
 * Follows the same structure as other pages in the project.
 */
export function CarreirasPage(): React.ReactElement {
  return (
    <>
      {/* Header - Top navigation */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      {/* Main content wrapper for semantic HTML */}
      <main role="main">
        {/* Hero Section */}
        <HeroSection
          badge={heroData.badge}
          title={heroData.title}
          description={heroData.description}
          primaryCta={heroData.primaryCta}
          secondaryCta={heroData.secondaryCta}
          variant="compact"
        />

        {/* Benefits Section */}
        <section id="beneficios" className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{benefitsData.title}</h2>
              <p className={styles.sectionDescription}>{benefitsData.description}</p>
            </div>

            <div className={styles.benefitsGrid}>
              {benefitsData.benefits.map((benefit, index) => (
                <article key={`benefit-${index}`} className={styles.benefitCard}>
                  <div className={styles.benefitIcon} aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="sobre" className={styles.cultureSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{cultureData.title}</h2>
              <p className={styles.sectionDescription}>{cultureData.description}</p>
            </div>

            <div className={styles.cultureGrid}>
              {cultureData.items.map((item, index) => (
                <article key={`culture-${index}`} className={styles.cultureCard}>
                  <h3 className={styles.cultureTitle}>{item.title}</h3>
                  <p className={styles.cultureDescription}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="vagas" className={styles.positionsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{positionsData.title}</h2>
              <p className={styles.sectionDescription}>{positionsData.description}</p>
            </div>

            <div className={styles.positionsList}>
              {positionsData.positions.map((position) => (
                <article key={position.id} className={styles.positionCard}>
                  <div className={styles.positionHeader}>
                    <h3 className={styles.positionTitle}>{position.title}</h3>
                    <span className={styles.positionType}>{position.type}</span>
                  </div>

                  <div className={styles.positionMeta}>
                    <span className={styles.positionLocation}>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 22C16 17.9 20 14.32 20 9.5C20 5.36 16.42 2 12 2C7.58 2 4 5.36 4 9.5C4 14.32 8 17.9 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {position.location}
                    </span>
                    <span className={styles.positionDepartment}>{position.department}</span>
                  </div>

                  <p className={styles.positionDescription}>{position.description}</p>

                  <div className={styles.positionRequirements}>
                    <h4 className={styles.requirementsTitle}>Requisitos:</h4>
                    <ul className={styles.requirementsList}>
                      {position.requirements.map((req, index) => (
                        <li key={`req-${position.id}-${index}`} className={styles.requirementItem}>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="/contato" className={styles.positionButton}>
                    Candidatar-se
                    <svg
                      viewBox="0 0 20 20"
                      width="16"
                      height="16"
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Não encontrou a vaga ideal?</h2>
              <p className={styles.ctaText}>
                Envie seu currículo para nosso banco de talentos e seja avisado quando novas
                oportunidades surgirem.
              </p>
              <a href="/contato" className={styles.ctaButton}>
                Enviar Currículo
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
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

CarreirasPage.displayName = 'CarreirasPage';
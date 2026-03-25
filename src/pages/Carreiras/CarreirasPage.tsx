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
    { label: 'Trabalhe Conosco', href: '/carreiras' },
  ],
  cta: {
    label: 'Contato',
    href: '/contato',
  },
};

// Hero data
const heroData = {
  badge: 'Trabalhe Conosco',
  title: 'Faça Parte do Nosso Time',
  description:
    'Venha construir sua carreira em uma empresa líder em engenharia clínica, trabalhando com tecnologia de ponta e fazendo a diferença na saúde brasileira.',
};

// Why work data
const whyWorkData = {
  title: 'Por Que Trabalhar na Praxis?',
  description: 'Somos uma empresa que valoriza pessoas, inovação e excelência técnica',
  pillars: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M4 16L10 10L14 14L20 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 8H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Crescimento',
      description: 'Plano de carreira estruturado com oportunidades reais de evolução profissional',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 10L12 6L20 10L12 14L4 10Z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 12.5V16L12 18L17 16V12.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Desenvolvimento',
      description: 'Investimento contínuo em capacitação, treinamentos e certificações técnicas',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M9 18H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 14.5C10.5 12.8 8.9 12.2 8.9 10.4C8.9 8.7 10.3 7.5 12 7.5C13.7 7.5 15.1 8.7 15.1 10.4C15.1 12.2 13.5 12.8 13.5 14.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
      title: 'Inovação',
      description: 'Trabalhe com tecnologias de ponta e projetos desafiadores no setor hospitalar',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 20C12 20 5 15.8 5 10.9C5 8.6 6.9 7 9.1 7C10.5 7 11.5 7.7 12 8.6C12.5 7.7 13.5 7 14.9 7C17.1 7 19 8.6 19 10.9C19 15.8 12 20 12 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Propósito',
      description: 'Contribua para salvar vidas garantindo segurança em equipamentos médicos',
    },
  ],
  benefitsTitle: 'Benefícios e Vantagens',
  benefits: [
    {
      title: 'Remuneração Competitiva',
      description: 'Salário compatível com o mercado e bonificações por performance',
    },
    {
      title: 'Vale Refeição/Alimentação',
      description: 'Auxílio alimentação para todas as refeições',
    },
    {
      title: 'Vale Transporte',
      description: 'Auxílio transporte ou estacionamento',
    },
    {
      title: 'Plano de Saúde',
      description: 'Assistência médica e odontológica',
    },
    {
      title: 'Treinamentos Técnicos',
      description: 'Capacitações e certificações pagas pela empresa',
    },
    {
      title: 'Ambiente Colaborativo',
      description: 'Cultura de respeito, diversidade e trabalho em equipe',
    },
  ],
};

// Areas data
const areasData = {
  title: 'Áreas de Atuação',
  description: 'Buscamos profissionais para diferentes áreas de especialização',
  cards: [
    {
      title: 'Engenharia Clínica',
      roles: [
        'Engenheiros clínicos',
        'Técnicos em equipamentos médicos',
        'Especialistas em manutenção',
      ],
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
    },
    {
      title: 'Gestão e Planejamento',
      roles: ['Consultores técnicos', 'Gerentes de projeto', 'Analistas de gestão hospitalar'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Qualidade e Acreditação',
      roles: ['Auditores técnicos', 'Especialistas em acreditação', 'Analistas de qualidade'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 3.5L16.8 6.2V12.2L12 15L7.2 12.2V6.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 18C10 16.6 11 16 12 16C13 16 14 16.6 15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Comercial e Relacionamento',
      roles: ['Executivos de contas', 'Gerentes de relacionamento', 'Analistas de negócios'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4.5 19C4.9 16.9 6.8 15.5 9 15.5C11.2 15.5 13.1 16.9 13.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13.6 18C13.9 16.7 15.1 15.8 16.5 15.8C17.9 15.8 19.1 16.7 19.4 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Tecnologia da Informação',
      roles: ['Desenvolvedores de software', 'Analistas de sistemas', 'Especialistas em dados'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 5C9.8 5 8 6.8 8 9C8 10.6 8.9 12 10.2 12.6V14.3H13.8V12.6C15.1 12 16 10.6 16 9C16 6.8 14.2 5 12 5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M10 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10.5 19H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Administrativo',
      roles: ['Assistentes administrativos', 'Analistas financeiros', 'Recursos humanos'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8V5H16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ],
};

const sendCurriculumData = {
  title: 'Como Enviar Seu Currículo',
  description: 'Interessado em fazer parte do nosso time? Siga as instruções abaixo:',
  email: 'carreiras@praxisengenharia.com.br',
  subject: 'Trabalhe Conosco - CV',
  ctaLabel: 'Enviar Currículo Agora',
  ctaHref: 'mailto:carreiras@praxisengenharia.com.br?subject=Trabalhe%20Conosco%20-%20CV',
  note: 'Analisaremos seu perfil e entraremos em contato caso haja uma oportunidade adequada',
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
          variant="compact"
          contentAlignment="center"
        />

        {/* Why Work Section */}
        <section id="sobre" className={styles.whyWorkSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{whyWorkData.title}</h2>
              <p className={styles.sectionDescription}>{whyWorkData.description}</p>
            </div>

            <div className={styles.whyWorkGrid}>
              {whyWorkData.pillars.map((pillar, index) => (
                <article key={`pillar-${index}`} className={styles.whyWorkCard}>
                  <div className={styles.whyWorkIcon} aria-hidden="true">
                    {pillar.icon}
                  </div>
                  <h3 className={styles.whyWorkTitle}>{pillar.title}</h3>
                  <p className={styles.whyWorkDescription}>{pillar.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.benefitsPanel}>
              <h3 className={styles.benefitsPanelTitle}>{whyWorkData.benefitsTitle}</h3>
              <div className={styles.benefitsPanelGrid}>
                {whyWorkData.benefits.map((benefit, index) => (
                  <article key={`benefit-highlight-${index}`} className={styles.benefitsPanelItem}>
                    <span className={styles.benefitsPanelIcon} aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M8 12L11 15L16 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className={styles.benefitsPanelItemTitle}>{benefit.title}</h4>
                      <p className={styles.benefitsPanelItemDescription}>{benefit.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section id="areas" className={styles.areasSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{areasData.title}</h2>
              <p className={styles.sectionDescription}>{areasData.description}</p>
            </div>

            <div className={styles.areasGrid}>
              {areasData.cards.map((area, index) => (
                <article key={`area-${index}`} className={styles.areaCard}>
                  <div className={styles.areaIcon} aria-hidden="true">
                    {area.icon}
                  </div>
                  <h3 className={styles.areaTitle}>{area.title}</h3>
                  <ul className={styles.areaList}>
                    {area.roles.map((role, roleIndex) => (
                      <li key={`area-role-${index}-${roleIndex}`} className={styles.areaItem}>
                        {role}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Send Curriculum Section */}
        <section className={styles.sendCurriculumSection}>
          <div className={styles.container}>
            <div className={styles.sendCurriculumContent}>
              <div className={styles.sendCurriculumIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L12 13L3 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className={styles.sendCurriculumTitle}>{sendCurriculumData.title}</h2>
              <p className={styles.sendCurriculumDescription}>{sendCurriculumData.description}</p>

              <div className={styles.sendCurriculumSteps}>
                <article className={styles.sendCurriculumStep}>
                  <span className={styles.sendCurriculumStepNumber}>1</span>
                  <div>
                    <h3 className={styles.sendCurriculumStepTitle}>Prepare seu currículo</h3>
                    <p className={styles.sendCurriculumStepText}>
                      Organize seu CV em formato PDF com suas experiências, formações e
                      certificações relevantes
                    </p>
                  </div>
                </article>

                <article className={styles.sendCurriculumStep}>
                  <span className={styles.sendCurriculumStepNumber}>2</span>
                  <div>
                    <h3 className={styles.sendCurriculumStepTitle}>Envie para o e-mail</h3>
                    <div className={styles.sendCurriculumCodeBlock}>
                      <span className={styles.sendCurriculumCodeLabel}>Para:</span>
                      <p
                        className={`${styles.sendCurriculumCodeValue} ${styles.sendCurriculumEmailValue}`}
                      >
                        {sendCurriculumData.email}
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.sendCurriculumStep}>
                  <span className={styles.sendCurriculumStepNumber}>3</span>
                  <div>
                    <h3 className={styles.sendCurriculumStepTitle}>Use o assunto correto</h3>
                    <div className={styles.sendCurriculumCodeBlock}>
                      <span className={styles.sendCurriculumCodeLabel}>Assunto:</span>
                      <p
                        className={`${styles.sendCurriculumCodeValue} ${styles.sendCurriculumSubjectValue}`}
                      >
                        {sendCurriculumData.subject}
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.sendCurriculumStep}>
                  <span className={styles.sendCurriculumStepNumber}>4</span>
                  <div>
                    <h3 className={styles.sendCurriculumStepTitle}>Anexe seu currículo</h3>
                    <p className={styles.sendCurriculumStepText}>
                      Não esqueça de anexar seu CV em PDF ao e-mail. Você também pode incluir uma
                      breve apresentação no corpo do e-mail
                    </p>
                  </div>
                </article>
              </div>

              <a href={sendCurriculumData.ctaHref} className={styles.sendCurriculumButton}>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {sendCurriculumData.ctaLabel}
              </a>

              <p className={styles.sendCurriculumNote}>{sendCurriculumData.note}</p>
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

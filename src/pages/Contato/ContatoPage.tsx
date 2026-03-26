import React from 'react';

import { Header } from '@ui-components/layout/Header';
import { Footer } from '@ui-components/sections/Footer';

import styles from './Contato.module.scss';

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

// Contact info data
const contactInfoData = {
  phone: {
    label: 'Telefone',
    value: '11-2609-7511',
    helper: 'Seg a Sex, 8h às 18h',
    href: 'tel:+551126097511',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  email: {
    label: 'Email',
    value: 'contato@praxisengenharia.com.br',
    helper: 'Resposta em até 24h',
    href: 'mailto:contato@praxisengenharia.com.br',
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
  },
  address: {
    label: 'Endereço',
    value: 'Rua Roma, 620 - Lapa',
    helper: 'São Paulo - SP, 05050-090',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  hours: {
    label: 'Suporte Emergencial',
    value: '24 horas, 7 dias por semana',
    helper: 'Para clientes ativos',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

// Form interests
const interests = [
  { value: 'engenharia-clinica', label: 'Engenharia Clínica' },
  { value: 'planejamento-tecnologico', label: 'Planejamento Tecnológico' },
  { value: 'acreditacao', label: 'Acreditação' },
  { value: 'consultoria', label: 'Consultoria' },
  { value: 'outros', label: 'Outros' },
];

/**
 * ContatoPage Component
 *
 * Contact page with form, contact info cards, and CTA sections.
 * Uses existing UI components and follows the project's design patterns.
 *
 * Architecture:
 * - PAGE component (orchestrator)
 * - Manages page-level data (mock data)
 * - Composes UI section components
 * - Uses semantic HTML for accessibility
 */
export function ContatoPage(): React.ReactElement {
  return (
    <>
      {/* Header - Top navigation */}
      <Header brand={headerData.brand} links={headerData.links} cta={headerData.cta} />

      {/* Main content */}
      <main role="main">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Entre em Contato</h1>
              <p className={styles.heroDescription}>
                Nossa equipe comercial está pronta para atender suas necessidades e apresentar a
                melhor solução em engenharia clínica para sua instituição.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.formWrapper}>
              {/* Contact Info Cards */}
              <div className={styles.contactInfo}>
                <span className={styles.contactBadge}>Fale Conosco</span>
                <h2 className={styles.sectionTitle}>Vamos Conversar Sobre Seu Projeto</h2>
                <p className={styles.sectionDescription}>
                  Estamos prontos para entender suas necessidades e desenvolver a solução ideal em
                  gestão de tecnologia médico-hospitalar.
                </p>

                <div className={styles.infoCards}>
                  <a href={contactInfoData.phone.href} className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.phone.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.phone.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.phone.value}</span>
                      <span className={styles.infoCardHelper}>{contactInfoData.phone.helper}</span>
                    </div>
                  </a>

                  <a href={contactInfoData.email.href} className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.email.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.email.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.email.value}</span>
                      <span className={styles.infoCardHelper}>{contactInfoData.email.helper}</span>
                    </div>
                  </a>

                  <div className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.address.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.address.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.address.value}</span>
                      <span className={styles.infoCardHelper}>
                        {contactInfoData.address.helper}
                      </span>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.hours.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.hours.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.hours.value}</span>
                      <span className={styles.infoCardHelper}>{contactInfoData.hours.helper}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Solicite uma Proposta</h2>
                <p className={styles.formDescription}>Preencha o formulário abaixo</p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nome" className={styles.formLabel}>
                        Nome Completo <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        className={styles.formInput}
                        placeholder="João Silva"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="cargo" className={styles.formLabel}>
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        className={styles.formInput}
                        placeholder="Diretor Técnico"
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="empresa" className={styles.formLabel}>
                        Instituição <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className={styles.formInput}
                        placeholder="Hospital Regional"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        E-mail <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.formInput}
                        placeholder="email@hospital.com.br"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="telefone" className={styles.formLabel}>
                        Telefone <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className={styles.formInput}
                        placeholder="(11) 98765-4321"
                        required
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="interesse" className={styles.formLabel}>
                        Serviço de Interesse
                      </label>
                      <select id="interesse" name="interesse" className={styles.formSelect}>
                        <option value="">Selecione um serviço</option>
                        {interests.map((interest) => (
                          <option key={interest.value} value={interest.value}>
                            {interest.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="mensagem" className={styles.formLabel}>
                        Mensagem <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        className={styles.formTextarea}
                        placeholder="Conte-nos sobre suas necessidades e desafios..."
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Enviar Mensagem
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 10h14M12 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <p className={styles.formDisclaimer}>
                    Ao enviar este formulário, você concorda com nossa política de privacidade e
                    tratamento de dados pessoais conforme LGPD.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        logo={{ src: '/images/logo.jpg', alt: 'Praxis Engenharia Clínica' }}
        description="Excelência em gestão de tecnologia médico-hospitalar com mais de 25 anos de experiência no mercado brasileiro."
        sections={[
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
              { label: 'Carreiras', href: '#carreiras' },
              { label: 'Sobre Nós', href: '/sobre-nos' },
              { label: 'Equipe', href: '#equipe' },
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
        ]}
        social={[
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
        ]}
        copyright="© 2026 Praxis Engenharia Clínica. Todos os direitos reservados."
        legalLinks={[
          { label: 'Política de Privacidade', href: '#privacidade' },
          { label: 'Termos de Uso', href: '#termos' },
        ]}
      />
    </>
  );
}

ContatoPage.displayName = 'ContatoPage';

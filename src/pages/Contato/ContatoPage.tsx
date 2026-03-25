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
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Experiência', href: '/#experiencia' },
    { label: 'Gestão', href: '/#plataforma' },
    { label: 'Clientes', href: '/#clientes' },
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
    value: '+55 11 3000-0000',
    href: 'tel:+551130000000',
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
    value: 'contato@praxis.com.br',
    href: 'mailto:contato@praxis.com.br',
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
    value: 'Av. Paulista, 1000 - São Paulo, SP',
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
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  hours: {
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta: 08h às 18h',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <span className={styles.heroBadge}>Fale Conosco</span>
              <h1 className={styles.heroTitle}>Estamos prontos para atender você</h1>
              <p className={styles.heroDescription}>
                Entre em contato conosco para saber como podemos ajudar a sua instituição a
                alcançar excelência em gestão de tecnologia médico-hospitalar.
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
                <h2 className={styles.sectionTitle}>Informações de Contato</h2>
                <p className={styles.sectionDescription}>
                  Escolha o canal de comunicação mais conveniente para você. Nossa equipe está
                  pronta para responder rapidamente.
                </p>

                <div className={styles.infoCards}>
                  <a href={contactInfoData.phone.href} className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.phone.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.phone.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.phone.value}</span>
                    </div>
                  </a>

                  <a href={contactInfoData.email.href} className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.email.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.email.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.email.value}</span>
                    </div>
                  </a>

                  <div className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.address.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.address.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.address.value}</span>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoCardIcon}>{contactInfoData.hours.icon}</div>
                    <div className={styles.infoCardContent}>
                      <span className={styles.infoCardLabel}>{contactInfoData.hours.label}</span>
                      <span className={styles.infoCardValue}>{contactInfoData.hours.value}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Envie uma Mensagem</h2>
                <p className={styles.formDescription}>
                  Preencha o formulário abaixo e retornaremos o mais breve possível.
                </p>

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
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.formInput}
                        placeholder="seu@email.com"
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
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="empresa" className={styles.formLabel}>
                        Empresa/Instituição
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className={styles.formInput}
                        placeholder="Nome da empresa ou hospital"
                      />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label htmlFor="interesse" className={styles.formLabel}>
                        Área de Interesse
                      </label>
                      <select id="interesse" name="interesse" className={styles.formSelect}>
                        <option value="">Selecione uma opção</option>
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
                        placeholder="Descreva como podemos ajudar..."
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
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <div className={styles.mapWrapper}>
              <div className={styles.mapPlaceholder}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Mapa da Localização</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Precisa de uma solução personalizada?</h2>
              <p className={styles.ctaDescription}>
                Nossa equipe está pronta para desenvolver um projeto sob medida para sua
                instituição.
              </p>
              <a href="tel:+551130000000" className={styles.ctaButton}>
                Ligar Agora
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
              </a>
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
              { label: 'Planejamento', href: '/planejamento-tecnologico' },
              { label: 'Acreditação', href: '/acreditacao' },
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
        ]}
        social={[
          { platform: 'linkedin', href: 'https://www.linkedin.com/company/praxisengenhariaclinica/', ariaLabel: 'LinkedIn' },
          { platform: 'facebook', href: 'https://facebook.com', ariaLabel: 'Facebook' },
          { platform: 'instagram', href: 'https://instagram.com', ariaLabel: 'Instagram' },
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
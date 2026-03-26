import type { FooterProps } from './Footer';

export const defaultFooterData: FooterProps = {
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
        { label: 'Carreiras', href: '/carreiras' },
        { label: 'Sobre Nós', href: '/sobre-nos' },
        { label: 'Equipe', href: '/sobre-nos#equipe' },
        { label: 'Blog', href: '/blog' },
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
          href: 'https://maps.google.com/?q=Rua+Roma,+620+-+Lapa,+Sao+Paulo+-+SP,+05050-090',
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

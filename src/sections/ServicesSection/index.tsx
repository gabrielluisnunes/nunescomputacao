'use client';

import React from 'react';
import * as S from './styles';
import ServiceCard from './ServiceCard';
import { FaLaptopCode, FaStore, FaChartLine, FaCogs, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Desenvolvimento Sob Medida (ERP)',
    description: 'Criamos soluções personalizadas para atender exatamente às suas demandas de automação e otimização. Desenvolvemos módulos, integrações e funcionalidades complementares para seu ERP.',
    icon: FaLaptopCode,
    link: '#contact'
  },
  {
    title: 'Websites e Presença Digital',
    description: 'Colocamos sua marca na internet com identidade visual profissional e moderna. Desenvolvemos websites institucionais e otimizados para todos os dispositivos.',
    icon: FaStore,
    link: '#contact'
  },
  {
    title: 'Consultoria e Estratégia de TI',
    description: 'Oferecemos orientação especializada para alinhar sua tecnologia aos objetivos do negócio. Identificamos oportunidades de crescimento e eficiência através da inovação em software.',
    icon: FaChartLine,
    link: '#contact'
  },
  {
    title: 'Integração de Sistemas',
    description: 'Conectamos sistemas legados, ERPs e APIs de terceiros para garantir que todas as suas plataformas troquem informações em tempo real. Foco em fluxo de dados e eficiência operacional.',
    icon: FaCogs,
    link: '#contact'
  },
  {
    title: 'Gestão e Otimização de Banco de Dados',
    description: 'Estruturamos, otimizamos e administramos seus bancos de dados (SQL, NoSQL), garantindo alta performance, segurança e integridade dos dados críticos da sua empresa.',
    icon: FaDatabase,
    link: '#contact'
  },
  {
    title: 'Segurança e Auditoria de Software',
    description: 'Realizamos auditorias de código e implementamos as melhores práticas de segurança para proteger seus sistemas contra vulnerabilidades, garantindo conformidade e tranquilidade.',
    icon: FaShieldAlt,
    link: '#contact'
  },
];

const ServicesSection: React.FC = () => {
  return (
    <S.ServicesWrapper id="services">
      <S.Container>
        <S.Title>
          Nossos <span>Serviços</span> 
        </S.Title>

        <S.ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkHref={service.link}
            />
          ))}
        </S.ServicesGrid>
      </S.Container>
    </S.ServicesWrapper>
  );
};

export default ServicesSection;
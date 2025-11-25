'use client';

import React from 'react';
import * as S from './styles';
import ServiceCard from './ServiceCard';
import { FaLaptopCode, FaStore, FaChartLine, FaCogs, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Desenvolvimento de Sistemas Sob Medida',
    description: 'Criamos soluções personalizadas para atender exatamente às suas demandas de automação e otimização. Desenvolvemos módulos, integrações e funcionalidades complementares para seu ERP.',
    icon: FaLaptopCode,
    link: '#contact'
  },
  {
    title: 'Landing Pages, E-commerce e Performance Digital',
    description: 'Projetamos e desenvolvemos plataformas digitais feitas para converter. Seja um site institucional de alta performance, uma Landing Page focada em resultados ou uma loja virtual robusta para você vender 24/7.',
    icon: FaStore,
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
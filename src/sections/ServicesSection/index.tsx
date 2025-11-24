'use client';

import React from 'react';
import * as S from './styles';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: 'Desenvolvimento de Software Sob Medida',
    description: 'Criamos soluções personalizadas para atender exatamente às suas demandas. Desenvolvemos módulos, integrações e funcionalidades complementares para seu ERP, garantindo eficiência e automação.',
    icon: '💡',
    link: '#contact'
  },
  {
    title: 'Criação de Websites e Presença Digital',
    description: 'Colocamos sua marca na internet com identidade visual profissional e moderna. Desenvolvemos websites institucionais e realizamos integração com plataformas de e-commerce para que você venda mais e alcance novos clientes.',
    icon: '🌐',
    link: '#contact'
  },
];

const ServicesSection: React.FC = () => {
  return (
    <S.ServicesWrapper id="services">
      <S.Container>
        <S.Title>
          Nossos <span>Serviços</span> Chave
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
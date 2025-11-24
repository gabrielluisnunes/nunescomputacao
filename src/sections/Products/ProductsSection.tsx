'use client';

import React from 'react';
import * as S from './ProductsStyles'; 
import { motion, Variants } from 'framer-motion';

const productsData = [
  {
    title: 'OssApp - Gestão de Academias de Jiu-Jitsu',
    description: 'Solução 100% web desenvolvida para academias de Jiu-Jitsu. Inclui controle de alunos, graduações, geolocalização de presença e gestão financeira centralizada.',
    tags: ['SaaS', 'Gestão', 'Web', 'Mobile'],
    imagePlaceholder: 'Gestão Esportiva',
  },
  {
    title: 'PN Performance Mídia',
    description: 'O projeto consiste na criação da nova Landing Page institucional para a PN Performance, com o objetivo principal de otimizar a captação de leads qualificados através de uma experiência mobile e desktop de alta performance.',
    tags: ['Next.js', 'TyperScript', 'BootsTrap', 'Vercel'],
    imagePlaceholder: 'Integração ERP',
  },
  {
    title: 'Website Institucional Personalizado',
    description: 'Criação de plataforma digital moderna e responsiva para empresa de serviços B2B, focada em geração de leads e reforço de autoridade no mercado.',
    tags: ['Web', 'Next.js', 'Marketing', 'Lead Gen'],
    imagePlaceholder: 'Website B2B',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const ProductsSection: React.FC = () => {
  return (
    <S.PortfolioWrapper id="ossapp">
      <S.Container>
        <S.Title>
          Portfólio de <span>Soluções e Produtos</span>
        </S.Title>
        <S.Subtitle>
          Demonstração de projetos desenvolvidos pela Nunes Computação, abrangendo gestão interna, automação e presença digital.
        </S.Subtitle>

        <S.ProductsGrid>
          {productsData.map((product, index) => (
            <S.ProductCard 
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <S.CardImage>
                [Placeholder: {product.imagePlaceholder}]
              </S.CardImage>
              <S.CardContent>
                <S.CardTitle>{product.title}</S.CardTitle>
                <S.CardDescription>{product.description}</S.CardDescription>
                <div>
                  {product.tags.map((tag, tagIndex) => (
                    <S.CardTag key={tagIndex}>{tag}</S.CardTag>
                  ))}
                </div>
              </S.CardContent>
            </S.ProductCard>
          ))}
        </S.ProductsGrid>
      </S.Container>
    </S.PortfolioWrapper>
  );
};

export default ProductsSection;
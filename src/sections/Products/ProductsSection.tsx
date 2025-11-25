'use client';

import React from 'react';
import * as S from './ProductsStyles'; 
import { motion, Variants } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

const productsData = [
  {
    title: 'Gestão de Academias de Jiu-Jitsu',
    description: 'OssApp: Solução 100% web desenvolvida para academias de Jiu-Jitsu. Inclui controle de alunos, graduações, geolocalização de presença e gestão financeira centralizada.',
    tags: ['SaaS', 'Gestão', 'Web', 'Mobile'],
    link: 'https://www.ossapp.com.br/', 
  },
  {
    title: 'PN Performance Mídia',
    description: 'O projeto consiste na criação da nova Landing Page institucional para a PN Performance, com o objetivo principal de otimizar a captação de leads qualificados através de uma experiência mobile e desktop de alta performance.',
    tags: ['Next.js', 'TyperScript', 'BootsTrap', 'Vercel'],
    link: 'https://pnperformancemidia.com/', 
  },
  {
    title: 'MG Electric',
    description: 'Criação de plataforma digital moderna e responsiva, focada em geração de leads, vendas online e reforço de autoridade no mercado.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://mgelectric.com.br/', 
  },

  {
    title: 'Arena Kirmayr',
    description: 'Site desenvolvido para a Arena Kirmayr.',
    tags: ['WordPress'],
    link: 'https://arenakirmayr.com/', 
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
              {}
              <S.CardContent>
                <S.CardTitle>{product.title}</S.CardTitle>
                <S.CardDescription>{product.description}</S.CardDescription>
                
                <S.TagsWrapper>
                  {product.tags.map((tag, tagIndex) => (
                    <S.CardTag key={tagIndex}>{tag}</S.CardTag>
                  ))}
                </S.TagsWrapper>
                
                <S.ProductLink href={product.link} target="_blank" rel="noopener noreferrer">
                   Ver Projeto <FaExternalLinkAlt /> {}
                </S.ProductLink>
              </S.CardContent>
            </S.ProductCard>
          ))}
        </S.ProductsGrid>
      </S.Container>
    </S.PortfolioWrapper>
  );
};

export default ProductsSection;
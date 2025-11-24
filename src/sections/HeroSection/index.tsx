'use client';

import React from 'react';
import * as S from './styles';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  },
};

const HeroSection: React.FC = () => {
  return (
    <S.HeroWrapper id="hero">
      <S.HeroContent>
        <S.TextContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <S.Headline as={motion.h2} variants={itemVariants}>
            Soluções de Software <span>Sob Medida</span> que o seu ERP não alcança.
          </S.Headline>
          
          <S.Subheadline as={motion.p} variants={itemVariants}>
            Desenvolvemos módulos, integrações e funcionalidades complementares para automatizar e otimizar processos internos com eficiência garantida.
          </S.Subheadline>

          <S.CtaButton 
            href="#contact" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Consultoria Gratuita
          </S.CtaButton>
        </S.TextContainer>

        <S.IllustrationContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          [Placeholder: Imagem/Ilustração de Tecnologia]
        </S.IllustrationContainer>
      </S.HeroContent>
    </S.HeroWrapper>
  );
};

export default HeroSection;
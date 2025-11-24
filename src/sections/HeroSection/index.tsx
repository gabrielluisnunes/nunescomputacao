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
          {}
          <S.Headline as={motion.h1} variants={itemVariants}>
            Soluções de Software <span>Sob Medida</span> para seu negócio.
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
            Vamos criar juntos!
          </S.CtaButton>
          
          {}
        </S.TextContainer>
      </S.HeroContent>
    </S.HeroWrapper>
  );
};

export default HeroSection;
'use client';

import React from 'react';
import * as S from './styles';
import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
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

const imageVariants: Variants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.0
    }
  }
};

const AboutUsSection: React.FC = () => {
  return (
    <S.AboutUsWrapper id="about">
      <S.Container>
        <S.ContentGrid>
          
          {}
          <S.ImageContainer
            variants={imageVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <S.LogoPlaceholder>
              [Espaço para Logo da Nunes Computação]
            </S.LogoPlaceholder>
          </S.ImageContainer>

          {}
          <S.TextContainer
            variants={textVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <S.Title>
              Nossa História e <span>DNA</span>
            </S.Title>

            <S.Paragraph>
              Com anos de experiência no mercado e paixão por tecnologia, somos uma empresa familiar que carrega o desenvolvimento de software em seu DNA.
            </S.Paragraph>

            <S.Paragraph>
              Nosso objetivo é transformar ideias em soluções reais que gerem impacto, crescimento e resultado para os nossos clientes.
            </S.Paragraph>
          </S.TextContainer>
          
        </S.ContentGrid>
      </S.Container>
    </S.AboutUsWrapper>
  );
};

export default AboutUsSection;
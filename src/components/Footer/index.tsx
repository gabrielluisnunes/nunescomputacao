'use client';

import React from 'react';
import * as S from './styles';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.Container>
        <S.ContentGrid>

          {}
          <S.BrandInfo>
            <S.Logo>Nunes Computação</S.Logo>
            <S.Description>
              Desenvolvimento de software sob medida com foco em resultados, eficiência e tecnologia moderna.
            </S.Description>
            <S.SocialLinks>
              <S.SocialIcon href="#" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </S.SocialIcon>
              <S.SocialIcon href="#" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </S.SocialIcon>
              <S.SocialIcon href="#" target="_blank" aria-label="WhatsApp">
                <FaWhatsapp />
              </S.SocialIcon>
            </S.SocialLinks>
          </S.BrandInfo>

          {}
          <S.NavSection>
            <h4>Navegação</h4>
            <S.NavLink href="#services">Serviços</S.NavLink>
            <S.NavLink href="#tech">Tecnologias</S.NavLink>
            <S.NavLink href="#ossapp">Portfólio</S.NavLink>
            <S.NavLink href="#about">Sobre Nós</S.NavLink>
            <S.NavLink href="#contact">Contato</S.NavLink>
          </S.NavSection>

          {}
          <S.NavSection>
            <h4>Contato</h4>
            <S.NavLink href="mailto:contato@nunescomputacao.com.br">E-mail Comercial</S.NavLink>
            <S.NavLink href="tel:+(XX)XXXX-XXXX">Telefone/WhatsApp</S.NavLink>
          </S.NavSection>
        </S.ContentGrid>

        {}
        <S.Copyright>
          &copy; {currentYear} Nunes Computação. Todos os direitos reservados.
        </S.Copyright>
      </S.Container>
    </S.FooterWrapper>
  );
};

export default Footer;
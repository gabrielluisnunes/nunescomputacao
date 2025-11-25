'use client';

import React from 'react';
import * as S from './styles';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.Container>
        <S.ContentGrid>

          {}
          <S.BrandInfo>
            <S.LogoWrapper>
                <Image
                    src="/images/logo nunes.png" 
                    alt="Nunes Computação Logo"
                    width={180}  
                    height={40} 
                    style={{ objectFit: 'contain' }}
                />
            </S.LogoWrapper>
            
            
          
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
            <S.SectionTitle>Navegação</S.SectionTitle>
            <S.NavLink href="#services">Serviços</S.NavLink>
            <S.NavLink href="#tech">Tecnologias</S.NavLink>
            <S.NavLink href="#ossapp">Portfólio</S.NavLink>
            <S.NavLink href="#about">Sobre Nós</S.NavLink>
            <S.NavLink href="#contact">Contato</S.NavLink>
          </S.NavSection>

          {}
          <S.NavSection>
            <S.SectionTitle>Fale Conosco</S.SectionTitle>
            <S.ContactItem href="mailto:contato@nunescomputacao.com.br">
                E-mail Comercial
            </S.ContactItem>
            <S.ContactItem href="tel:+(XX)XXXX-XXXX">
                Telefone/WhatsApp
            </S.ContactItem>
            <S.ContactItem>
                Foz do Iguaçu - PR, Brasil
            </S.ContactItem>
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
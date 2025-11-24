'use client';

import React, { FormEvent } from 'react';
import * as S from './styles';
import { motion, Variants } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const containerVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.0
    }
  }
};

const ContactSection: React.FC = () => {
  return (
    <S.ContactWrapper id="contact">
      <S.Container
        as={motion.div}
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <S.Title>
          Fale <span>Conosco</span>
        </S.Title>
        <S.Subtitle>
          Entre em contato para solicitar uma demonstração, tirar dúvidas ou iniciar seu próximo projeto.
        </S.Subtitle>
        
        <S.ContentBlock>
          <S.FormArea>
            <S.InfoContainer>
              <S.ContactItem>
                <FaEnvelope /> contato@nunescomputacao.com.br
              </S.ContactItem>
              <S.ContactItem>
                <FaPhone /> (XX) XXXX-XXXX (Telefone/WhatsApp)
              </S.ContactItem>
              <S.ContactItem>
                <FaMapMarkerAlt /> Localização (Opcional)
              </S.ContactItem>
            </S.InfoContainer>
            
            <S.FormCard>
              <S.Form onSubmit={(e: FormEvent) => e.preventDefault()}>
                <S.InputGroup>
                  <S.Input type="text" placeholder="Seu Nome Completo" required />
                </S.InputGroup>
                <S.InputGroup>
                  <S.Input type="email" placeholder="Seu Melhor E-mail" required />
                </S.InputGroup>
                <S.InputGroup>
                  <S.Input type="tel" placeholder="Telefone/WhatsApp" />
                </S.InputGroup>
                <S.InputGroup>
                  <S.TextArea placeholder="Sua Mensagem ou Detalhes do Projeto..." required />
                </S.InputGroup>
                
                <S.SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensagem
                </S.SubmitButton>
              </S.Form>
            </S.FormCard>
          </S.FormArea>
        </S.ContentBlock>
      </S.Container>
    </S.ContactWrapper>
  );
};

export default ContactSection;
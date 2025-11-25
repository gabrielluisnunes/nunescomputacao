'use client';

import React, { useState, FormEvent } from 'react';
import * as S from './styles';
import { motion, Variants } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';


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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      alert('Por favor, preencha seu Nome e a Mensagem.');
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    
    const whatsappMessage = `
Olá! Meu nome é *${formData.name}* e gostaria de um orçamento.
E-mail de Contato: ${formData.email || 'Não fornecido'}
Telefone/WhatsApp: ${formData.phone || 'Não fornecido'}

*Mensagem:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappLink = `https://api.whatsapp.com/send?phone=+45991339633${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  
  const displayWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '(45) 99133-9633';

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
          Entre em contato diretamente pelo WhatsApp para um atendimento imediato e sem compromisso.
        </S.Subtitle>
        
        <S.ContentBlock>
          <S.FormArea>
            <S.InfoContainer>
              <S.ContactItem>
                <FaEnvelope /> joninunes@gmail.com
              </S.ContactItem>
              <S.ContactItem>
                <FaPhone /> {displayWhatsappNumber} 
              </S.ContactItem>
              <S.ContactItem>
                <FaMapMarkerAlt /> Foz do Iguaçu - PR, Brasil
              </S.ContactItem>
            </S.InfoContainer>
            
            <S.FormCard>
              <S.Form onSubmit={handleSubmit}>
                
                <S.InputGroup>
                  <S.Input type="text" name="name" placeholder="Seu Nome Completo" value={formData.name} onChange={handleChange} required />
                </S.InputGroup>
                <S.InputGroup>
                  <S.Input type="email" name="email" placeholder="Seu Melhor E-mail (Opcional)" value={formData.email} onChange={handleChange} />
                </S.InputGroup>
                <S.InputGroup>
                  <S.Input type="tel" name="phone" placeholder="Telefone/WhatsApp (Opcional)" value={formData.phone} onChange={handleChange} />
                </S.InputGroup>
                <S.InputGroup>
                  <S.TextArea name="message" placeholder="Sua Mensagem ou Detalhes do Projeto..." value={formData.message} onChange={handleChange} required />
                </S.InputGroup>
                
                <S.SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <S.WhatsappIcon /> Iniciar Conversa via WhatsApp
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
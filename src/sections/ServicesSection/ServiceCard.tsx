import React from 'react';
import { motion, Variants } from 'framer-motion';
import * as S from './styles';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; 
  linkHref: string;
}


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

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkHref }) => {
  return (
    <S.ServiceCardContainer 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }} 
    >
      <S.IconPlaceholder>{icon}</S.IconPlaceholder>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardLink href={linkHref}>Saiba Mais &rarr;</S.CardLink>
    </S.ServiceCardContainer>
  );
};

export default ServiceCard;
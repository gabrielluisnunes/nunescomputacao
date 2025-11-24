'use client';

import React from 'react';
import * as S from './styles';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Serviços', href: '#services' },
  { label: 'Tecnologias', href: '#tech' },
  { label: 'Sobre', href: '#about' },
];

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <S.HeaderContainer>
        <S.Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span>Nunes</span> Computação
        </S.Logo>
        
        <S.Nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </S.Nav>
      </S.HeaderContainer>
    </motion.div>
  );
};

export default Header;
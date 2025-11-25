'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import * as S from './styles';

const navItems = [
  { href: '#home', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <S.HeaderWrapper isScrolled={isScrolled}>
      <S.Container>
        <S.LogoWrapper href="#home"> 
          <Image
            src="/images/logo nunes.png" 
            alt="Logo Nunes Computação"
            width={180} 
            height={40} 
            priority 
          />
        </S.LogoWrapper>
        
        <S.Navbar isOpen={isOpen}>
          {navItems.map((item) => (
            <S.NavLink 
              key={item.href} 
              href={item.href} 
              onClick={handleNavLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </S.NavLink>
          ))}
          <S.CtaButton 
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: '#004d99' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavLinkClick}
          >
            Entre em Contato
          </S.CtaButton>
        </S.Navbar>
        
        <S.MenuIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </S.MenuIcon>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
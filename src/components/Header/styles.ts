import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

interface NavbarProps {
  isOpen: boolean;
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderWrapper = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isScrolled',
})<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme, isScrolled }) => 
    isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.4s ease-in-out;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;
  cursor: pointer;

  img {
    height: 50px;
    width: auto;
    transition: all 0.3s ease;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      height: 35px; 
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      height: 30px; 
    }
  }
`;

export const Navbar = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<NavbarProps>`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: ${({ theme }) => theme.spacings.medium} 0;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-20px')});
    z-index: 999;
    animation: ${({ isOpen }) => (isOpen ? slideIn : 'none')} 0.3s ease-out forwards;
  }
`;

export const NavLink = styled(motion.a)`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-left: ${({ theme }) => theme.spacings.large};
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    padding: 1.2rem 0;
    width: 80%;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.text};

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const CtaButton = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-left: ${({ theme }) => theme.spacings.large};
  transition: background-color 0.3s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: #004d99; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacings.medium} 0 0 0;
    width: 80%;
    text-align: center;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
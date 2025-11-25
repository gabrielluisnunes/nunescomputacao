import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ThemeProps {
    theme: DefaultTheme;
}

export const FooterWrapper = styled.footer<ThemeProps>`
  background-color: #0A192F; 
  color: #fff;
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const ContentGrid = styled.div<ThemeProps>`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; 
  gap: ${({ theme }) => theme.spacings.xlarge};
  padding-bottom: ${({ theme }) => theme.spacings.large};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); 

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr; 
    gap: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const BrandInfo = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`;

export const LogoWrapper = styled.div<ThemeProps>`
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  opacity: 0.75;
  line-height: 1.6;
`;

export const NavSection = styled.div<ThemeProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 2.0rem;
  font-weight: 700;
  color: #fff; 
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const NavLink = styled.a`
  display: block;
  font-size: 1.6rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  color: #fff; 
  opacity: 0.85;
  transition: opacity 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

export const ContactItem = styled.a`
  display: block;
  font-size: 1.6rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  color: #fff; 
  opacity: 0.85;
  transition: opacity 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

export const SocialLinks = styled.div<ThemeProps>`
  display: flex;
  margin-top: ${({ theme }) => theme.spacings.large};
  gap: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    width: 100%;
  }
`;

export const SocialIcon = styled.a`
  color: #fff; 
  font-size: 2.6rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Copyright = styled.div<ThemeProps>`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacings.medium};
  font-size: 1.5rem;
  opacity: 0.6;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;
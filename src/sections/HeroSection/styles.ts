import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  min-height: 85vh; /* Ocupa a maior parte da tela */
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}10 0%, ${({ theme }) => theme.colors.background} 100%);
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacings.large};
  }
`;

export const TextContainer = styled(motion.div)`
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const Headline = styled.h2`
  font-size: 5.6rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary}; /* Destaca a cor primária */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4.0rem;
  }
`;

export const Subheadline = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  color: #555;
`;

export const IllustrationContainer = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #777;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 300px;
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`;

export const CtaButton = styled(motion.a)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.cta}; 
  color: ${({ theme }) => theme.colors.background}; 
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1.5rem 3.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 0, 0.4);

  &:hover {
    background-color: #e55c00; 
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.5);
  }
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: ${({ theme }) => theme.colors.neutral}; /* Fundo Cinza Claro para separar do Hero */
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 4.0rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacings.large};
  margin-top: ${({ theme }) => theme.spacings.xlarge};

  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;


export const ServiceCardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.xlarge};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const CardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
`;

export const IconPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.cta}15; 
  color: ${({ theme }) => theme.colors.cta};
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
`;

export const CardLink = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.cta};
  }
`;
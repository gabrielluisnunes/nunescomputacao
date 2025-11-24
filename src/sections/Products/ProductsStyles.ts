import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PortfolioWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: ${({ theme }) => theme.colors.neutral}; 
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
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacings.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #777;
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacings.large};
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const CardDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const CardTag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.cta}15;
  color: ${({ theme }) => theme.colors.cta};
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  margin-right: 0.5rem;
`;
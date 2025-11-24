import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutUsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: ${({ theme }) => theme.colors.background}; 
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr; 
  gap: ${({ theme }) => theme.spacings.xlarge};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacings.xlarge};
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  min-height: 250px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1; /* Logo/Imagem primeiro no mobile */
    min-height: 200px;
  }
`;

export const LogoPlaceholder = styled.div`
  font-size: 2.0rem;
  color: #555;
  padding: 20px;
  text-align: center;
`;

export const TextContainer = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2; /* Texto depois no mobile */
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 4.0rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacings.large};
`;
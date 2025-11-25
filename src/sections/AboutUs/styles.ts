import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutUsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: #FFFFFF; 
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
  background-color: #fcf9f9ce; 
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 80%; 
    height: auto;
    padding: ${({ theme }) => theme.spacings.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1; 
    min-height: 200px;
  }
`;

export const TextContainer = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2; 
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
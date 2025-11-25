import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  min-height: calc(100vh - 80px); 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background}; 
  
  padding-top: 120px; 
  padding-bottom: ${({ theme }) => theme.spacings.xlarge};
  overflow: hidden; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    padding-top: 100px; 
    padding-bottom: ${({ theme }) => theme.spacings.xlarge};
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TextContainer = styled(motion.div)`
  max-width: 850px; 
  width: 100%;
`;

export const Headline = styled(motion.h1)`
  font-size: 5.6rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const Subheadline = styled(motion.p)`
  font-size: 2.0rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.lightGray || '#B0BACC'};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;
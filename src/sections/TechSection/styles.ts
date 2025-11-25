import styled, { DefaultTheme, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface ThemeProps {
  theme: DefaultTheme;
}

interface TechIconProps {
  color: string;
}

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); 
  }
`;

export const TechWrapper = styled.section<ThemeProps>`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: #9fdefc2f; 
`;

export const Container = styled(motion.div)`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 4.0rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p<ThemeProps>`
  font-size: 1.8rem;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const CarouselTrack = styled.div`
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`;

export const IconsWrapper = styled.div`
  display: flex;
  width: max-content; 
  gap: ${({ theme }) => theme.spacings.large};
  
  animation: ${scroll} 40s linear infinite; 

  &:hover {
    animation-play-state: paused; 
  }
`;

export const TechIconItem = styled.div`
  min-width: 150px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacings.medium};
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); 
  transition: all 0.3s ease;
  cursor: default; 

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      min-width: 120px;
  }
`;

export const TechIcon = styled.div<TechIconProps>`
  color: ${({ color }) => color};
  font-size: 5.5rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4.5rem;
  }
`;

export const TechName = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
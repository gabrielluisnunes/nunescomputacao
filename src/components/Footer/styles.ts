import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacings.xlarge} 0 ${({ theme }) => theme.spacings.medium} 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const ContentGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }) => theme.spacings.large};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const BrandInfo = styled.div`
  flex: 1;
  min-width: 250px;
  margin-right: ${({ theme }) => theme.spacings.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacings.large};
    margin-right: 0;
  }
`;

export const Logo = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const Description = styled.p`
  font-size: 1.5rem;
  opacity: 0.8;
`;

export const NavSection = styled.div`
  flex: 0 0 auto;
  min-width: 150px;
  margin-left: ${({ theme }) => theme.spacings.large};

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.cta}; /* Cor de destaque */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
`;

export const NavLink = styled.a`
  display: block;
  font-size: 1.6rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  color: #fff;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    width: 100%;
  }
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 2.2rem;
  margin: 0 ${({ theme }) => theme.spacings.small};
  opacity: 0.8;
  transition: opacity 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.cta};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacings.medium};
  font-size: 1.4rem;
  opacity: 0.7;
`;
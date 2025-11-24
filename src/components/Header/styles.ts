 import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000; 
  
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.medium};
  }
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background}; 
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.cta}; 
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: ${({ theme }) => theme.spacings.large};
  }

  li a {
    color: ${({ theme }) => theme.colors.background};
    font-size: 1.6rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.cta}; 
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
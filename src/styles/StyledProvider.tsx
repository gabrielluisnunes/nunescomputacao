'use client'; 

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import React from 'react';

interface StyleProviderProps {
  children: React.ReactNode;
}

const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
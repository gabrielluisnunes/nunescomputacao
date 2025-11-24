import { DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0056B3',
    cta: '#FF6B00',

    background: '#FFFFFF',
    text: '#333333',
    neutral: '#F5F5F5',
    lightGray: '#CCCCCC',
  },

  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },

  spacings: {
    small: '0.8rem',
    medium: '1.6rem',
    large: '3.2rem',
    xlarge: '6.4rem',
  },

};

export default theme;
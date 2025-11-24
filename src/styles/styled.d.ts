import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      cta: string;
      background: string;
      text: string;
      neutral: string;
      lightGray: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacings: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}
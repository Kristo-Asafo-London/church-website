import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2c3e50',
    secondary: '#3498db',
    accent: '#e74c3c',
    light: '#ecf0f1',
    dark: '#2c3e50',
    text: '#333',
    textLight: '#7f8c8d',
    white: '#ffffff',
  },
  fonts: {
    primary: '"Helvetica Neue", Arial, sans-serif',
    secondary: '"Georgia", serif',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.text};
    line-height: 1.6;
    background-color: ${theme.colors.white};
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
    margin-bottom: ${theme.spacing.medium};
    color: ${theme.colors.dark};
  }
  
  p {
    margin-bottom: ${theme.spacing.medium};
    color: ${theme.colors.textLight};
  }
`;
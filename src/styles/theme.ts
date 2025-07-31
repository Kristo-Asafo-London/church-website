import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#E74C3C", // Red
    secondary: "#F1C40F", // Yellow
    accent: "#2ECC71", // Green
    light: "#3498DB", // Blue
    dark: "#2C3E50", // Dark blue for text
    text: "#2C3E50",
    textLight: "#7F8C8D",
    white: "#FFFFFF",
  },
  fonts: {
    primary: '"Helvetica Neue", Arial, sans-serif',
    secondary: '"Georgia", serif',
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    largeDesktop: "1200px",
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
      color: ${theme.colors.light};
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

import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    // Primary brand colors
    primary: "#E74C3C", // Red
    secondary: "#F1C40F", // Yellow
    accent: "#2ECC71", // Green
    light: "#3498DB", // Blue
    dark: "#2C3E50", // Dark blue for text
    
    // Text colors
    text: "#2C3E50",
    textLight: "#7F8C8D",
    white: "#FFFFFF",
    black: "#000000",
    
    // Social media brand colors (exact matches)
    linkedin: "#0077B5", // LinkedIn blue
    whatsapp: "#25D366", // WhatsApp green
    instagram: "#E4405F", // Instagram pink
    facebook: "#1877F2", // Facebook blue
    twitter: "#1DA1F2", // Twitter blue
    youtube: "#FF0000", // YouTube red
    email: "#D44638", // Gmail red
    
    // Additional UI colors
    success: "#2ECC71",
    warning: "#F39C12",
    danger: "#E74C3C",
    info: "#3498DB",
  },
  fonts: {
    primary:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif'",
    secondary:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif'"
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
    color: ${theme.colors.textLight};
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

  /* Social media color classes */
  .linkedin { color: ${theme.colors.linkedin}; }
  .whatsapp { color: ${theme.colors.whatsapp}; }
  .instagram { color: ${theme.colors.instagram}; }
  .facebook { color: ${theme.colors.facebook}; }
  .twitter { color: ${theme.colors.twitter}; }
  .youtube { color: ${theme.colors.youtube}; }
  .email { color: ${theme.colors.email}; }
`;
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Kristo Asafo London</h3>
          <p>Service To Mankind Is Service To God</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/music">Music</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>35 Bensham Grove, </p>
          <p>Thornton Heath, CR7 8DD</p>
          <p>Email: admin@kristoasafolondon.co.uk</p>
          <p>Phone: 07961902404</p>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Kristo Asafo London. All rights reserved. <br />
        <br />
        Website by{" "}
        <a href="https://flexsaas.co.uk" target="_blank" rel="noopener noreferrer">
          FlexSaaS <img src="/flexsaas.png" alt="FlexSaaS Logo" style={{ width: "15px", marginLeft: "5px", verticalAlign: "middle" }} />
        </a>
      </Copyright>
    </FooterContainer>
  );
};


const FooterContainer = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.large};
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing.medium};
    font-size: 1.2rem;
  }
  
  p {
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.small};
    display: block;
  }
`;

const FooterLink = styled(NavLink)`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.small};
  display: block;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.white};
  }

  &.active {
    color: ${theme.colors.white};
    font-weight: 500;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.large};
  margin-top: ${theme.spacing.large};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.textLight};
`;
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

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
    color: ${theme.colors.accent};
  }

  &.active {
    color: ${theme.colors.accent};
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

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>ConsultPro</h3>
          <p>Providing expert consulting services to help your business grow and succeed in today's competitive market.</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/hire-me">Hire Me</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <p>123 Business Ave</p>
          <p>London, Postcode</p>
          <p>Email: info@consultpro.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} ConsultPro. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useCallback } from 'react';

export const Footer = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Adjust scroll speed
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Kristo Asafo London</h3>
          <p>Service To Mankind Is Service To God</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterButton onClick={() => scrollToSection("home")}>Home</FooterButton>
          <FooterButton onClick={() => scrollToSection("donations")}>Donations</FooterButton>
          <FooterButton onClick={() => scrollToSection("about")}>About Us</FooterButton>
          <FooterButton onClick={() => scrollToSection("trustees")}>Our Trustees</FooterButton>
          <FooterButton onClick={() => scrollToSection("contact")}>Contact</FooterButton>
          <FooterButton onClick={() => scrollToSection("music")}>Music</FooterButton>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>35 Bensham Grove, </p>
          <p>Thornton Heath, CR7 8DD</p>
          <p>Email: info@kristoasafolondon.co.uk</p>
          <p>Phone: 07961902404</p>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Kristo Asafo London. All rights reserved. <br />
        <br />
        Website by{" "}
        <a href="https://flexsaas.co.uk" target="_blank" rel="noopener noreferrer">
          FlexSaaS{" "}
          <img
            src="/flexsaas.png"
            alt="FlexSaaS Logo"
            style={{ width: "15px", marginLeft: "5px", verticalAlign: "middle" }}
          />
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

const FooterButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.small};
  display: block;
  text-align: left;
  font-size: 1.13rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0;
  font-family: inherit;

  &:hover {
    color: ${theme.colors.white};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.large};
  margin-top: ${theme.spacing.large};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.textLight};
`;

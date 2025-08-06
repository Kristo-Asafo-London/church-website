import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { lighten } from 'polished';
import { shadowColors } from "../common/common";

export const ContactUs = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <h1>Connect With Us</h1>
        <p className="subtitle">We'd love to hear from you. Reach out through any of these channels and we'll respond as quickly as possible.</p>
      </ContactHeader>

      <ContactGrid>
        <ContactCard>
          <IconCircle color={theme.colors.whatsapp}>
            <FaWhatsapp size={24} />
          </IconCircle>
          <h3>WhatsApp</h3>
          <p>Chat with our team</p>
          <ContactLink href="https://wa.me/+447961902404" target="_blank">
            07961902404
          </ContactLink>
        </ContactCard>

        <ContactCard>
          <IconCircle color={theme.colors.accent}>
            <FaPhone size={24} />
          </IconCircle>
          <h3>Phone</h3>
          <p>Call our office</p>
          <ContactLink href="tel:+447961902404">07961902404</ContactLink>
        </ContactCard>

        <ContactCard>
          <IconCircle color={theme.colors.primary}>
            <FaEnvelope size={24} />
          </IconCircle>
          <h3>Email</h3>
          <p>Send us a message</p>
          <ContactLink href="mailto:info@kristoasafolondon.co.uk">info@kristoasafolondon.co.uk</ContactLink>
        </ContactCard>

        <ContactCard>
          <IconCircle color={theme.colors.linkedin}>
            <FaLinkedin size={24} />
          </IconCircle>
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
          <ContactLink href="https://linkedin.com/in/kristoasafo" target="_blank">
            kristoasafolondon
          </ContactLink>
        </ContactCard>

        <ContactCard>
          <IconCircle color={theme.colors.instagram}>
            <FaInstagram size={24} />
          </IconCircle>
          <h3>Instagram</h3>
          <p>Follow our latest updates</p>
          <ContactLink href="https://instagram.com/kristoasafo" target="_blank">
            @kristoasafolondon
          </ContactLink>
        </ContactCard>

        <ContactCard>
          <IconCircle color={theme.colors.secondary}>
            <FaMapMarkerAlt size={24} />
          </IconCircle>
          <h3>Headquarters</h3>
          <p> Accra NewTown</p>
          <Address>Greater Accra Region, Ghana</Address>
        </ContactCard>
      </ContactGrid>

      <HoursSection>
        <h2>
          <FaClock style={{ marginRight: "10px" }} /> Office Hours
        </h2>
        <HoursGrid>
          <div>
            <h4>Weekdays</h4>
            <p>Monday - Friday</p>
            <p>8:00 - 17:00 UTC</p>
          </div>
          <div>
            <h4>Weekends</h4>
            <p>Saturday</p>
            <p>15:00 - 18:00 UTC</p>
          </div>
        </HoursGrid>
      </HoursSection>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 6rem ${theme.spacing.large};
  background: linear-gradient(135deg, ${lighten(0.45, theme.colors.light)} 0%, ${theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
  max-width: 1250px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 10px;
    background: linear-gradient(90deg, ${shadowColors.join(", ")});
    z-index: 1;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem ${theme.spacing.medium};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem ${theme.spacing.small};
  }
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.8rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.medium};
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.25rem;
    color: ${theme.colors.text};
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.text};
    margin: 1.5rem 0 0.5rem;
  }

  p {
    color: ${theme.colors.textLight};
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const IconCircle = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ color }) => lighten(0.35, color)};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const ContactLink = styled.a`
  color: ${theme.colors.text};
  font-weight: 500;
  margin-top: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;

  &:hover {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`;

const Address = styled.p`
  font-style: italic;
  color: ${theme.colors.textLight};
  margin-top: 1rem;
`;

const HoursSection = styled.div`
  background: ${lighten(0.4, theme.colors.white)};
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.09);

  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.text};
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 500px;
  margin: 0 auto;
  

  h4 {
    color: ${theme.colors.textLight};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: ${theme.colors.textLight};
    margin-bottom: 0.3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
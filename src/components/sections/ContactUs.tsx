import styled from 'styled-components';

import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { ConsultationForm } from './ConsultationForm';
import { theme } from '../../styles/theme';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem ${theme.spacing.large};
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${theme.colors.textLight};
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SocialSection = styled.div`
  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.large};
  }
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.large};
  color: ${theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }

  .icon {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
  }

  span {
    font-size: 1.1rem;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing.medium};
    color: ${theme.colors.primary};
  }

  p {
    margin-bottom: ${theme.spacing.medium};
    color: ${theme.colors.textLight};
  }
`;

export const ContactUs = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <h1>Get In Touch</h1>
        <p>
          Have questions or ready to start your project? Reach out through any of 
          these channels or fill out the form to schedule a consultation.
        </p>
      </ContactHeader>

      <ContactContent>
        <SocialSection>
          <h2>Connect With Me</h2>

          <SocialItem href="https://linkedin.com/in/yourprofile" target="_blank">
            <div className="icon"><FaLinkedin /></div>
            <span>LinkedIn: /Judith- -consulting</span>
          </SocialItem>

          <SocialItem href="https://instagram.com/yourprofile" target="_blank">
            <div className="icon"><FaInstagram /></div>
            <span>Instagram: @Judith _consulting</span>
          </SocialItem>

          <SocialItem href="https://wa.me/yournumber" target="_blank">
            <div className="icon"><FaWhatsapp /></div>
            <span>WhatsApp: +1 (555) 123-4567</span>
          </SocialItem>

          <SocialItem href="mailto:Judith@consulting.com">
            <div className="icon"><FaEnvelope /></div>
            <span>Email: Judith@consulting.com</span>
          </SocialItem>

          <ContactInfo>
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9am - 5pm EST</p>
            <p>Weekends: By appointment only</p>
          </ContactInfo>
        </SocialSection>

        <div>
          <h2>Send a Message</h2>
          <ConsultationForm />
        </div>
      </ContactContent>
    </ContactContainer>
  );
};
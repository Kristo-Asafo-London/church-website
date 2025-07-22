import styled from 'styled-components';
import { PricingPlans } from '../components/sections/PricingPlans';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { theme } from '../styles/theme';

const HireMeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.large};
`;

const HireMeHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xlarge};
  
  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const HireMe = () => {
  return (
    <HireMeContainer>
      <HireMeHeader>
        <h1>Hire Me For Your Project</h1>
        <p>
          Below you'll find my consulting rates and packages. Choose the option that best fits your needs, 
          or contact me for a custom solution tailored specifically to your business.
        </p>
      </HireMeHeader>
      
      <PricingPlans />
      <ConsultationForm />
    </HireMeContainer>
  );
};
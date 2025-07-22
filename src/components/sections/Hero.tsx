import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom'; // Add this import

const HeroContainer = styled.section`
  background: linear-gradient(15deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.white};
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    font-size: 3rem;
    margin-bottom: ${theme.spacing.medium};
    line-height: 1.2;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.xlarge};
    opacity: 0.9;
    color: ${theme.colors.white};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.large};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStartedClick = () => {
    navigate('/hire-me'); // Navigate to consultation form
  };

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to about page
  };

  return (
    <HeroContainer>
      <HeroContent>
        <h1>Expert Business Consulting for Sustainable Growth</h1>
        <p>
          We help businesses navigate challenges, optimize operations, and implement 
          strategies that drive measurable results and long-term success.
        </p>
        <ButtonGroup>
          <Button primary onClick={handleGetStartedClick}>Get Started</Button>
          <Button secondary onClick={handleLearnMoreClick}>Learn More</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};
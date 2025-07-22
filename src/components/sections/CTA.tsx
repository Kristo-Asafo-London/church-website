import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

const CTAContainer = styled.section`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: 4rem ${theme.spacing.large};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.medium};
  }
  
  p {
    margin-bottom: ${theme.spacing.xlarge};
    font-size: 1.1rem;
    opacity: 0.9;
    color: ${theme.colors.white}; // Moved from inline style to here
  }
`;

export const CTA = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/hire-me'); // Navigate to hire-me page
  };

  return (
    <CTAContainer>
      <CTAContent>
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Schedule a free consultation with one of our experts to discuss how we can help 
          your business achieve its goals and overcome challenges.
        </p>
        <Button primary onClick={handleButtonClick}>
          Get Your Free Consultation
        </Button>
      </CTAContent>
    </CTAContainer>
  );
};
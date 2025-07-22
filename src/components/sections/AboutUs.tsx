import styled from 'styled-components';

import { FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem ${theme.spacing.large};
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }

  p.subtitle {
    font-size: 1.2rem;
    color: ${theme.colors.textLight};
    max-width: 700px;
    margin: 0 auto;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const BioContent = styled.div`
  h2 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }

  p {
    margin-bottom: ${theme.spacing.large};
    line-height: 1.7;
  }
`;

const ExpertiseSection = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing.large};
    color: ${theme.colors.primary};
  }
`;

const ExpertiseItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.large};

  .icon {
    color: ${theme.colors.accent};
    font-size: 1.5rem;
    margin-top: 4px;
  }

  .content {
    h4 {
      font-size: 1.2rem;
      margin-bottom: ${theme.spacing.small};
    }

    p {
      margin-bottom: 0;
      color: ${theme.colors.textLight};
    }
  }
`;

export const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <h1>About Sarah Johnson</h1>
        <p className="subtitle">
          Strategic business consultant with 12+ years experience helping 
          entrepreneurs and small businesses achieve sustainable growth
        </p>
      </AboutHeader>

      <AboutContent>
        <ProfileImage>
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Sarah Johnson" 
          />
        </ProfileImage>

        <BioContent>
          <h2>My Story</h2>
          <p>
            After a successful career in corporate strategy at Fortune 500 companies, 
            I founded my consulting practice to bring enterprise-level strategic 
            thinking to small businesses and startups. My approach combines analytical 
            rigor with practical, actionable advice tailored to each client's unique needs.
          </p>
          <p>
            What sets me apart is my focus on not just identifying opportunities, 
            but implementing solutions. I work side-by-side with clients to ensure 
            strategies are executed effectively and deliver measurable results.
          </p>

          <ExpertiseSection>
            <h3>My Expertise</h3>

            <ExpertiseItem>
              <div className="icon"><FaChartLine /></div>
              <div className="content">
                <h4>Business Strategy</h4>
                <p>
                  Developing clear roadmaps for growth, competitive positioning, 
                  and long-term success.
                </p>
              </div>
            </ExpertiseItem>

            <ExpertiseItem>
              <div className="icon"><FaLightbulb /></div>
              <div className="content">
                <h4>Innovation Consulting</h4>
                <p>
                  Helping businesses identify new opportunities and develop 
                  innovative solutions to market challenges.
                </p>
              </div>
            </ExpertiseItem>

            <ExpertiseItem>
              <div className="icon"><FaHandshake /></div>
              <div className="content">
                <h4>Client-Centered Approach</h4>
                <p>
                  Tailored solutions with ongoing support to ensure successful 
                  implementation.
                </p>
              </div>
            </ExpertiseItem>
          </ExpertiseSection>
        </BioContent>
      </AboutContent>
    </AboutContainer>
  );
};
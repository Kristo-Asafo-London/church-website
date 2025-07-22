import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ServiceCard } from '../common/ServiceCard';

const ServicesPreviewContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.large};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xlarge};
  
  h2 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.large};
`;

export const ServicesPreview = () => {
  const services = [
    {
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development to position your company for long-term success.',
      icon: '📊'
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline operations and improve efficiency across your organization.',
      icon: '⚙️'
    },
    {
      title: 'Financial Advisory',
      description: 'Expert financial analysis and planning to maximize profitability.',
      icon: '💰'
    }
  ];

  return (
    <ServicesPreviewContainer>
      <SectionHeader>
        <h2>Our Core Services</h2>
        <p>
          We specialize in helping businesses overcome challenges and achieve their goals 
          through targeted consulting services.
        </p>
      </SectionHeader>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </ServicesGrid>
    </ServicesPreviewContainer>
  );
};
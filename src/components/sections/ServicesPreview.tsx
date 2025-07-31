import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ServiceCard } from '../common/ServiceCard';


export const ServicesPreview = () => {
  const services = [
    {
      title: "Service To Mankind Is Service To God",
      description: "Treat and Serve all with respect and dignity, ensuring that our services contribute positively to society.",
      icon: "📊",
    },
    {
      title: "Train up the child in the way he should go, and when he is old, he will not depart from it (Proverbs 22:6)",
      description: "Empowering the next generation through education and mentorship, fostering a culture of lifelong learning.",
      icon: "⚙️",
    },
    {
      title: "Have the Can Do Spirit",
      description: "Fostering a positive mindset and resilience in the face of challenges.",
      icon: "💰",
    },
  ];

  return (
    <ServicesPreviewContainer>
      <SectionHeader>
        <h2>Our Core Services</h2>
        <p>We specialize in helping businesses overcome challenges and achieve their goals through targeted consulting services.</p>
      </SectionHeader>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </ServicesGrid>
    </ServicesPreviewContainer>
  );
};

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
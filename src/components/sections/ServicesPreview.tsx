import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ServiceCard } from '../common/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandsHelping, 
  faGraduationCap, 
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';
import { lighten } from 'polished';

export const ServicesPreview = () => {
  const services = [
    {
      title: "Service To Mankind Is Service To God",
      subtext: "Matthew 25:40",
      description:
        "Treat and serve all with respect and dignity, ensuring that our services contribute positively to society, uplift communities, and create lasting impacts that reflect compassion and integrity.",
      icon: <FontAwesomeIcon icon={faHandsHelping} size="1x" />,
      color: theme.colors.primary,
    },
    {
      title: "Train up the child in the way he should go",
      subtext: "Proverbs 22:6",
      description:
        "Empowering the next generation through education and mentorship, fostering a culture of lifelong learning, personal growth, and moral guidance that shapes confident individuals.",
      icon: <FontAwesomeIcon icon={faGraduationCap} size="1x" />,
      color: theme.colors.secondary,
    },
    {
      title: "Have the Can Do Spirit, believe in yourself",
      subtext: "Philippians 4:13",
      description:
        "Fostering a positive mindset and resilience in the face of challenges, inspiring creativity, resourcefulness, and determination to achieve goals while maintaining hope and perseverance.",
      icon: <FontAwesomeIcon icon={faLightbulb} size="1x" />,
      color: theme.colors.accent,
    },
  ];
  

  return (
    <ServicesPreviewContainer id="values">
      <SectionHeader>
        <h2>Our Core Values</h2>
        <p>Guiding principles that shape our approach to service and community impact</p>
      </SectionHeader>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtext={service.subtext}
            description={service.description}
            icon={service.icon}
            color={service.color}
          />
        ))}
      </ServicesGrid>
    </ServicesPreviewContainer>
  );
};

const ServicesPreviewContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem ${theme.spacing.large};
  background-color: ${lighten(0.45, theme.colors.light)};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.medium};
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: ${theme.colors.light};
    }
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: ${theme.colors.textLight};
    line-height: 1.6;
  }
`;

const ServicesGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
import styled from 'styled-components';

import { FaQuoteLeft } from 'react-icons/fa';
import { theme } from '../styles/theme';

const TestimonialsContainer = styled.section`
  background-color: ${theme.colors.light};
  padding: 4rem ${theme.spacing.large};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xlarge};
  
  h2 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.medium};
  }
`;

const TestimonialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.large};
`;

const TestimonialCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .quote {
    color: ${theme.colors.textLight};
    font-style: italic;
    margin-bottom: ${theme.spacing.medium};
    position: relative;
    
    svg {
      color: ${theme.colors.secondary};
      opacity: 0.3;
      position: absolute;
      top: -10px;
      left: -10px;
      font-size: 2rem;
    }
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.medium};
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      font-weight: bold;
    }
    
    .info {
      .name {
        font-weight: bold;
        color: ${theme.colors.dark};
      }
      
      .position {
        color: ${theme.colors.textLight};
        font-size: 0.9rem;
      }
    }
  }
`;

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The consulting services provided transformed our business operations and helped us achieve 30% growth in just one year.",
      name: "Judith  ",
      position: "CEO, TechSolutions Inc.",
      initials: "SJ"
    },
    {
      quote: "Their strategic insights were invaluable during our expansion phase. Highly recommend their expertise to any growing business.",
      name: "Michael Chen",
      position: "COO, Global Ventures",
      initials: "MC"
    },
    {
      quote: "Working with this team was a game-changer for our financial planning. They identified savings we never would have found on our own.",
      name: "David Wilson",
      position: "CFO, Enterprise Corp",
      initials: "DW"
    }
  ];

  return (
    <TestimonialsContainer>
      <SectionHeader>
        <h2>What Our Clients Say</h2>
      </SectionHeader>
      
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <div className="quote">
              <FaQuoteLeft />
              <p>{testimonial.quote}</p>
            </div>
            <div className="author">
              <div className="avatar">{testimonial.initials}</div>
              <div className="info">
                <div className="name">{testimonial.name}</div>
                <div className="position">{testimonial.position}</div>
              </div>
            </div>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};
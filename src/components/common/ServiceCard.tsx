import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Card = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.medium};
  }
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.small};
  }
  
  p {
    color: ${theme.colors.textLight};
  }
`;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import type { ReactNode } from 'react';


interface ServiceCardProps {
  title: string;
  subtext?: string;
  description: string;
  icon: ReactNode;
  iconAlt?: ReactNode;
  color?: string;
}


export const ServiceCard = ({ title, subtext, description, icon, iconAlt, color }: ServiceCardProps) => {
  return (
    <Card style={{ borderTopColor: color || theme.colors.primary }}>
      <IconWrapper>
        <span className="icon">{icon}</span>
        {iconAlt && <span className="iconAlt">{iconAlt}</span>}
      </IconWrapper>
      <h3>{title}</h3>
      {subtext && <Subtext>{subtext}</Subtext>}
      <p>{description}</p>
    </Card>
  );
};


const Card = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: 8px;
  border-top: 4px solid ${theme.colors.primary}; // Can be overridden with inline style
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.small};
  }

  p {
    color: ${theme.colors.textLight};
    margin-top: ${theme.spacing.small};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.small};
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.medium};

  .icon,
  .iconAlt {
    display: inline-block;
  }
`;

const Subtext = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

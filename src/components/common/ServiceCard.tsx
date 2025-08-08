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
  const cardColor = color || theme.colors.primary;

  return (
    <Card style={{ borderTopColor: cardColor }} $color={cardColor}>
      <IconWrapper>
        <IconCircle style={{ backgroundColor: cardColor }} />
        <span className="icon" style={{ color: cardColor }}>
          {icon}
        </span>
        {iconAlt && (
          <span className="iconAlt" style={{ color: cardColor }}>
            {iconAlt}
          </span>
        )}
      </IconWrapper>
      <h3>{title}</h3>
      {subtext && <Subtext>{subtext}</Subtext>}
      <DescriptionText $color={cardColor}>{description}</DescriptionText>
    </Card>
  );
};

const IconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.medium};
  transition: transform 0.3s ease;
  z-index: 1;

  .icon,
  .iconAlt {
    display: inline-block;
    transition: color 0.3s ease;
  }
`;

const IconCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;


const Subtext = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const DescriptionText = styled.div<{ $color: string }>`
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
  display: inline-block;
  overflow: hidden;
opacity: 0.7;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ $color }) => $color};
    z-index: 1;
    transition: width 0.4s ease;
  }
`;

const Card = styled.div<{ $color: string }>`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: 8px;
  border-top: 4px solid ${theme.colors.primary};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

    ${IconWrapper} {
      transform: translateY(-10px);
    }

    ${IconCircle} {
      transform: scale(1.2);
      opacity: 1;
    }

    ${DescriptionText}::after {
      width: 0%;
    }
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
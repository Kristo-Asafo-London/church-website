import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaCheck } from 'react-icons/fa';

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.large};
  margin-bottom: ${theme.spacing.xlarge};
`;

const PlanCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: ${theme.spacing.xlarge};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  &.featured {
    border: 2px solid ${theme.colors.accent};
    position: relative;
    
    &:before {
      content: 'Most Popular';
      position: absolute;
      top: -12px;
      right: 20px;
      background-color: ${theme.colors.accent};
      color: ${theme.colors.white};
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;

const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.large};
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${theme.colors.secondary};
    margin: ${theme.spacing.medium} 0;
    
    span {
      font-size: 1rem;
      color: ${theme.colors.textLight};
    }
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.large};
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing.small};
    color: ${theme.colors.text};
    
    svg {
      color: ${theme.colors.secondary};
      margin-right: ${theme.spacing.small};
    }
  }
`;

const PlanButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.secondary};
  }
  
  &.featured {
    background-color: ${theme.colors.accent};
    
    &:hover {
      background-color: darken(${theme.colors.accent}, 10%);
    }
  }
`;

interface Plan {
  name: string;
  price: string | number;
  period?: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const PricingPlans = () => {
  const plans: Plan[] = [
    {
      name: 'Starter',
      price: 499,
      period: 'per project',
      features: [
        'Initial consultation',
        'Business assessment',
        'Strategic recommendations',
        '5 hours of support',
        'Email support only'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: 1499,
      period: 'per project',
      features: [
        'Comprehensive analysis',
        'Custom strategy development',
        'Implementation plan',
        '20 hours of support',
        'Priority email & phone support',
        'Monthly check-ins'
      ],
      featured: true,
      cta: 'Choose Plan'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Dedicated consultant',
        'Full business transformation',
        'Ongoing strategic partnership',
        'Unlimited support',
        'Weekly strategy sessions',
        'Quarterly business reviews',
        'Custom reporting'
      ],
      cta: 'Contact Us'
    }
  ];

  return (
    <PlansContainer>
      {plans.map((plan, index) => (
        <PlanCard key={index} className={plan.featured ? 'featured' : ''}>
          <PlanHeader>
            <h3>{plan.name}</h3>
            <div className="price">
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
              {plan.period && <span> / {plan.period}</span>}
            </div>
          </PlanHeader>
          
          <PlanFeatures>
            {plan.features.map((feature, i) => (
              <li key={i}>
                <FaCheck /> {feature}
              </li>
            ))}
          </PlanFeatures>
          
          <PlanButton className={plan.featured ? 'featured' : ''}>
            {plan.cta}
          </PlanButton>
        </PlanCard>
      ))}
    </PlansContainer>
  );
};
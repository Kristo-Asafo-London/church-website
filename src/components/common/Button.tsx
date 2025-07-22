import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void; // Add onClick prop
}

export const Button = styled.button<ButtonProps>`
  padding: ${theme.spacing.medium} ${theme.spacing.large};
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ primary }) => primary && `
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
    
    &:hover {
      background-color: darken(${theme.colors.accent}, 10%);
      transform: translateY(-2px);
    }
  `}
  
  ${({ secondary }) => secondary && `
    background-color: transparent;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}
`;
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.large} 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.large};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.white};
  z-index: 101;
`;

const NavItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: ${theme.spacing.large};

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40vh;
    background-color: ${theme.colors.primary};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 100;
  }
`;

const NavItem = styled.li`
  a {
    color: ${theme.colors.white};
    font-weight: 500;
    padding: ${theme.spacing.small} 0;
    position: relative;
    font-size: 1.1rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.accent};
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
    
    &.active {
      color: ${theme.colors.accent};
      
      &:after {
        width: 100%;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>ConsultPro</Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <NavItems isOpen={isMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hire-me" onClick={() => setIsMenuOpen(false)}>Hire Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </NavItem>
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
};
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
  
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // milliseconds — increase this to slow it down
    let startTime: number | null = null;
  
    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else setIsMenuOpen(false); // close menu after scroll ends
    };
  
    requestAnimationFrame(animation);
  };
  

  return (
    <HeaderContainer>
      <Nav>
        <MobileMenuButton onClick={toggleMenu}>{isMenuOpen ? <FaTimes /> : <FaBars />}</MobileMenuButton>

        <NavItems isOpen={isMenuOpen}>
          <NavItem>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection("donations")}>Donations</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection("about")}>About Us</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection("trustees")}>Our Trustees</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection("music")}>Music</button>
          </NavItem>
        </NavItems>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  color: ${theme.colors.dark};
  padding: ${theme.spacing.large} 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.large};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const NavItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: ${theme.spacing.large};
  margin: 0;
  padding: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    z-index: 100;
  }
`;

const NavItem = styled.li`
  button {
    color: ${theme.colors.dark};
    font-weight: 500;
    padding: ${theme.spacing.small} 0;
    position: relative;
    font-size: 1.1rem;
    background: none;
    border: none;
    cursor: pointer;
font-family: inherit;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.light};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }

    &:hover {
      color: ${theme.colors.light};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.5rem;
      color: ${theme.colors.dark};

      &:hover {
        color: ${theme.colors.light};
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.dark};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
  padding: ${theme.spacing.small};
font-family: inherit;
  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

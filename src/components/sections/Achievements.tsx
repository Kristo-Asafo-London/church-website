import styled from "styled-components";
import { theme } from "../../styles/theme";
import { FaCar, FaTractor, FaGraduationCap } from "react-icons/fa";

export const Achievements = () => {
  return (
    <AchievementsSection>
      <SectionHeader>
        <h4>Notable Achievements</h4>

      </SectionHeader>
      <AchievementsGrid>
        <AchievementCard>
          <IconWrapper color="#4CAF50">
            <FaCar size={32} />
          </IconWrapper>
          <h4>Kantanka Automobiles</h4>
          <p>First indigenous Ghanaian automobile manufacturing company</p>
        </AchievementCard>
        <AchievementCard>
          <IconWrapper color="#F1C40F">
            <FaTractor size={32} />
          </IconWrapper>
          <h4>Agricultural Projects</h4>
          <p>Large-scale farming initiatives ensuring food security</p>
        </AchievementCard>
        <AchievementCard>
          <IconWrapper color="#2196F3">
            <FaGraduationCap size={32} />
          </IconWrapper>
          <h4>Educational Institutions</h4>
          <p>Schools and training centers nurturing young talents</p>
        </AchievementCard>
      </AchievementsGrid>
    </AchievementsSection>
  );
};

const AchievementsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, ${theme.colors.light} 0%, #f9f9f9 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="rgba(255,255,255,0.3)" d="M0,0 L100,0 L100,100 L0,100 Z" /></svg>');
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const SectionHeader = styled.div`
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
  z-index: 1;
  
  h4 {
    font-size: 1.8rem;
    color: ${theme.colors.text};
    margin-bottom: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: ${theme.colors.secondary};
    }
  }
`;


const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 3px solid ${theme.colors.accent};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    
    &::before {
      width: 100%;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: ${theme.colors.primary};
    transition: width 0.4s ease;
  }
  
  h4 {
    color: ${theme.colors.text};
    margin: 1.5rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: ${theme.colors.textLight};
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color}20;
  border-radius: 50%;
  color: ${({ color }) => color};
  transition: all 0.3s ease;
  
  ${AchievementCard}:hover & {
    transform: scale(1.1);
    background: ${({ color }) => color};
    color: white;
    box-shadow: 0 10px 20px ${({ color }) => color}40;
  }
`;
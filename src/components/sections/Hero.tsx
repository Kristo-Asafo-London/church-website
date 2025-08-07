import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <ImageContainer id="home">
      <HeroGrid>
        <LeftVisual>
          <GradientBackground>
            <StarSystem>
              <MainStar>★</MainStar>
              {[...Array(12)].map((_, i) => (
                <OrbitingStar key={i} index={i}>
                  ★
                </OrbitingStar>
              ))}
            </StarSystem>
          </GradientBackground>
        </LeftVisual>

        <RightContent>
          <HeroTitle>Service To Mankind Is Service To God</HeroTitle>
          <p>
            Kristo Asafo Mission of Ghana, London Branch, registered under the charity commission of England and Wales with number 1151246, is
            committed to serving humanity through compassion, technology, and community empowerment.
          </p>
          <ButtonGroup>
            <ActionButton onClick={() => navigate("/about")}>About Us</ActionButton>
            <ActionButton secondary onClick={() => navigate("/contact")}>
              Contact Us
            </ActionButton>
          </ButtonGroup>
        </RightContent>
      </HeroGrid>
    </ImageContainer>
  );
};

// Keyframes
const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/stars.jpeg");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6); /* darkness level: 0 = transparent, 1 = black */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1; /* put children above overlay */
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 100%;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  width: 100%;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: ${theme.colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`;

const LeftVisual = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 400px;
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgb(9, 125, 202) 23%, #006400 26%, #e3e70d 28%, #d30c0c 30%, rgba(255, 255, 255, 0) 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
  margin-top: -10rem;
  }
`;

const StarSystem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  max-width: 400px;
  max-height: 400px;
`;

const MainStar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(3rem, 8vw, 5rem);
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
  z-index: 2;
`;

const OrbitingStar = styled.div<{ index: number }>`
  position: absolute;
  top: 48%;
  left: 48%;
  font-size: 12px;
  color: white;
  text-shadow: 0 0 5px #fff;
  animation: ${orbit} 20s linear infinite;
  animation-delay: ${({ index }) => `-${index * 1.666}s`};
  transform-origin: left center;

  --orbit-radius: min(25vw, 80px);

  @media (max-width: ${theme.breakpoints.mobile}) {
    --orbit-radius: min(25vw, 50px);
    top: 47%;
  }
`;

const RightContent = styled.div`
  color: white;
  text-align: left;
  background: rgba(0, 0, 0, 0.34);
  padding: 2rem;
  border-radius: 16px;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: ${theme.spacing.medium};
  }

  p {
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: ${theme.spacing.large};
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: -10rem;

    h1 {
      text-align: center;
    }

    p {
      margin: 0 auto ${theme.spacing.large};
      text-align: left;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled.button<{ secondary?: boolean }>`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ secondary }) =>
    secondary ? theme.colors.white : theme.colors.light};
  color: ${({ secondary }) =>
    secondary ? theme.colors.light : theme.colors.white};
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ secondary }) =>
      secondary ? theme.colors.dark : theme.colors.dark};
    color: ${({ secondary }) =>
      secondary ? theme.colors.light : theme.colors.white};
  }
`;

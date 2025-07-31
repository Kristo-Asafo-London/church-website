import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleCoreValuesClicked = () => {
    navigate("/hire-me");
  };

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <HeroContainer>
      <GradientBackground>
        <StarContainer>
          <MainStar>★</MainStar>
          {[...Array(12)].map((_, i) => (
            <OrbitingStar key={i} index={i}>
              ★
            </OrbitingStar>
          ))}
        </StarContainer>
      </GradientBackground>
      <HeroContent>
        <h1>Service To Mankind Is Service To God</h1>
        <p>
          Kristo Asafo Mission of Ghana, London Branch, is a non-profit organization dedicated to serving the community through various charitable
          initiatives and support programs. We aim to uplift lives and promote the values of compassion, integrity, and service.
        </p>
        <ButtonGroup>
          <Button primary onClick={handleCoreValuesClicked}>
            Our Core Values
          </Button>
          <Button secondary onClick={handleLearnMoreClick}>
            About Us
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
`;

const HeroContainer = styled.section`
  color: ${theme.colors.white};
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 1rem;
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #0a45bdff 23%, #006400 26%, #e3e70dff 28%, #d30c0cff 30%, #acaaaaff 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StarContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 3rem;
`;

const MainStar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
  z-index: 2;
`;

const OrbitingStar = styled.div<{ index: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0 0 5px #fff;
  animation: ${orbit} 20s linear infinite;
  animation-delay: ${({ index }) => `-${index * 1.666}s`};
  transform-origin: left center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;

  h1 {
    font-size: 3rem;
    margin-bottom: ${theme.spacing.medium};
    line-height: 1.2;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.xlarge};
    opacity: 0.9;
    color: ${theme.colors.white};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.large};
  z-index: 2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

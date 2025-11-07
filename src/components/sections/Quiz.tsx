import styled from "styled-components";
import { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import { PacmanLoader } from "react-spinners";

export const Quiz = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [minimumLoadTimePassed, setMinimumLoadTimePassed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleWheel = (e: WheelEvent) => {
      // Only prevent wheel events on desktop
      if (!isMobile) {
        const iframe = document.querySelector("iframe");
        if (iframe && iframe.contains(e.target as Node)) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    // Minimum load time timer (5 seconds)
    const minimumTimer = setTimeout(() => {
      setMinimumLoadTimePassed(true);
    }, 5000);

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
      clearTimeout(minimumTimer);
    };
  }, [isMobile]); // Add isMobile as dependency

  const handleIframeLoad = () => {
    // Only set as loaded if minimum time has passed
    if (minimumLoadTimePassed) {
      setLoaded(true);
      setLoadingProgress(100);
    } else {
      // If iframe loads before 5 seconds, wait until timer completes
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 5000 - (Date.now() - startTime));
      return () => clearTimeout(timer);
    }
  };

  // Track when component mounts
  const [startTime] = useState(Date.now());

  return (
    <QuizContainer loaded={loaded} id="quiz" $isMobile={isMobile}>
      {!loaded && (
        <LoadingOverlay loaded={loaded}>
          <PacmanLoader color={theme.colors.light} size={50} />
          <LoadingText>Getting quiz questions ... {loadingProgress}%</LoadingText>
        </LoadingOverlay>
      )}
      <iframe
        src="https://kantankaquiz.netlify.app/"
        title="Kantanka Quiz"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling={isMobile ? "yes" : "no"}
        onLoad={handleIframeLoad}
      />
    </QuizContainer>
  );
};

const QuizContainer = styled.div<{ loaded: boolean; $isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  overflow: ${({ $isMobile }) => ($isMobile ? "auto" : "hidden")};
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    opacity: ${({ loaded }) => (loaded ? 1 : 0)};
    transition: opacity 0.5s ease;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;

    iframe {
      height: 150vh; // Make iframe taller to ensure content fits
      min-height: 100vh;
    }
  }

  @media (max-width: 480px) {
    iframe {
      height: 180vh; // Even taller for very small screens
    }
  }
`;

const LoadingOverlay = styled.div<{ loaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  z-index: 10;
  opacity: ${({ loaded }) => (loaded ? 0 : 1)};
  transition: opacity 0.5s ease;
  pointer-events: none;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  padding: 0 20px;
  text-align: center;
  color: ${theme.colors.text};
`;

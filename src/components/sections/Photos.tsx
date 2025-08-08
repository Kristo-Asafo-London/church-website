
import styled, { keyframes, css } from "styled-components";
import { theme } from "../../styles/theme";
import { shadowColors } from "../common/common";

// Sample data for the gallery images
const galleryImages = [
  { id: 1, src: "/gallery/photos/kantanka1.png", alt: "Space" },
  { id: 2, src: "/gallery/photos/kantanka2.png", alt: "Galaxy" },
  { id: 3, src: "/gallery/photos/kantanka3.png", alt: "Futuristic" },
  { id: 4, src: "/gallery/photos/kantanka4.png", alt: "Tech" },
  { id: 5, src: "/gallery/photos/kantanka5.png", alt: "Stars" },
  { id: 6, src: "/gallery/photos/kantanka6.png", alt: "Innovation" },
  { id: 7, src: "/gallery/photos/kantanka7.png", alt: "AI" },
];

// Gallery component
const FuturisticGallery = () => {
  const getRandomSize = (): "large" | "medium" | "small" => {
    const sizes: ("large" | "medium" | "small")[] = ["large", "medium", "small"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <Container>
      <SectionTitle>Gallery</SectionTitle>
      <GalleryContainer>
        {galleryImages.map((image) => (
          <GalleryItem key={image.id} size={getRandomSize()}>
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </GalleryContainer>
    </Container>
  );
};

export default FuturisticGallery;



const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: -4rem;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, ${shadowColors.join(", ")});
    z-index: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${theme.colors.text};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 1rem;

  position: relative;
  overflow: hidden;
`;

const GalleryItem = styled.div<{ size: "large" | "medium" | "small" }>`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease-in-out;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    animation-play-state: paused;
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 60%;
          height: 500px;
          @media (max-width: 768px) {
            width: 100%;
            height: 300px;
          }
        `;
      case "medium":
        return css`
          width: 45%;
          height: 350px;
          @media (max-width: 768px) {
            width: 100%;
            height: 250px;
          }
        `;
      case "small":
        return css`
          width: 30%;
          height: 200px;
          @media (max-width: 768px) {
            width: 100%;
            height: 200px;
          }
        `;
      default:
        return css`
          width: 35%;
          height: 250px;
          @media (max-width: 768px) {
            width: 100%;
            height: 200px;
          }
        `;
    }
  }}
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  animation: ${float} 6s ease-in-out infinite;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;
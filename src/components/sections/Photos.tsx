import styled, { keyframes } from "styled-components";
import { shadowColors } from "../common/common";
import { lighten } from "polished";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";

const galleryImages = [
  { id: 1, src: "/gallery/photos/kantanka1.png", alt: "Space" },
  { id: 2, src: "/gallery/photos/kantanka2.png", alt: "Galaxy" },
  { id: 3, src: "/gallery/photos/kantanka3.png", alt: "Futuristic" },
  { id: 4, src: "/gallery/photos/kantanka4.png", alt: "Tech" },
  { id: 5, src: "/gallery/photos/kantanka5.png", alt: "Stars" },
  { id: 6, src: "/gallery/photos/kantanka6.png", alt: "Innovation" },
  { id: 7, src: "/gallery/photos/kantanka7.png", alt: "AI" },
  { id: 9, src: "/gallery/photos/kantanka9.png", alt: "Technology" },
  { id: 10, src: "/gallery/photos/kantanka10.png", alt: "Design" },
  { id: 11, src: "/gallery/photos/kantanka11.png", alt: "Innovation" },
  { id: 12, src: "/gallery/photos/kantanka12.png", alt: "Futuristic" },
  { id: 13, src: "/gallery/photos/kantanka13.png", alt: "Space" },
  { id: 14, src: "/gallery/photos/kantanka14.png", alt: "Galaxy" },
  { id: 15, src: "/gallery/photos/kantanka15.png", alt: "Futuristic" },
  { id: 16, src: "/gallery/photos/kantanka16.png", alt: "Tech" },
];

type GalleryImage = (typeof galleryImages)[number];

function FuturisticGallery() {
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    const checkScreen = () => {
      setNumColumns(window.innerWidth <= 768 ? 2 : 3);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Create columns dynamically
  const columns: GalleryImage[][] = Array.from({ length: numColumns }, () => []);
  galleryImages.forEach((img, i) => {
    columns[i % numColumns].push(img);
  });

  return (
    <GalleryWrapper id="photos">
      <SectionTitle>Founder's Gallery</SectionTitle>
      <ColumnsWrapper>
        {columns.map((col, idx) => (
          <Column key={idx}>
            <ColumnInner speed={90 + idx * 10}>
              {[...col, ...col].map((img, i) => (
                <MasonryItem key={`${img.id}-${i}`}>
                  <img src={img.src} alt={img.alt} />
                </MasonryItem>
              ))}
            </ColumnInner>
          </Column>
        ))}
      </ColumnsWrapper>
    </GalleryWrapper>
  );
}

export default FuturisticGallery;

// Animation for smooth vertical movement
const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const GalleryWrapper = styled.div`
  margin: 0 auto;
  padding: 6rem ${theme.spacing.large};
  background: linear-gradient(135deg, ${lighten(0.45, theme.colors.light)} 0%, ${theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
  margin-top: -4rem;
  max-width: 1400px;
  max-height: 100vh;

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
  text-align: center;
  color: ${theme.colors.text};
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Column = styled.div`
  flex: 1;
  overflow: hidden;
`;

const ColumnInner = styled.div<{ speed: number }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${scrollUp} ${({ speed }) => speed}s linear infinite;
  animation-play-state: running;

  &:hover {
    animation-play-state: paused;
  }
`;

const MasonryItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  background: white;

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

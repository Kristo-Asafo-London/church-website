import styled from "styled-components";
import { theme } from "../../styles/theme";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: "1",
    src: "/trustees/admin.jpg",
    alt: "Beautiful landscape",
    title: "Mountain Sunrise",
    description: "Captured during our annual retreat in the Swiss Alps",
  },
  {
    id: "2",
    src: "/trustees/chair.jpg",
    alt: "Team meeting",
    title: "Strategy Session",
    description: "Our team planning the next phase of development",
  },
  {
    id: "3",
    src: "/trustees/organiser.jpg",
    alt: "Product showcase",
    title: "New Product Launch",
    description: "Introducing our latest innovation to the market",
  },
  {
    id: "4",
    src: "/trustees/member.jpg",
    alt: "Award ceremony",
    title: "Industry Recognition",
    description: "Receiving the Excellence in Design award for 2023",
  },
  {
    id: "5",
    src: "/trustees/admin.jpg",
    alt: "Community event",
    title: "Community Outreach",
    description: "Volunteering at the local children's hospital",
  },
];

const Gallery: React.FC<GalleryProps> = ({ images, title = "Gallery" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Only show the current image and its immediate neighbors
  const visibleImages = [(currentIndex - 1 + images.length) % images.length, currentIndex, (currentIndex + 1) % images.length].map(
    (index) => images[index]
  );

  return (
    <GalleryContainer>
      <GalleryTitle>{title}</GalleryTitle>
      <GalleryCarousel>
        <GalleryTrack>
          {visibleImages.map((image, i) => {
            const position = i === 0 ? "left" : i === 1 ? "center" : "right";
            return (
              <GalleryItem key={image.id} position={position}>
                <img src={image.src} alt={image.alt} />
              </GalleryItem>
            );
          })}
        </GalleryTrack>

        <NavButton onClick={prevImage} position="left" aria-label="Previous image">
          <FaChevronLeft />
        </NavButton>

        <NavButton onClick={nextImage} position="right" aria-label="Next image">
          <FaChevronRight />
        </NavButton>

        <ImageInfo visible={true}>
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </ImageInfo>
      </GalleryCarousel>
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.section`
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  max-width: 100vw;

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;

const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text};

  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const GalleryCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: relative;
  perspective: 1000px;
  max-width: 100%;
  
//   background: ${theme.colors.light};

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 400px;
  }
`;

const GalleryTrack = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  position: relative;
`;

const GalleryItem = styled.div<{ position: "left" | "center" | "right" }>`
  position: absolute;
  width: ${(props) => (props.position === "center" ? "250px" : "150px")};
  height: ${(props) => (props.position === "center" ? "250px" : "150px")};
  transition: all 0.5s ease;
  filter: ${(props) => (props.position !== "center" ? "blur(1px)" : "none")};
  opacity: ${(props) => (props.position !== "center" ? "0.8" : "1")};
  transform: ${(props) =>
    props.position === "left"
      ? "translateX(-100%) rotateY(20deg)"
      : props.position === "right"
      ? "translateX(100%) rotateY(-20deg)"
      : "translateX(0) rotateY(0)"};
  z-index: ${(props) => (props.position === "center" ? "2" : "1")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    width: ${(props) => (props.position === "center" ? "350px" : "250px")};
    height: ${(props) => (props.position === "center" ? "350px" : "250px")};
    transform: ${(props) =>
      props.position === "left"
        ? "translateX(-150%) rotateY(20deg)"
        : props.position === "right"
        ? "translateX(150%) rotateY(-20deg)"
        : "translateX(0) rotateY(0)"};
  }
`;

const NavButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  ${(props) => (props.position === "left" ? "left: 5px;" : "right: 5px;")}

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ImageInfo = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease;
  padding: 0 1rem;
  margin-top: 1000px; // Added extra margin for better spacing

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.text};
  }

  p {
    color: ${theme.colors.text};
    max-width: 500px;
    margin: 0 auto;
    font-size: 0.9rem;
    line-height: 1.4; // Added for better readability
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    bottom: -80px; // Adjusted for desktop as well

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    bottom: -70px; // Further adjustment for larger screens
  }
`;
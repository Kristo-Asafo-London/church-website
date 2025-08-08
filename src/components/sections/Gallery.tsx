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

export const achievementGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/emeritus.png",
    alt: "Emeritus Status",
    title: "Emeritus Professor Award",
    description: "Apostle Dr. Kwadwo Safo Kantanka was conferred the honorary title of Professor Emeritus by Alfred Nobel University in Ukraine.",
  },
  {
    id: "2",
    src: "/gallery/bestcar.png",
    alt: "Innovative Automobile",
    title: "Best Automobile Award",
    description: "Kantanka received the prestigious award for Best Automobile, recognizing innovation and excellence in engineering.",
  },
  {
    id: "3",
    src: "/gallery/assas.png",
    alt: "Educational Institutions",
    title: "Educational Institutions",
    description: "STEM-focused institution nurturing young talents in Ghana and Africa, providing quality education in sciences and technology.",
  },
  {
    id: "4",
    src: "/gallery/medicine.png",
    alt: "Award ceremony",
    title: "Health and Herbal Discoveries",
    description: "Receiving the Excellence in Design award for 2023",
  },
  {
    id: "5",
    src: "/gallery/donation.png",
    alt: "Donation To Muslim Community",
    title: "Donation To Muslim Community",
    description: "Dr. Safo Kantanka donates GH¢80,000, and other items to National Chief Imam",
  },
  {
    id: "6",
    src: "/gallery/donation2.png",
    alt: "Donation To Children's Home",
    title: "Donation To Children's Home",
    description: "Apostle Dr. Ing. Kwadwo Safo Donates Numerous Items To Osu Children's Home Worth GH₵200k",
  },
];

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = [
    (currentIndex - 1 + images.length) % images.length,
    currentIndex,
    (currentIndex + 1) % images.length,
  ].map((index) => images[index]);

  return (
    <GalleryContainer id="gallery">
      <GalleryTitle>Notable Achievements</GalleryTitle>
      <GalleryContent>
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
        </GalleryCarousel>
        <ImageInfo>
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </ImageInfo>
      </GalleryContent>
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1250px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GalleryCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: relative;
  width: 100%;
  max-width: 1200px;

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 400px;
  }
`;

const GalleryTrack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: ${theme.colors.light};
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
    background: rgba(7, 11, 92, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: white;
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

const ImageInfo = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  width: 100%;
  max-width: 500px;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.text};
  }

  p {
    color: ${theme.colors.dark};
    font-size: 0.9rem;
    margin: 0 auto;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

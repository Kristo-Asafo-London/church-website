import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlay, FaImage, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { theme } from "../../styles/theme";
import { lighten } from "polished";
import { shadowColors } from "../common/common";

interface DonationItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  caption: string;
  eventType: string;
}

const DonationItems: DonationItem[] = [
  {
    id: 2,
    type: "image",
    url: "donations/barking_army.jpg",
    caption: "Donating food items and cheque to London Salvation Army and Barking Food Bank As birthday celebration of our Founder in 2021",
    eventType: "London Salvation Army",
  },
  {
    id: 5,
    type: "image",
    url: "donations/barking_army3.jpg",
    caption: "Donating food items and cheque to London Salvation Army and Barking Food Bank As birthday celebration of our Founder in 2021",
    eventType: "London Salvation Army",
  },
  {
    id: 6,
    type: "image",
    url: "donations/barking_army4.jpg",
    caption: "Donating food items and cheque to London Salvation Army and Barking Food Bank As birthday celebration of our Founder in 2021",
    eventType: "Food and Money Donation",
  },
  {
    id: 7,
    type: "image",
    url: "donations/barking_army5.jpg",
    caption: "Donating food items and cheque to London Salvation Army and Barking Food Bank As birthday celebration of our Founder in 2021",
    eventType: "London Salvation Army",
  },
  {
    id: 8,
    type: "image",
    url: "donations/hope_family.jpg",
    caption: "Donating food items and cheque to Hope Family Centre As birthday celebration of our Founder in 2021",
    eventType: "Hope Family Centre",
  },
  {
    id: 9,
    type: "image",
    url: "donations/hope_family2.jpg",
    caption: "Donating food items and cheque to Hope Family Centre As birthday celebration of our Founder in 2021",
    eventType: "Hope Family Centre",
  },
  {
    id: 1,
    type: "video",
    url: "/videos/tower_bridge.mp4",
    thumbnail: "donations/nananti.jpg",
    caption: "Celebrating the 73rd Birthday of the Founder and Leader at Tower Bridge, after a successful donation event to the Hope Family Trust.",
    eventType: "Birthday Celebration",
  },
];

// Animation keyframes
const glow = keyframes`
  0% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 20px currentColor; }
  100% { box-shadow: 0 0 5px currentColor; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const groupImages = (items: DonationItem[], size: number) => {
  const imageItems = items.filter((item) => item.type === "image");
  const grouped = [];

  for (let i = 0; i < imageItems.length; i += size) {
    grouped.push(imageItems.slice(i, i + size));
  }

  return grouped;
};

const DonationSection = () => {
  const [selectedItem, setSelectedItem] = useState<DonationItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number[]>([]);
  const [cardColors, setCardColors] = useState<{ [key: number]: string }>({});
  const [currentModalGroup, setCurrentModalGroup] = useState<DonationItem[] | null>(null);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const groupedImages = groupImages(DonationItems, 4);

  useEffect(() => {
    const colors: { [key: number]: string } = {};
    DonationItems.forEach((item) => {
      colors[item.id] = shadowColors[Math.floor(Math.random() * shadowColors.length)];
    });
    setCardColors(colors);

    if (currentSlideIndex.length !== groupedImages.length) {
      setCurrentSlideIndex(Array(groupedImages.length).fill(0));
    }
  }, []);

  const handleNextSlide = (groupIndex: number) => {
    setCurrentSlideIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[groupIndex] = (newIndexes[groupIndex] + 1) % groupedImages[groupIndex].length;
      return newIndexes;
    });
  };

  const handlePrevSlide = (groupIndex: number) => {
    setCurrentSlideIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[groupIndex] = (newIndexes[groupIndex] - 1 + groupedImages[groupIndex].length) % groupedImages[groupIndex].length;
      return newIndexes;
    });
  };

  const handleModalOpen = (item: DonationItem) => {
    setSelectedItem(item);

    if (item.type === "image") {
      const group = groupedImages.find((group) => group.some((img) => img.id === item.id));

      if (group) {
        setCurrentModalGroup(group);
        setCurrentModalIndex(group.findIndex((img) => img.id === item.id));
      }
    } else {
      setCurrentModalGroup(null);
    }
  };

  const navigateModalImage = (direction: number) => {
    if (!currentModalGroup) return;

    setCurrentModalIndex((prev) => {
      const newIndex = (prev + direction + currentModalGroup.length) % currentModalGroup.length;
      setSelectedItem(currentModalGroup[newIndex]);
      return newIndex;
    });
  };

  return (
    <DonationContainer>
      <SectionTitle>Our Donations</SectionTitle>
      <DonationDescription>
        As part of our commitment to giving back, we host and participate in various events that support our community. From fundraising galas to volunteer days, our team is dedicated to making a positive impact through our work.
      </DonationDescription>

      <DonationGrid>
        {/* Video cards */}
        {DonationItems.filter((item) => item.type === "video").map((item, index) => (
          <motion.div
            key={`video-${item.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <DonationCard $color={cardColors[item.id] || theme.colors.primary} onClick={() => handleModalOpen(item)}>
              <VideoThumbnail>
                <img src={item.thumbnail || item.url} alt={item.caption} />
                <PlayButton>
                  <FaPlay />
                </PlayButton>
              </VideoThumbnail>
              <DonationContent>
                <EventType>{item.eventType}</EventType>
                <DonationCaption>{item.caption}</DonationCaption>
                <MediaType>
                  <FaPlay /> Video
                </MediaType>
              </DonationContent>
            </DonationCard>
          </motion.div>
        ))}

        {/* Image sliders */}
        {groupedImages.map((imageGroup, groupIndex) => {
          const currentIndex = currentSlideIndex[groupIndex] || 0;
          const currentImage = imageGroup[currentIndex];

          return (
            <motion.div
              key={`image-group-${groupIndex}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}>
              <DonationCard $color={cardColors[currentImage.id] || theme.colors.primary}>
                <ImageSliderContainer>
                  <SliderImage src={currentImage.url} alt={currentImage.caption} onClick={() => handleModalOpen(currentImage)} />
                  {imageGroup.length > 1 && (
                    <>
                      <SliderButton
                        position="left"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevSlide(groupIndex);
                        }}>
                        <FaChevronLeft />
                      </SliderButton>
                      <SliderButton
                        position="right"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextSlide(groupIndex);
                        }}>
                        <FaChevronRight />
                      </SliderButton>
                      <SliderDots>
                        {imageGroup.map((_, idx) => (
                          <SliderDot
                            key={idx}
                            $active={idx === currentIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlideIndex((prev) => {
                                const newIndexes = [...prev];
                                newIndexes[groupIndex] = idx;
                                return newIndexes;
                              });
                            }}
                          />
                        ))}
                      </SliderDots>
                    </>
                  )}
                </ImageSliderContainer>
                <DonationContent>
                  <EventType>{currentImage.eventType}</EventType>
                  <DonationCaption>
                    {currentImage.caption} ({currentIndex + 1}/{imageGroup.length})
                  </DonationCaption>
                  <MediaType>
                    <FaImage /> Photo Gallery
                  </MediaType>
                </DonationContent>
              </DonationCard>
            </motion.div>
          );
        })}
      </DonationGrid>

      {/* Modal for expanded view */}
      <AnimatePresence>
        {selectedItem && (
          <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)}>
            <ModalContent initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedItem(null)}>
                <FaTimes />
              </CloseButton>

              {selectedItem.type === "video" ? (
                <VideoWrapper>
                  <video controls autoPlay>
                    <source src={selectedItem.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </VideoWrapper>
              ) : (
                <>
                  <ModalNavButton
                    position="left"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateModalImage(-1);
                    }}>
                    <FaChevronLeft />
                  </ModalNavButton>

                  <ModalNavButton
                    position="right"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateModalImage(1);
                    }}>
                    <FaChevronRight />
                  </ModalNavButton>

                  <ExpandedImage src={selectedItem.url} alt={selectedItem.caption} />
                </>
              )}

              <ModalCaption>
                <h3>{selectedItem.eventType}</h3>
                <p>{selectedItem.caption}</p>
                {selectedItem.type === "image" && currentModalGroup && (
                  <p>
                    Image {currentModalIndex + 1} of {currentModalGroup.length}
                  </p>
                )}
              </ModalCaption>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </DonationContainer>
  );
};

// Styled components
const DonationContainer = styled.section`
  margin: 0 auto;
  padding: 6rem ${theme.spacing.large};
  background: linear-gradient(135deg, ${lighten(0.45, theme.colors.light)} 0%, ${theme.colors.white} 100%);
  position: relative;
  overflow: hidden;

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
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${theme.colors.text};
  position: relative;

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

const DonationDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const DonationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

interface DonationCardProps {
  $color: string;
}

const DonationCard = styled.div<DonationCardProps>`
  background: ${theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${({ $color }) => lighten(0.3, $color)};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 0 0 1px ${({ $color }) => $color} inset, 0 0 10px ${({ $color }) => $color};
  animation: ${float} 6s ease-in-out infinite, ${glow} 4s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 2px ${({ $color }) => $color} inset, 0 0 20px ${({ $color }) => $color};
    animation: none;
  }

`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  filter: brightness(0.8);

    &:hover {
        filter: brightness(1);
    }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${DonationCard}:hover & {
    transform: scale(1.05);
  }
`;

interface SliderButtonProps {
  position: "left" | "right";
}

const SliderButton = styled.button<SliderButtonProps>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: 1rem" : "right: 1rem")};
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

interface SliderDotProps {
  $active: boolean;
}

const SliderDot = styled.div<SliderDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? theme.colors.primary : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    transform: scale(1.2);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  filter: brightness(0.8);

  &:hover {
    filter: brightness(1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${DonationCard}:hover & img {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 1.8rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;

  ${DonationCard}:hover & {
    background: ${theme.colors.white};
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const DonationContent = styled.div`
  padding: 1.8rem;
  position: relative;
  z-index: 2;
`;

const EventType = styled.span`
  display: inline-block;
  background: ${theme.colors.light};
  color: ${theme.colors.white};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const DonationCaption = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.text};
  line-height: 1.4;
  font-weight: 600;
`;

const MediaType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.textLight};
  font-size: 0.95rem;
  font-weight: 500;

  svg {
    color: ${theme.colors.light};
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.white};
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

interface ModalNavButtonProps {
  position: "left" | "right";
}

const ModalNavButton = styled.button<ModalNavButtonProps>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: 2rem" : "right: 2rem")};
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    transform: scale(1.1);
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const ExpandedImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
`;

const ModalCaption = styled.div`
  padding: 2rem;
  text-align: center;

  h3 {
    color: ${theme.colors.text};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

export default DonationSection;

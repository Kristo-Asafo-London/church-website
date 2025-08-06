import styled from 'styled-components';
import { FaChurch, FaLightbulb, FaCogs, FaHandsHelping } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { lighten } from 'polished';
import { shadowColors } from "../common/common";

export const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <AboutHeader>
        <h1>Kristo Asafo, London</h1>
        <p className="subtitle">
          Kristo Asafo Mission, London Branch is progressive organization founded by Apostle Dr. Eng. Kwadwo Safo Kantanka, and registered under the
          charity commission England and Wales with number 1151246. We are dedicated to spiritual growth, technological innovation, and community
          development.
        </p>
      </AboutHeader>

      <AboutContent>
        <ProfileImage>
          <img src="/images/kantanka22.png" alt="Apostle Dr. Eng. Kwadwo Safo Kantanka" />
          <ImageCaption>Founder: Apostle Dr. Eng. Kwadwo Safo Kantanka</ImageCaption>
        </ProfileImage>

        <BioContent>
          <h2>Our Mission & Vision</h2>
          <p>
            Kristo Asafo (Christ Reformed Church) was established to promote Christianity through practical demonstration of God's power in science
            and technology. Under the visionary leadership of Apostle Dr. Ing. Kwadwo Safo Kantanka, we combine spiritual principles with
            technological advancement to transform lives and communities.
          </p>
          <p>
            Our unique approach bridges the gap between faith and innovation, demonstrating that spirituality and scientific progress can coexist
            harmoniously for the betterment of humanity.
          </p>

          <ExpertiseSection>
            <h3>Our Core Principles</h3>

            {[
              {
                icon: <FaChurch />,
                title: "Spiritual Foundation",
                desc: "Rooted in Christian principles, we emphasize moral uprightness, discipline, and the practical application of faith in daily life.",
              },
              {
                icon: <FaLightbulb />,
                title: "Technological Innovation",
                desc: "Pioneering African technological solutions through Kantanka Automobiles and other inventions that demonstrate indigenous engineering excellence.",
              },
              {
                icon: <FaCogs />,
                title: "Self-Reliance",
                desc: "Promoting economic independence through vocational training, agricultural development, and local manufacturing initiatives.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Community Development",
                desc: "Implementing programs that address education, healthcare, and infrastructure needs in underserved communities across Ghana.",
              },
            ].map(({ icon, title, desc }) => (
              <ExpertiseItem key={title}>
                <IconContainer>{icon}</IconContainer>
                <div className="content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </ExpertiseItem>
            ))}
          </ExpertiseSection>
        </BioContent>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 6rem ${theme.spacing.large};
  background: linear-gradient(135deg, ${lighten(0.45, theme.colors.light)} 0%, ${theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
  max-width: 1200px;

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

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.8rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.medium};
    font-weight: 700;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: ${theme.colors.light};
      border-radius: 2px;
    }
  }

  p.subtitle {
    font-size: 1.25rem;
    color: ${theme.colors.text};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ImageCaption = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: ${theme.colors.textLight};
`;

const BioContent = styled.div`
  h2 {
    font-size: 2rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.large};
    font-weight: 600;
  }

  p {
    margin-bottom: ${theme.spacing.large};
    line-height: 1.7;
    color: ${theme.colors.text};
  }
`;

const ExpertiseSection = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing.xlarge};
    color: ${theme.colors.text};
    position: relative;
    padding-bottom: ${theme.spacing.small};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${theme.colors.light};
    }
  }
`;

const IconContainer = styled.div`
  background: ${theme.colors.white};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 1.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
`;

const ExpertiseItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.large};
  margin-bottom: ${theme.spacing.xlarge};

  .content {
    h4 {
      font-size: 1.25rem;
      margin-bottom: ${theme.spacing.small};
      color: ${theme.colors.textLight};
    }

    p {
      margin-bottom: 0;
      color: ${theme.colors.text};
    }
  }
`;

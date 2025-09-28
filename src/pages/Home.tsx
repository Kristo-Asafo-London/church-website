import styled from 'styled-components';

import { ServicesPreview } from '../components/sections/ServicesPreview';
import { Hero } from '../components/sections/Hero';
import { lighten } from 'polished';
import { theme } from '../styles/theme';
import DonationSection from "../components/sections/Donations";
import { AboutUs } from "../components/sections/AboutUs";
import Trustees, { trusteesData } from "../components/sections/Trustee";
import Gallery, { achievementGallery } from "../components/sections/Gallery";
import { ContactUs } from "../components/sections/ContactUs";
import { Music } from "../components/sections/Music";
import FuturisticGallery from '../components/sections/Photos';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: ${lighten(0.45, theme.colors.light)};
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ServicesPreview />
      <DonationSection />
      <AboutUs />
      <Gallery images={achievementGallery} />
      <Trustees trustees={trusteesData} />
      <ContactUs />
      <Music />
      <FuturisticGallery /> 
    </HomeContainer>
  );
};
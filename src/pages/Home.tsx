import styled from 'styled-components';
import { CTA } from '../components/sections/CTA';
import { Testimonials } from './Testimonials';
import { ServicesPreview } from '../components/sections/ServicesPreview';
import { Hero } from '../components/sections/Hero';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ServicesPreview/>
      <Testimonials />
      <CTA />
    </HomeContainer>
  );
};
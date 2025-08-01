import styled from 'styled-components';

import { ServicesPreview } from '../components/sections/ServicesPreview';
import { Hero } from '../components/sections/Hero';
import { lighten } from 'polished';
import { theme } from '../styles/theme';

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
      <ServicesPreview/>
    </HomeContainer>
  );
};
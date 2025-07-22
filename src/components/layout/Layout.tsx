import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0.1rem 0;
`;

// Define props interface if you need to pass any props in the future
interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children ? children : <Outlet />}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};
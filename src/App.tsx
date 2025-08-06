import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

import { GlobalStyle } from "./styles/theme";
import ScrollToTopButton from "./components/common/ScrollToTop";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
      <ScrollToTopButton />
    </>
  );
};
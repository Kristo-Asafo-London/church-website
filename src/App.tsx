import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Testimonials } from './pages/Testimonials';
import { HireMe } from './pages/HireMe';
import { GlobalStyle } from './styles/theme';
import { AboutUs } from './components/sections/AboutUs';
import { ContactUs } from './components/sections/ContactUs';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactUs />} />
            
          </Routes>
        </Layout>
      </Router>
    </>
  );
};
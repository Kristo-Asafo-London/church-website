import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/theme';
import { AboutUs } from './components/sections/AboutUs';
import { ContactUs } from './components/sections/ContactUs';
import { Music } from './components/sections/Music';
import ScrollToTopButton from './components/common/ScrollToTop';
import DonationSection from "./components/sections/Donations";
import Trustees, { trusteesData } from "./components/sections/Trustee";
import Gallery, { galleryData } from "./components/sections/Gallery";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/donations" element={<DonationSection />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/music" element={<Music />} />
            <Route path="*" element={<Home />} />
            <Route path="/trustees" element={<Trustees trustees={trusteesData} />} />
            <Route path="/gallery" element={<Gallery images={galleryData} title="Gallery" />} />
          </Routes>
        </Layout>
      </Router>
      <ScrollToTopButton />
    </>
  );
};
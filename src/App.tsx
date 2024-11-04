import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Cta } from './components/Cta';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
// import { Newsletter } from './components/Newsletter';
// import { Pricing } from './components/Pricing';
import { ScrollToTop } from './components/ScrollToTop';
// import { Testimonials } from './components/Testimonials';
import AboutPage from './components/BuboPage';
import './App.css';
import ScrollToHash from './components/ScrollToHash'; // Import ScrollToHash
import KumbuMailing from './mail/page';

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Cta />
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
    </>
  );
}

// Wrapper component to handle the conditional rendering of the Navbar
function Layout() {
  const location = useLocation();

  // Check if the current path is "/mail"
  const showNavbar = location.pathname !== '/mail';

  return (
    <>
      {showNavbar && <Navbar />}
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mail" element={<KumbuMailing />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

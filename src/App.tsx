import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Cta } from './components/Cta';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import ScrollToHash from './components/ScrollToHash'; // Import ScrollToHash
import AboutPage from './components/BuboPage';
import KumbuMailing from './mail/page';
import './App.css';
import { GoogleAnalytics } from '@next/third-parties/google'

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

// Layout component for shared structure (Navbar, Footer, etc.)
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  // Check if the current path is "/mail" to conditionally hide Navbar
  const showNavbar = location.pathname !== '/mail';

  return (
    <>
      {showNavbar && <Navbar />} {/* Show Navbar on all pages except "/mail" */}
      <ScrollToTop />
      <ScrollToHash />
      {children}
      <GoogleAnalytics gaId="G-PTZBJFLGJH" /> {/* Replace with your actual GA measurement ID */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail" element={<KumbuMailing />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <ScrollToHash /> {/* Add ScrollToHash */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
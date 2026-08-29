import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ComingSoon from './components/ComingSoon';
import './index.css';

// A component to hold the main homepage content
const Home = () => {
  return (
    <>
      <Hero />
      <div className="marquee-container">
        <div className="marquee-content">
          EFFORTLESSLY COOL • PRE-ORDER OPEN • KIGALI, RWANDA • NO REFUND • EFFORTLESSLY COOL • PRE-ORDER OPEN • KIGALI, RWANDA • NO REFUND • EFFORTLESSLY COOL • PRE-ORDER OPEN • KIGALI, RWANDA • NO REFUND •
        </div>
      </div>
      <Lookbook />
    </>
  );
};

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} style={{ animation: 'pageFadeIn 0.4s ease-out forwards' }}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="/login" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-container" style={{ border: '2px solid var(--border-color)', margin: '0 auto', maxWidth: '1440px', backgroundColor: 'var(--bg-color)', position: 'relative' }}>
        <Preloader />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

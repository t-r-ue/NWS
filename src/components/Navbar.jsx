import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      borderBottom: '2px solid #111',
      backgroundColor: '#f4f4f4', 
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Desktop Left Nav */}
      <div className="nav-left desktop-only" style={{ flex: 1, display: 'flex', gap: '2rem' }}>
        <Link to="/shop" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Shop</Link>
        <Link to="/about" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>About</Link>
      </div>
      
      {/* Centered Logo */}
      <div className="nav-center" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Link to="/" style={{ display: 'block' }}>
          <img 
            src={`${import.meta.env.BASE_URL}logo-actual.png`} 
            alt="Nu Wave Space" 
            style={{ 
              height: '40px',
              width: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }} 
          />
        </Link>
      </div>

      {/* Desktop Right Nav */}
      <div className="nav-right desktop-only" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
        <Link to="/community" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Community</Link>
        <Link to="/login" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Login</Link>
        <Link to="/cart" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Cart (0)</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(true)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '2.5rem',
          cursor: 'pointer',
          color: '#111',
          padding: 0,
          lineHeight: 1
        }}
      >
        ☰
      </button>

      {/* Full Screen Overlay Menu (Mobile Only) */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100dvh',
          backgroundColor: '#f4c430', // Hazard Yellow
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'slideInRight 0.3s cubic-bezier(0.85, 0, 0.15, 1) forwards'
        }}>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              fontSize: '4rem',
              fontWeight: 900,
              cursor: 'pointer',
              color: '#111',
              padding: 0,
              lineHeight: 1
            }}
          >
            ×
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}>
            <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/community" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>COMMUNITY</Link>
            <Link to="/login" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
            <Link to="/cart" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CART (0)</Link>
          </div>
          
          {/* Brutalist Marquee Footer inside Menu */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            width: '120%',
            height: '40px',
            backgroundColor: '#111',
            transform: 'rotate(-5deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f4c430',
            fontWeight: 900,
            fontSize: '1.2rem',
            letterSpacing: '0.2em',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {Array(10).fill('NO RULES ONLY VIBRATIONS • ').join('')}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

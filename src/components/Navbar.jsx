import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      <div className="nav-left" style={{ flex: 1, display: 'flex', gap: '2rem' }}>
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

      <div className="nav-right" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
        <Link to="/community" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Community</Link>
        <Link to="/login" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Login</Link>
        <Link to="/cart" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>Cart (0)</Link>
      </div>
    </nav>
  );
};

export default Navbar;

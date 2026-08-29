import React, { useState, useEffect } from 'react';

const heroImages = [
  '/owner.jpg', // Owner is now the very first image you see
  '/Screenshot 2026-08-29 005810.png',
  '/730331651_18009753974920113_8984908330016309472_n.jpg',
  '/735150993_18009753962920113_4032231420682941309_n.jpg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="border-b" 
      style={{ 
        position: 'relative',
        height: 'calc(100vh - 75px)', // Fits perfectly in viewport
        backgroundColor: '#1a1a1a', 
        color: '#f4f4f4',
        overflow: 'hidden'
      }}
    >
      <div className="hero-section" style={{ 
        display: 'flex', 
        height: '100%', 
        maxWidth: '1300px', 
        margin: '0 auto',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 5
      }}>
        
        {/* Left Column (Text) */}
        <div className="hero-content" style={{ flex: '1', zIndex: 10 }}>
          
          {/* Brutalist Hard-Shadow Box for Mantra */}
          <div className="hero-mantra-box" style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '1.5rem 2.5rem',
            marginLeft: '-2rem', 
            marginRight: '-4rem', 
            marginBottom: '3rem',
            border: '2px solid #111',
            boxShadow: '12px 12px 0px #f4c430', 
            position: 'relative'
          }}>
            <h1 className="hero-title" style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', 
              fontWeight: 900, 
              lineHeight: 0.95, 
              textTransform: 'uppercase', 
              letterSpacing: '-0.03em',
              margin: 0,
              color: '#111' 
            }}>
              NWS: NO RULES.<br/>ONLY VIBRATIONS.
            </h1>
          </div>

          <p className="hero-subtitle" style={{ 
            fontSize: '1.1rem', 
            fontWeight: 600, 
            marginBottom: '3rem', 
            maxWidth: '400px',
            lineHeight: 1.4,
            color: '#f4f4f4' 
          }}>
            Raw aesthetics, independent vibes. Straight from Kigali's streets. Shop the limited drop before it's gone.
          </p>
          
          {/* Brutalist Pre-Order Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button className="btn-solid" style={{ 
              fontSize: '1.2rem', 
              fontWeight: 900,
              padding: '1rem 2.5rem', 
              border: '2px solid #111', 
              backgroundColor: '#f4c430', 
              color: '#111',
              boxShadow: '8px 8px 0px #e63946', 
              transition: 'transform 0.1s ease',
              cursor: 'pointer'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'translate(4px, 4px)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}
            >
              PRE-ORDER NOW
            </button>
            
            {/* The LTD DROP circle element */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid #e63946',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e63946',
              fontWeight: 900,
              fontSize: '0.9rem',
              lineHeight: 1,
              transform: 'rotate(-10deg)',
              fontFamily: 'cursive' 
            }}>
              <span>LTD</span>
              <span>DROP</span>
              <span>01</span>
            </div>
          </div>
        </div>

        {/* Right Column (Main Rotating Image) */}
        <div className="hero-image-container" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', height: '100%' }}>
          <div className="hero-image-outer-wrapper" style={{ 
            height: '95%', 
            width: '100%', 
            maxWidth: '650px', 
            padding: '1rem 0', 
            position: 'relative',
            zIndex: 5 
          }}>
            <div className="hero-image-inner-wrapper" style={{ 
              position: 'relative',
              width: '100%',
              height: '100%',
              border: '2px solid #111',
              boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' 
            }}>
              {heroImages.map((src, index) => (
                <img 
                  key={index}
                  src={`${import.meta.env.BASE_URL}${src.startsWith('/') ? src.slice(1) : src}`} 
                  alt="Nuwave Space Hero" 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: currentImageIndex === index ? 2 : 1
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;

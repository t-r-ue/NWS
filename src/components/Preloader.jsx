import React, { useState, useEffect } from 'react';

const preloaderImages = [
  '/owner.jpg',
  '/Screenshot 2026-08-29 005810.png',
  '/636641753_17992506488920113_3278892084440527923_n.jpg',
  '/655642888_17996738021920113_5676860781224106845_n.jpg',
  '/656750248_17996738006920113_17740674634963958_n.jpg',
  '/657940054_17997793169920113_9108503276882617958_n.jpg'
];

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hyper-speed rotation
    const rotateInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % preloaderImages.length);
    }, 120); // 120ms for very fast but visible rotation

    // Remove preloader after 2.5 seconds
    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearInterval(rotateInterval);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#111',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'slideUp 0.8s cubic-bezier(0.85, 0, 0.15, 1) 2.5s forwards', // Slides up out of view
    }}>
      
      {/* Small Disk Circle for Images */}
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #f4c430',
        boxShadow: '0 0 30px rgba(244, 196, 48, 0.4)',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        {preloaderImages.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt="preloader frame" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: currentIndex === idx ? 'block' : 'none'
            }}
          />
        ))}
      </div>
      
      {/* Edgy Status Loading Text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <h2 style={{
          color: '#f4f4f4',
          fontSize: '1.5rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          margin: 0
        }}>
          ACCESSING DROP
        </h2>
        
        {/* Simple loading bar animation */}
        <div style={{ width: '200px', height: '4px', backgroundColor: '#333', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: '#f4c430',
            animation: 'loadBar 2.2s cubic-bezier(0.85, 0, 0.15, 1) forwards'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          to {
            transform: translateY(-100%);
          }
        }
        @keyframes loadBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

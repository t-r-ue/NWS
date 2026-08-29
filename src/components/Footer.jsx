import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#050505', // True black to drop down from the #1a1a1a lookbook
      color: '#f4f4f4', 
      overflow: 'hidden' 
    }}>
      {/* Visual Separator: Streetwear Warning Tape Marquee */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#f4c430', 
        color: '#111', 
        padding: '0.5rem 0', 
        fontWeight: 900, 
        textTransform: 'uppercase',
        borderBottom: '4px solid #111',
        borderTop: '4px solid #111',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Simple CSS marquee without needing extra libraries */}
        <div style={{ animation: 'scroll 20s linear infinite', display: 'flex', gap: '2rem' }}>
          {Array(10).fill('NO RULES. ONLY VIBRATIONS ✦ NU WAVE SPACE ✦ ').map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <div className="footer-grid" style={{ 
        maxWidth: '1200px', 
        margin: '4rem auto 1rem auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '3rem',
        padding: '0 2rem'
      }}>
        
        {/* Block 1: Contact / Info (Sticky Note Style) */}
        <div style={{ 
          backgroundColor: '#f4f4f4', 
          color: '#111', 
          padding: '1.5rem', 
          border: '2px solid #111', 
          boxShadow: '6px 6px 0px #f4c430',
          transform: 'rotate(-3deg) translateY(1.5rem)' // Placed by hand look
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>
            Holla At Us
          </h3>
          <p style={{ fontWeight: 900, fontSize: '0.9rem', margin: '0 0 0.5rem 0', color: '#666' }}>WHATSAPP / CALL:</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 1.5rem 0' }}>0786205848 <br/> 0793853463</p>
          <p style={{ fontWeight: 900, fontSize: '1rem', margin: '0', textTransform: 'uppercase' }}>Kigali - Rwanda</p>
        </div>

        {/* Block 2: Social / Instagram (Sticky Note Style) */}
        <div style={{ 
          backgroundColor: '#f4f4f4', 
          color: '#111', 
          padding: '1.5rem', 
          border: '2px solid #111', 
          boxShadow: '6px 6px 0px #e63946', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          transform: 'rotate(4deg) translateY(-1rem)' // Placed by hand look
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>
            Join the Wave
          </h3>
          <a href="https://instagram.com/nuwave_space" target="_blank" rel="noreferrer" style={{ 
            fontSize: '1.4rem', 
            fontWeight: 900, 
            textDecoration: 'none', 
            color: '#111', 
            display: 'inline-block', 
            marginBottom: '0.5rem',
            borderBottom: '3px solid #e63946'
          }}>
            @nuwave_space
          </a>
          <p style={{ fontWeight: 800, fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>Effortlessly cool.</p>
        </div>

        {/* Block 3: Policy / Warning Sticker */}
        <div style={{ 
          backgroundColor: '#f4c430', 
          color: '#111', 
          padding: '1.5rem', 
          border: '2px solid #111', 
          boxShadow: '6px 6px 0px #111', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          transform: 'rotate(-5deg) translateY(0.5rem)' // Placed by hand look
        }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 0.5rem 0', color: '#e63946', textShadow: '1px 1px 0px #111' }}>
            NOTICE
          </h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 900, margin: '0', borderBottom: '2px solid #111', paddingBottom: '0.5rem' }}>
            ONLINE &lt;&gt; NO REFUND
          </p>
          <p style={{ fontSize: '1.1rem', fontWeight: 900, margin: '1rem 0 0 0', backgroundColor: '#e63946', color: '#f4f4f4', padding: '0.3rem 0.8rem', border: '2px solid #111' }}>
            PRE-ORDER OPEN ❗
          </p>
        </div>

      </div>

      {/* Massive Marquee/Footer Bottom */}
      <div style={{ marginTop: '3rem', borderTop: '2px solid #333', paddingTop: '1.5rem', textAlign: 'center' }}>
        <h1 className="footer-marquee-text" style={{ 
          fontSize: 'clamp(3.5rem, 10vw, 10rem)', 
          fontWeight: 900, 
          margin: 0, 
          color: '#050505', // Match the new background
          textShadow: '-1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333', 
          lineHeight: 0.85,
          letterSpacing: '-0.05em'
        }}>
          NWS: NO RULES
        </h1>
        <p style={{ color: '#555', marginTop: '1rem', fontWeight: 600, fontSize: '0.8rem' }}>
          © 2026 Nu Wave Space. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

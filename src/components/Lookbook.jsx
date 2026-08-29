import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Get You Tee', price: '18K RWF', mainImg: '/632607218_17992506497920113_7495431679782247317_n.jpg' },
  { id: 2, name: 'Get You Tee (Worn)', price: '18K RWF', mainImg: '/636641753_17992506488920113_3278892084440527923_n.jpg' },
  { id: 3, name: 'Progress Tee', price: '18K RWF', mainImg: '/655642888_17996738021920113_5676860781224106845_n.jpg' },
  { id: 4, name: 'Progress Tee (Worn)', price: '18K RWF', mainImg: '/656417724_17996737985920113_2187089452455198975_n.jpg' },
  { id: 5, name: 'Blend Tee', price: '18K RWF', mainImg: '/656750248_17996738006920113_17740674634963958_n.jpg' },
  { id: 6, name: 'Blend Tee (Worn)', price: '18K RWF', mainImg: '/657338416_17996737994920113_2017476960654955216_n.jpg' },
  { id: 7, name: 'Graphic Tee', price: '18K RWF', mainImg: '/657444809_17996738012920113_2279165896688950452_n.jpg' },
  { id: 8, name: 'Graphic Tee (Worn)', price: '18K RWF', mainImg: '/657484240_17997793172920113_6618895698255734771_n.jpg' },
  { id: 9, name: 'Classic Tee', price: '18K RWF', mainImg: '/657940054_17997793169920113_9108503276882617958_n.jpg' },
  { id: 10, name: 'Classic Tee (Worn)', price: '18K RWF', mainImg: '/686037730_18003046523920113_5205355407203989715_n.jpg' }
];

const Lookbook = () => {
  return (
    <section id="new" className="border-b" style={{ 
      height: '100vh', 
      padding: '3rem 0', // Removed horizontal padding to allow full bleed scrolling
      backgroundColor: '#1a1a1a', 
      color: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', width: '100%', maxWidth: '1200px', margin: '0 auto 2rem auto', padding: '0 2rem' }}>
        <h2 className="lookbook-title" style={{ 
          fontSize: '3rem', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          letterSpacing: '-0.05em', 
          margin: 0,
          textShadow: '4px 4px 0px #e63946' 
        }}>
          LATEST DROPS
        </h2>
        <Link to="/shop" style={{ 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          backgroundColor: '#f4c430', 
          color: '#111', 
          padding: '0.5rem 1.5rem', 
          border: '2px solid #111',
          boxShadow: '4px 4px 0px #e63946'
        }}>
          VIEW ALL
        </Link>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="lookbook-scroll-container" style={{ 
        display: 'flex', 
        gap: '2.5rem', 
        width: '100%',
        flex: 1,
        alignItems: 'center',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        padding: '0 2rem', // Padding inside scroll area
        paddingBottom: '1rem', // Space for scrollbar
        scrollbarWidth: 'none', // Hide scrollbar Firefox
        msOverflowStyle: 'none', // Hide scrollbar IE/Edge
      }}>
        {products.map((product, index) => (
          <div key={product.id} className="product-card" style={{
            flex: '0 0 auto',
            width: '350px', // Fixed width for horizontal scrolling
            scrollSnapAlign: 'start',
            border: '2px solid #111',
            backgroundColor: '#f4f4f4',
            transform: index % 2 !== 0 ? 'translateY(1.5rem)' : 'none', 
            transition: 'transform 0.2s ease',
            height: '100%',
            maxHeight: '60vh', 
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
          }}>
            <div className="img-container" style={{ 
              position: 'relative', 
              width: '100%', 
              flex: 1, 
              overflow: 'hidden',
              borderBottom: '2px solid #111'
            }}>
              <img src={`${import.meta.env.BASE_URL}${product.mainImg.startsWith('/') ? product.mainImg.slice(1) : product.mainImg}`} alt={product.name} className="product-img main-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ 
              padding: '1rem', 
              display: 'flex', 
              flexDirection: 'column', 
              backgroundColor: '#f4f4f4',
              color: '#111'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase' }}>{product.name}</span>
                <span style={{ fontSize: '1rem', fontWeight: 800, backgroundColor: '#f4c430', padding: '0.2rem 0.5rem', border: '2px solid #111' }}>
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hide scrollbar for Chrome/Safari using inline style tag */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Lookbook;

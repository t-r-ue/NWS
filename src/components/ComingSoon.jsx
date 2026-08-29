import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4c430', // Solid warning yellow
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      color: '#111'
    }}>
      
      {/* Background hazard tape */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
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
        letterSpacing: '0.2em'
      }}>
        {Array(10).fill('UNDER CONSTRUCTION ✦ ').join('')}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-10%',
        width: '120%',
        height: '40px',
        backgroundColor: '#111',
        transform: 'rotate(3deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f4c430',
        fontWeight: 900,
        fontSize: '1.2rem',
        letterSpacing: '0.2em'
      }}>
        {Array(10).fill('DROPPING SOON ✦ ').join('')}
      </div>

      <div style={{
        backgroundColor: '#f4f4f4',
        border: '4px solid #111',
        boxShadow: '15px 15px 0px #e63946',
        padding: '4rem 2rem',
        maxWidth: '600px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          margin: '0 0 1rem 0',
          color: '#111',
          lineHeight: 0.9,
          textShadow: '2px 2px 0px #e63946'
        }}>
          STILL COOKING
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '3rem'
        }}>
          This page is under construction. The drop isn't ready yet.
        </p>

        <Link to="/" style={{
          fontSize: '1.2rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          textDecoration: 'none',
          backgroundColor: '#111',
          color: '#f4c430',
          padding: '1rem 2rem',
          border: '2px solid #111',
          boxShadow: '6px 6px 0px #e63946',
          display: 'inline-block',
          transition: 'transform 0.1s ease'
        }}>
          RETURN TO BASE
        </Link>
      </div>

    </div>
  );
};

export default ComingSoon;

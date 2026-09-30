import React, { useState, useEffect } from 'react';
import { Target, Menu, X, Play, Shield, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Problem', href: '#problem' },
  { name: 'Pitch Video', href: '#pitch-video' },
  { name: 'Solution', href: '#solution' },
  { name: 'Technical Approach', href: '#technical' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Simulation', href: '#simulation' },
  { name: 'Feasibility', href: '#feasibility' },
  { name: 'Comparison', href: '#comparison' },
  { name: 'Impact', href: '#impact' },
  { name: 'Research', href: '#research' },
];

export default function Navbar({ onOpenPitchModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 11, 20, 0.92)' : 'rgba(5, 11, 20, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 229, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        style={{
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00e5ff, #00e676)',
          transition: 'width 0.1s linear'
        }}
      />

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 230, 118, 0.15))',
              border: '1px solid #00e5ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0,229,255,0.3)'
            }}
          >
            <Target size={24} color="#00e5ff" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              LAKSHYA <span style={{ color: '#00e5ff' }}>FUZE</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              SIH SMART ARTILLERY
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          {NAV_LINKS.slice(0, 8).map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#00e5ff')}
              onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenPitchModal}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Play size={16} fill="#050b14" />
            1.5m Pitch Video
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#0b172a',
            borderBottom: '1px solid #00e5ff',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="#00e5ff" />
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

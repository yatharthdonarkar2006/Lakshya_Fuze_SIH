import React from 'react';
import { Target, Code, Globe, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#040911',
        borderTop: '1px solid rgba(0, 229, 255, 0.15)',
        padding: '4rem 0 2rem 0',
        color: '#94a3b8',
        fontSize: '0.9rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(0, 229, 255, 0.2)',
                  border: '1px solid #00e5ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Target size={20} color="#00e5ff" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#fff' }}>
                LAKSHYA <span style={{ color: '#00e5ff' }}>FUZE</span>
              </span>
            </div>

            <p style={{ lineHeight: 1.6, color: '#64748b', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
              A Smart India Hackathon (SIH) Defense Innovation project engineered to provide cost-effective precision guidance for standard 155mm artillery ammunition.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Code size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#home" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
              <a href="#problem" style={{ color: '#94a3b8', textDecoration: 'none' }}>Problem</a>
              <a href="#solution" style={{ color: '#94a3b8', textDecoration: 'none' }}>Solution</a>
              <a href="#technical" style={{ color: '#94a3b8', textDecoration: 'none' }}>Technical Approach</a>
              <a href="#architecture" style={{ color: '#94a3b8', textDecoration: 'none' }}>Architecture</a>
            </div>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Technology & Proof</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#methodology" style={{ color: '#94a3b8', textDecoration: 'none' }}>Methodology</a>
              <a href="#simulation" style={{ color: '#94a3b8', textDecoration: 'none' }}>Trajectory Simulation</a>
              <a href="#prototype" style={{ color: '#94a3b8', textDecoration: 'none' }}>Wokwi Prototype</a>
              <a href="#feasibility" style={{ color: '#94a3b8', textDecoration: 'none' }}>Feasibility & Risks</a>
              <a href="#comparison" style={{ color: '#94a3b8', textDecoration: 'none' }}>System Comparison</a>
            </div>
          </div>

          {/* Quick Links Column 3 */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Documentation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#pitch-video" style={{ color: '#94a3b8', textDecoration: 'none' }}>1.5m Pitch Video</a>
              <a href="#impact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Impact & Benefits</a>
              <a href="#research" style={{ color: '#94a3b8', textDecoration: 'none' }}>YIL Visit & Research</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Lakshya Fuze Project Team. Developed for Smart India Hackathon (SIH). All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Engineered with precision for National Defense</span>
            <Shield size={14} color="#00e5ff" />
          </div>
        </div>

      </div>
    </footer>
  );
}

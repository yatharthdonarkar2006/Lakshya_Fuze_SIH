import React, { useState } from 'react';
import { SOLUTION_DATA } from '../data/fuzeData';
import { Cpu, RefreshCw, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SolutionSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section id="solution" className="section" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.05) 0%, rgba(5, 11, 20, 1) 100%)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} color="#00e5ff" />
            <span>GAME-CHANGING INNOVATION</span>
          </div>
          <h2 className="section-title">Our Solution: Lakshya Fuze Smart Nose Cap</h2>
          <p className="section-subtitle">
            {SOLUTION_DATA.subtitle}
          </p>
        </div>

        {/* 3 Interactive Solution Cards */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {SOLUTION_DATA.cards.map((card, idx) => {
            const Icon = card.icon === 'Cpu' ? Cpu : card.icon === 'RefreshCw' ? RefreshCw : CheckCircle2;
            const isActive = activeCardIndex === idx;

            return (
              <div
                key={card.id}
                className="glass-panel"
                onClick={() => setActiveCardIndex(idx)}
                style={{
                  padding: '2rem',
                  cursor: 'pointer',
                  borderColor: isActive ? '#00e5ff' : 'rgba(0, 229, 255, 0.15)',
                  background: isActive ? 'rgba(11, 23, 42, 0.95)' : 'rgba(11, 23, 42, 0.6)',
                  boxShadow: isActive ? '0 0 30px rgba(0, 229, 255, 0.25)' : 'none',
                  transform: isActive ? 'translateY(-6px)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glowing top line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: isActive ? 'linear-gradient(90deg, #00e5ff, #00e676)' : 'transparent'
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: isActive ? 'rgba(0, 229, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${isActive ? '#00e5ff' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={24} color={isActive ? '#00e5ff' : '#94a3b8'} />
                  </div>
                  <span className={`badge ${idx === 2 ? 'badge-green' : 'badge-teal'}`}>{card.badge}</span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#00e5ff', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  {card.title}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                  {card.subtitle}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '0.92rem', color: '#cbd5e1', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.4 }}>
                      <span style={{ color: '#00e5ff', fontWeight: 'bold' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(0, 229, 255, 0.08)',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    color: '#00e5ff',
                    fontWeight: 600,
                    borderLeft: '3px solid #00e5ff'
                  }}
                >
                  💡 {card.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive SVG Explode Diagram: Standard 155mm Shell vs Lakshya Fuze Nose Cap Swap */}
        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <ShieldCheck size={20} color="#00e5ff" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
              Retrofit Architecture — Plug-and-Play Nose Cap Swap
            </h3>
          </div>

          <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto 2rem auto', fontSize: '0.95rem' }}>
            The diagram below illustrates how standard NATO/Indian Army 155mm shell bodies remain 100% untouched. Only the top fuse thread is unscrewed and replaced with Lakshya Fuze.
          </p>

          <div style={{ background: '#050b14', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0, 229, 255, 0.2)', position: 'relative' }}>
            <svg viewBox="0 0 900 320" style={{ width: '100%', height: 'auto', maxHeight: '320px' }}>
              {/* Shell Main Body (Original Unchanged) */}
              <g id="shell-body">
                {/* Main Explosive Cylinder */}
                <rect x="250" y="110" width="450" height="100" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                <path d="M 700 110 L 780 130 C 810 160 810 160 780 190 L 700 210 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
                
                {/* Brass Drive Band */}
                <rect x="680" y="105" width="20" height="110" fill="#b45309" rx="3" />

                {/* Shell Body Labels */}
                <text x="470" y="155" fill="#94a3b8" fontSize="16" fontWeight="bold" textAnchor="middle">100% UNCHANGED SHELL BODY & WARHEAD</text>
                <text x="470" y="180" fill="#64748b" fontSize="12" textAnchor="middle">(HE Explosive, Steel Casing, Propellant Charge)</text>
              </g>

              {/* Thread Connection */}
              <g id="thread-mount">
                <line x1="240" y1="110" x2="250" y2="110" stroke="#00e5ff" strokeWidth="4" />
                <line x1="240" y1="210" x2="250" y2="210" stroke="#00e5ff" strokeWidth="4" />
                <text x="245" y="90" fill="#00e5ff" fontSize="11" fontWeight="bold" textAnchor="middle">Standard NATO Thread</text>
              </g>

              {/* Lakshya Fuze Smart Cap (Highlighted Teal & Glowing) */}
              <g id="smart-nose-cap" style={{ filter: 'drop-shadow(0 0 12px rgba(0, 229, 255, 0.6))' }}>
                <path d="M 240 110 L 120 135 C 80 150 80 170 120 185 L 240 210 Z" fill="url(#teal-grad)" stroke="#00e5ff" strokeWidth="3" />
                
                {/* Sensors & Fins */}
                {/* Canard Fins */}
                <polygon points="170,100 190,70 210,105" fill="#00e5ff" stroke="#fff" strokeWidth="1.5" />
                <polygon points="170,220 190,250 210,215" fill="#00e5ff" stroke="#fff" strokeWidth="1.5" />

                {/* Microprocessor Core Dot */}
                <circle cx="160" cy="160" r="10" fill="#00e676" />
                <circle cx="160" cy="160" r="18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* GPS Antenna Nose Tip */}
                <circle cx="95" cy="160" r="6" fill="#00e5ff" />

                {/* Callout Lines */}
                <line x1="160" y1="160" x2="160" y2="280" stroke="#00e676" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="160" y="300" fill="#00e676" fontSize="13" fontWeight="bold" textAnchor="middle">ESP32 + EKF Guidance Core</text>

                <line x1="190" y1="70" x2="190" y2="30" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="190" y="20" fill="#00e5ff" fontSize="13" fontWeight="bold" textAnchor="middle">Fold-out Servo Canard Fins</text>
              </g>

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b8d4" />
                  <stop offset="100%" stopColor="#0b172a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

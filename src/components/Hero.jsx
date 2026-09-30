import React from 'react';
import { HERO_DATA } from '../data/fuzeData';
import { Target, Play, ChevronDown, Zap, Shield, RefreshCw, TrendingDown, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenPitchModal }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 50% 20%, rgba(0, 229, 255, 0.12) 0%, rgba(5, 11, 20, 1) 75%)',
        overflow: 'hidden'
      }}
    >
      {/* Background Radar Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      {/* Pulsing Radar Ring graphic in background */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 229, 255, 0.15)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className="animate-pulse-glow"
      >
        <div style={{ width: '350px', height: '350px', borderRadius: '50%', border: '1px solid rgba(0, 229, 255, 0.25)' }} />
        <div style={{ width: '200px', height: '200px', borderRadius: '50%', border: '1px dashed rgba(0, 230, 118, 0.3)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* SIH Tag badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1.2rem',
              background: 'rgba(0, 229, 255, 0.1)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#00e5ff',
              marginBottom: '1.8rem',
              boxShadow: '0 0 15px rgba(0,229,255,0.2)'
            }}
          >
            <Shield size={16} color="#00e5ff" />
            <span>SMART INDIA HACKATHON (SIH) DEFENSE INNOVATION</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.2rem',
              letterSpacing: '-0.03em'
            }}
          >
            LAKSHYA FUZE — <br />
            <span className="text-gradient">Precision Guidance, One Nose Cap at a Time</span>
          </h1>

          {/* Tagline & Subheading */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '820px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            {HERO_DATA.subheading}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="#solution" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
              <span>Explore the Solution</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenPitchModal} className="btn btn-outline" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
              <Play size={18} fill="#00e5ff" color="#00e5ff" />
              <span>Watch 1.5m Pitch Video</span>
            </button>
          </div>

          {/* Key Metrics HUD Bar */}
          <div
            className="grid-4"
            style={{
              background: 'rgba(11, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              borderRadius: '20px',
              padding: '1.8rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            {HERO_DATA.metrics.map((metric, idx) => {
              const IconComp = metric.icon === 'Target' ? Target : metric.icon === 'TrendingDown' ? TrendingDown : metric.icon === 'Zap' ? Zap : RefreshCw;
              return (
                <div key={idx} style={{ textAlign: 'left', borderRight: idx < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingRight: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00e5ff', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    <IconComp size={16} />
                    <span>{metric.label}</span>
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem' }}>
                    {metric.subtext}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

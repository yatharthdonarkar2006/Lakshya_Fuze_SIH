import React from 'react';
import { STAKEHOLDERS, IMPACT_METRICS } from '../data/fuzeData';
import { Shield, Factory, HeartHandshake, TrendingUp, CheckCircle } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section id="impact" className="section" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 230, 118, 0.05) 0%, rgba(5, 11, 20, 1) 100%)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <TrendingUp size={14} color="#00e676" />
            <span>REAL-WORLD VALUE</span>
          </div>
          <h2 className="section-title">Real-World Impact & Stakeholders</h2>
          <p className="section-subtitle">
            Delivering tangible tactical advantages for armed forces, manufacturing opportunities for domestic defense industries, and safety for civilians.
          </p>
        </div>

        {/* Subsection 1 — 3 Stakeholder Cards */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {STAKEHOLDERS.map((card, idx) => {
            const Icon = card.icon === 'Shield' ? Shield : card.icon === 'Factory' ? Factory : HeartHandshake;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderColor: 'rgba(0, 230, 118, 0.2)',
                  background: 'rgba(11, 23, 42, 0.8)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 230, 118, 0.15)',
                    border: '1px solid #00e676',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem'
                  }}
                >
                  <Icon size={26} color="#00e676" />
                </div>

                <div style={{ fontSize: '0.8rem', color: '#00e676', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  {card.target}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
                  {card.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {card.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '0.92rem', color: '#cbd5e1', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.4 }}>
                      <CheckCircle size={16} color="#00e676" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Subsection 2 — Key Benefits Metric Counter Grid */}
        <div
          className="grid-4"
          style={{
            background: 'rgba(11, 23, 42, 0.9)',
            border: '1px solid rgba(0, 230, 118, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#00e676', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.4rem', fontWeight: 600 }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

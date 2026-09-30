import React, { useState } from 'react';
import { DEEP_DIVE_PANELS } from '../data/fuzeData';
import { Layers, ShieldCheck, Activity, Sliders, CheckCircle, ArrowRight } from 'lucide-react';

export default function ArchitectureDeepDive() {
  const [activePanelId, setActivePanelId] = useState('hardware-integration');

  const currentPanel = DEEP_DIVE_PANELS.find((p) => p.id === activePanelId) || DEEP_DIVE_PANELS[0];

  return (
    <section id="architecture" className="section" style={{ background: 'rgba(5, 11, 20, 0.7)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} color="#00e5ff" />
            <span>SYSTEM DEEP-DIVE</span>
          </div>
          <h2 className="section-title">Complete System Architecture</h2>
          <p className="section-subtitle">
            An in-depth technical examination of hardware mounting, sensor fusion mathematics, and high-g flight simulation frameworks.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {DEEP_DIVE_PANELS.map((panel) => {
            const isActive = activePanelId === panel.id;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanelId(panel.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  borderRadius: '9999px',
                  padding: '0.75rem 1.6rem',
                  fontSize: '0.95rem'
                }}
              >
                {panel.title}
              </button>
            );
          })}
        </div>

        {/* Active Panel View */}
        <div className="glass-panel" style={{ padding: '2.5rem', borderColor: '#00e5ff', background: 'rgba(11, 23, 42, 0.9)' }}>
          <div style={{ fontSize: '0.85rem', color: '#00e5ff', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            {currentPanel.subtitle}
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
            {currentPanel.title}
          </h3>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem' }}>
            {currentPanel.description}
          </p>

          <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
            Engineering Highlights & Specifications:
          </div>

          <div className="grid-2">
            {currentPanel.details.map((detail, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.2rem',
                  background: 'rgba(0, 229, 255, 0.06)',
                  border: '1px solid rgba(0, 229, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.8rem'
                }}
              >
                <CheckCircle size={20} color="#00e5ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: '#f8fafc', lineHeight: 1.5 }}>
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

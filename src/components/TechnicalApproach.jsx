import React, { useState } from 'react';
import { HARDWARE_COMPONENTS, ARCHITECTURE_TIERS, SOFTWARE_STACK } from '../data/fuzeData';
import { Cpu, Navigation, Radio, Sliders, BatteryCharging, HardDrive, Wifi, Server, Brain, Monitor, CheckCircle, Code } from 'lucide-react';

export default function TechnicalApproach() {
  const [selectedTier, setSelectedTier] = useState(0);

  return (
    <section id="technical" className="section" style={{ background: 'rgba(5, 11, 20, 0.8)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} color="#00e5ff" />
            <span>HARDWARE & SYSTEM SPECIFICATIONS</span>
          </div>
          <h2 className="section-title">Technical Approach & Architecture</h2>
          <p className="section-subtitle">
            A high-reliability hardware stack coupled with an enterprise IoT-to-Cloud telemetry and Extended Kalman Filter guidance engine.
          </p>
        </div>

        {/* Subsection 1 — Hardware Components */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
            <Cpu size={22} color="#00e5ff" />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>1. Hardware Component Breakdown</h3>
          </div>

          <div className="grid-3">
            {HARDWARE_COMPONENTS.map((comp, idx) => {
              const Icon = comp.icon === 'Cpu' ? Cpu : comp.icon === 'Navigation' ? Navigation : comp.icon === 'Radio' ? Radio : comp.icon === 'Sliders' ? Sliders : BatteryCharging;

              return (
                <div key={idx} className="glass-panel" style={{ padding: '1.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(0, 229, 255, 0.15)',
                        border: '1px solid #00e5ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color="#00e5ff" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>{comp.name}</h4>
                      <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{comp.category}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                    <strong>Specs:</strong> {comp.specs}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.4, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.6rem' }}>
                    <strong style={{ color: '#00e5ff' }}>Role:</strong> {comp.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subsection 2 — Interactive System Architecture Diagram */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
            <Server size={22} color="#00e5ff" />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>2. Multi-Tier System Architecture</h3>
          </div>

          <div className="grid-2" style={{ alignItems: 'center' }}>
            {/* Interactive Tier Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ARCHITECTURE_TIERS.map((tier, idx) => {
                const TierIcon = tier.icon === 'HardDrive' ? HardDrive : tier.icon === 'Wifi' ? Wifi : tier.icon === 'Server' ? Server : tier.icon === 'Brain' ? Brain : Monitor;
                const isSelected = selectedTier === idx;

                return (
                  <div
                    key={idx}
                    className="glass-panel"
                    onClick={() => setSelectedTier(idx)}
                    style={{
                      padding: '1.2rem 1.5rem',
                      cursor: 'pointer',
                      borderColor: isSelected ? '#00e5ff' : 'rgba(0, 229, 255, 0.1)',
                      background: isSelected ? 'rgba(0, 229, 255, 0.12)' : 'rgba(11, 23, 42, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: isSelected ? '0 0 20px rgba(0,229,255,0.2)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <TierIcon size={22} color={isSelected ? '#00e5ff' : '#94a3b8'} />
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isSelected ? '#fff' : '#cbd5e1' }}>
                        {tier.tier}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: isSelected ? '#00e5ff' : '#64748b', fontWeight: 'bold' }}>
                      {isSelected ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Selected Tier Details Panel */}
            <div className="glass-panel" style={{ padding: '2rem', borderColor: '#00e5ff', background: 'rgba(11, 23, 42, 0.95)' }}>
              <div style={{ fontSize: '0.85rem', color: '#00e5ff', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ARCHITECTURE INSPECTOR
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                {ARCHITECTURE_TIERS[selectedTier].tier}
              </h4>

              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {ARCHITECTURE_TIERS[selectedTier].description}
              </p>

              <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 700, marginBottom: '0.8rem', textTransform: 'uppercase' }}>
                Key Modules & Components:
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ARCHITECTURE_TIERS[selectedTier].items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      padding: '0.4rem 0.9rem',
                      background: 'rgba(0, 229, 255, 0.1)',
                      border: '1px solid rgba(0, 229, 255, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: '#00e5ff',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <CheckCircle size={14} color="#00e676" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 3 — Software Stack */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
            <Code size={22} color="#00e5ff" />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>3. Software & Simulation Stack</h3>
          </div>

          <div className="grid-4">
            {SOFTWARE_STACK.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="glass-panel"
                style={{
                  padding: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(15, 23, 42, 0.7)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(0, 229, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Code size={18} color="#00e5ff" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{tech.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

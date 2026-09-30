import React from 'react';
import { FEASIBILITY_TABLE, RISKS_TABLE } from '../data/fuzeData';
import { ShieldAlert, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function FeasibilitySection() {
  return (
    <section id="feasibility" className="section" style={{ background: 'rgba(5, 11, 20, 0.9)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} color="#00e5ff" />
            <span>VIABILITY & RISK ANALYSIS</span>
          </div>
          <h2 className="section-title">Feasibility & Viability Analysis</h2>
          <p className="section-subtitle">
            A rigorous 4-point feasibility evaluation alongside a comprehensive risk mitigation framework for military-grade deployment.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start', marginBottom: '3rem' }}>
          
          {/* Left Column — Feasibility Check Table */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={22} color="#00e676" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>1. Feasibility Check</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FEASIBILITY_TABLE.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderRadius: '12px',
                    borderLeft: `4px solid ${row.status.includes('Green') ? '#00e676' : '#ffd600'}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                      {row.category}
                    </div>
                    <span className={`badge ${row.status.includes('Green') ? 'badge-green' : 'badge-teal'}`}>
                      {row.indicator} {row.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    {row.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Risks & Mitigation Matrix */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <ShieldAlert size={22} color="#ff5252" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>2. Risk & Mitigation Matrix</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {RISKS_TABLE.map((item, idx) => {
                const isHigh = item.severity === 'High';
                const isMed = item.severity === 'Medium';

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      background: 'rgba(15, 23, 42, 0.7)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                        {item.risk}
                      </div>
                      <span className={`badge ${isHigh ? 'badge-red' : isMed ? 'badge-teal' : 'badge-green'}`} style={{ fontSize: '0.68rem' }}>
                        {item.severity} Severity
                      </span>
                    </div>

                    <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.4 }}>
                      <strong style={{ color: '#00e5ff' }}>Mitigation:</strong> {item.mitigation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Summary Footer Banner */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            background: 'rgba(0, 230, 118, 0.08)',
            border: '1px stroke rgba(0, 230, 118, 0.25)',
            borderRadius: '14px',
            textAlign: 'center',
            fontSize: '0.95rem',
            color: '#00e676',
            fontWeight: 600
          }}
        >
          ✅ "Green indicators across technical, financial, and operational dimensions demonstrate immediate field readiness, supported by explicit high-g risk mitigation protocols."
        </div>

      </div>
    </section>
  );
}

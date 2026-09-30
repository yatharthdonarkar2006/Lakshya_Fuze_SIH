import React from 'react';
import { COMPARISON_DATA } from '../data/fuzeData';
import { Award, Check, Sparkles } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section" style={{ background: 'rgba(5, 11, 20, 0.8)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} color="#00e5ff" />
            <span>BENCHMARK ANALYSIS</span>
          </div>
          <h2 className="section-title">How Lakshya Fuze Compares</h2>
          <p className="section-subtitle">
            A side-by-side performance evaluation against standard unguided projectiles and multi-million dollar custom guided missiles.
          </p>
        </div>

        {/* Comparison Table Shell */}
        <div
          className="glass-panel"
          style={{
            padding: '1.5rem',
            overflowX: 'auto',
            borderColor: 'rgba(0, 229, 255, 0.3)',
            background: 'rgba(11, 23, 42, 0.95)'
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '750px'
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1.2rem', color: '#94a3b8', fontSize: '0.95rem', fontWeight: 700, width: '25%' }}>
                  Metric / Feature
                </th>
                <th style={{ padding: '1.2rem', color: '#ff5252', fontSize: '1.05rem', fontWeight: 700, width: '25%' }}>
                  Standard Unguided Shell
                </th>
                {/* Lakshya Fuze Highlighted Header */}
                <th
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(0, 229, 255, 0.15)',
                    borderTop: '3px solid #00e5ff',
                    borderLeft: '1px solid rgba(0,229,255,0.3)',
                    borderRight: '1px solid rgba(0,229,255,0.3)',
                    width: '25%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00e5ff' }}>
                      LAKSHYA FUZE
                    </span>
                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        background: '#00e676',
                        color: '#000',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <Sparkles size={12} /> BEST CHOICE
                    </span>
                  </div>
                </th>
                <th style={{ padding: '1.2rem', color: '#cbd5e1', fontSize: '1.05rem', fontWeight: 700, width: '25%' }}>
                  M982 Excalibur / Custom Guided
                </th>
              </tr>
            </thead>

            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'background 0.2s ease'
                  }}
                >
                  <td style={{ padding: '1.1rem 1.2rem', color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '1.1rem 1.2rem', color: '#94a3b8', fontSize: '0.92rem' }}>
                    {row.unguided}
                  </td>
                  
                  {/* Highlighted Lakshya Fuze Column */}
                  <td
                    style={{
                      padding: '1.1rem 1.2rem',
                      background: 'rgba(0, 229, 255, 0.08)',
                      borderLeft: '1px solid rgba(0,229,255,0.2)',
                      borderRight: '1px solid rgba(0,229,255,0.2)',
                      color: '#00e676',
                      fontWeight: 700,
                      fontSize: '0.95rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={16} color="#00e676" />
                      <span>{row.lakshya}</span>
                    </div>
                  </td>

                  <td style={{ padding: '1.1rem 1.2rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
                    {row.excalibur}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

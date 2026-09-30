import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/fuzeData';
import { GitCommit, ArrowRight, CheckCircle2, Shield, Info } from 'lucide-react';

export default function MethodologyFlowchart() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="methodology" className="section" style={{ background: 'rgba(5, 11, 20, 0.95)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <GitCommit size={14} color="#00e5ff" />
            <span>DATA LIFECYCLE & WORKFLOW</span>
          </div>
          <h2 className="section-title">Development Methodology</h2>
          <p className="section-subtitle">
            The 7-stage data lifecycle from pre-launch wireless initialization to hypersonic in-flight fin actuation and strike verification.
          </p>
        </div>

        {/* Horizontal Scrollable Interactive Flowchart */}
        <div
          style={{
            overflowX: 'auto',
            paddingBottom: '2rem',
            marginBottom: '3rem',
            scrollbarWidth: 'thin'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              minWidth: '1050px',
              justifyContent: 'space-between',
              padding: '1rem 0.5rem'
            }}
          >
            {METHODOLOGY_STEPS.map((item, idx) => {
              const isSelected = selectedStep === idx;

              return (
                <React.Fragment key={item.step}>
                  <div
                    onClick={() => setSelectedStep(idx)}
                    style={{
                      flex: 1,
                      background: isSelected ? 'rgba(11, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.6)',
                      border: `2px solid ${isSelected ? item.color : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '16px',
                      padding: '1.2rem 1rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.25s ease',
                      boxShadow: isSelected ? `0 0 20px ${item.color}40` : 'none',
                      transform: isSelected ? 'scale(1.05)' : 'none',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: item.color,
                        color: '#050b14',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.8rem auto'
                      }}
                    >
                      {item.step}
                    </div>

                    <div style={{ fontSize: '0.75rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {item.category}
                    </div>

                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                      {item.title}
                    </div>
                  </div>

                  {idx < METHODOLOGY_STEPS.length - 1 && (
                    <div style={{ padding: '0 0.4rem', color: '#64748b' }}>
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Flowchart Step Detail Box */}
        <div
          className="glass-panel"
          style={{
            padding: '2.2rem',
            borderColor: METHODOLOGY_STEPS[selectedStep].color,
            background: 'rgba(11, 23, 42, 0.9)',
            boxShadow: `0 0 30px ${METHODOLOGY_STEPS[selectedStep].color}25`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: METHODOLOGY_STEPS[selectedStep].color,
                  color: '#000',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {METHODOLOGY_STEPS[selectedStep].step}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                Stage {METHODOLOGY_STEPS[selectedStep].step}: {METHODOLOGY_STEPS[selectedStep].title}
              </h3>
            </div>
            <span
              className="badge"
              style={{
                background: `${METHODOLOGY_STEPS[selectedStep].color}20`,
                color: METHODOLOGY_STEPS[selectedStep].color,
                border: `1px solid ${METHODOLOGY_STEPS[selectedStep].color}60`
              }}
            >
              {METHODOLOGY_STEPS[selectedStep].category}
            </span>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {METHODOLOGY_STEPS[selectedStep].description}
          </p>

          <div
            style={{
              padding: '1rem',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              borderLeft: `4px solid ${METHODOLOGY_STEPS[selectedStep].color}`
            }}
          >
            <Info size={18} color={METHODOLOGY_STEPS[selectedStep].color} />
            <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              Click any stage above to inspect its data protocol, sub-system trigger, and fail-safe routing.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

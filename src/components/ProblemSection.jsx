import React, { useEffect, useRef } from 'react';
import { PROBLEM_DATA } from '../data/fuzeData';
import { AlertTriangle, Wind, Layers, AlertCircle, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      // Draw Grid
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Ground
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, height - 30, width, 30);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeRect(0, height - 30, width, 30);

      // Target Bunker
      const targetX = width - 80;
      const targetY = height - 30;
      ctx.fillStyle = '#ff5252';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText('TARGET', targetX - 20, targetY + 20);

      // Unguided Ballistic Arc (Drifting off target)
      const startX = 30;
      const startY = height - 30;
      const duration = 180;
      const currentStep = (t % duration) / duration;

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 82, 82, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      ctx.moveTo(startX, startY);
      const curveX = width * 0.5;
      const curveY = 30;
      const missX = targetX - 140; // Drifts short / off-target due to gravity & wind
      ctx.quadraticCurveTo(curveX, curveY, missX, targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Shell Particle along unguided path
      const shellX = (1 - currentStep) * (1 - currentStep) * startX + 2 * (1 - currentStep) * currentStep * curveX + currentStep * currentStep * missX;
      const shellY = (1 - currentStep) * (1 - currentStep) * startY + 2 * (1 - currentStep) * currentStep * curveY + currentStep * currentStep * targetY;

      // Draw Shell
      ctx.fillStyle = '#ff5252';
      ctx.beginPath();
      ctx.arc(shellX, shellY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw Drift Vector / Wind indicator
      ctx.fillStyle = 'rgba(255, 82, 82, 0.15)';
      ctx.beginPath();
      ctx.arc(missX, targetY, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ff5252';
      ctx.fillText('150m CEP Miss Zone', missX - 45, targetY - 45);

      t++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="problem" className="section" style={{ background: 'rgba(5, 11, 20, 0.6)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <AlertTriangle size={14} color="#ff5252" />
            <span style={{ color: '#ff5252' }}>THE BALLISTIC CHALLENGE</span>
          </div>
          <h2 className="section-title">The Problem: Gravity-Dependent Accuracy</h2>
          <p className="section-subtitle">
            {PROBLEM_DATA.subtitle}
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Problem Points */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROBLEM_DATA.points.map((point, idx) => {
                const Icon = point.icon === 'Wind' ? Wind : point.icon === 'Layers' ? Layers : AlertCircle;
                return (
                  <div
                    key={idx}
                    className="glass-panel"
                    style={{
                      padding: '1.5rem',
                      borderColor: 'rgba(255, 82, 82, 0.2)',
                      background: 'rgba(15, 23, 42, 0.8)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(255, 82, 82, 0.15)',
                          border: '1px solid rgba(255, 82, 82, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={20} color="#ff5252" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                          {point.title}
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.5 }}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Comparison Bar */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.2rem',
                background: 'rgba(255, 82, 82, 0.08)',
                border: '1px dashed rgba(255, 82, 82, 0.3)',
                borderRadius: '14px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Standard Rounds Needed</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff5252', fontFamily: 'var(--font-heading)' }}>15 - 50 Rounds</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Standard CEP Accuracy</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff5252', fontFamily: 'var(--font-heading)' }}>~150 Meters</div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Unguided Physics Simulation Visual */}
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ff5252', letterSpacing: '0.05em' }}>
                UN-GUIDED BALLISTIC DRIFT DEMO
              </div>
              <span className="badge badge-red">Gravity Only</span>
            </div>

            <canvas
              ref={canvasRef}
              width={500}
              height={320}
              style={{
                width: '100%',
                height: 'auto',
                background: '#070f1e',
                borderRadius: '10px',
                border: '1px solid rgba(255, 82, 82, 0.2)'
              }}
            />

            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'left', background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px' }}>
              ⚠️ <strong style={{ color: '#ff5252' }}>Observation:</strong> Without dynamic fin corrections, crosswinds and air density fluctuations create huge impact errors, causing high ammunition waste.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

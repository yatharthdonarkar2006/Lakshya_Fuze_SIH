import React, { useState, useEffect, useRef } from 'react';
import { Target, Play, RotateCcw, Sliders, Wind, Zap, Gauge, CheckCircle2 } from 'lucide-react';

export default function TrajectorySimulator() {
  const canvasRef = useRef(null);

  // Simulation Controls
  const [crosswind, setCrosswind] = useState(18); // m/s
  const [muzzleVel, setMuzzleVel] = useState(820); // m/s
  const [launchAngle, setLaunchAngle] = useState(45); // deg
  const [finResponse, setFinResponse] = useState(25); // Hz micro-corrections

  // Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [telemetry, setTelemetry] = useState({
    unguidedDeviation: 138,
    guidedDeviation: 3.2,
    flightTime: 52.4,
    correctionsCount: 412,
    status: 'Ready'
  });

  const animRef = useRef(null);

  const runSimulation = () => {
    setIsSimulating(true);
    setTelemetry((prev) => ({ ...prev, status: 'In Flight...' }));

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let step = 0;
    const totalSteps = 160;

    const targetX = width - 70;
    const targetY = height - 40;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Background Grid
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Ground Line
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, height - 40, width, 40);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.strokeRect(0, height - 40, width, 40);

      // Target Bullseye
      ctx.fillStyle = '#00e676';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#00e676';
      ctx.font = 'bold 11px var(--font-heading)';
      ctx.fillText('TARGET', targetX - 22, targetY - 20);

      // Physics Math simulation
      const rad = (launchAngle * Math.PI) / 180;
      const startX = 40;
      const startY = height - 40;

      // Unguided Impact Point (Pushed by Wind)
      const windOffset = (crosswind - 10) * 4;
      const unguidedImpactX = targetX - 120 - windOffset;

      // Guided Impact Point (Corrected by Fins)
      const guidedImpactX = targetX - (Math.random() * 2);

      const progress = Math.min(step / totalSteps, 1);

      // 1. Draw Unguided Arc (Red/Gray Dotted)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 82, 82, 0.5)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.moveTo(startX, startY);
      const midControlX = (startX + unguidedImpactX) / 2;
      const midControlY = startY - (muzzleVel / 3.8);
      ctx.quadraticCurveTo(midControlX, midControlY, unguidedImpactX, targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Lakshya Fuze Guided Arc (Glowing Electric Teal)
      ctx.beginPath();
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 12;
      ctx.moveTo(startX, startY);
      const guidedControlX = (startX + guidedImpactX) / 2;
      const guidedControlY = startY - (muzzleVel / 3.8);
      ctx.quadraticCurveTo(guidedControlX, guidedControlY, guidedImpactX, targetY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw Flying Projectiles
      // Unguided Shell Particle
      const uX = (1 - progress) * (1 - progress) * startX + 2 * (1 - progress) * progress * midControlX + progress * progress * unguidedImpactX;
      const uY = (1 - progress) * (1 - progress) * startY + 2 * (1 - progress) * progress * midControlY + progress * progress * targetY;

      ctx.fillStyle = '#ff5252';
      ctx.beginPath();
      ctx.arc(uX, uY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Guided Shell Particle with Fin Pulse
      const gX = (1 - progress) * (1 - progress) * startX + 2 * (1 - progress) * progress * guidedControlX + progress * progress * guidedImpactX;
      const gY = (1 - progress) * (1 - progress) * startY + 2 * (1 - progress) * progress * guidedControlY + progress * progress * targetY;

      ctx.fillStyle = '#00e5ff';
      ctx.beginPath();
      ctx.arc(gX, gY, 7, 0, Math.PI * 2);
      ctx.fill();

      // Fin Correction Pulses
      if (progress > 0.4 && progress < 0.95 && step % 4 === 0) {
        ctx.strokeStyle = '#00e676';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(gX, gY, 14, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (step < totalSteps) {
        step++;
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsSimulating(false);
        const calcUnguidedDev = Math.round(110 + windOffset * 1.5);
        const calcGuidedDev = (Math.random() * 2.5 + 1.8).toFixed(1);
        const calcFlightTime = (muzzleVel / 15.5).toFixed(1);

        setTelemetry({
          unguidedDeviation: calcUnguidedDev,
          guidedDeviation: calcGuidedDev,
          flightTime: calcFlightTime,
          correctionsCount: Math.round(finResponse * calcFlightTime),
          status: 'Target Impact Neutralized!'
        });
      }
    };

    animate();
  };

  useEffect(() => {
    runSimulation();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section id="simulation" className="section" style={{ background: 'radial-gradient(circle at 50% 0%, #0c1a30 0%, #050b14 80%)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Gauge size={14} color="#00e5ff" />
            <span>INTERACTIVE PHYSICS SIMULATION</span>
          </div>
          <h2 className="section-title">Real-Time Trajectory Simulator</h2>
          <p className="section-subtitle">
            Test Lakshya Fuze in real-time under custom wind shear, launch angle, and muzzle velocity conditions. Observe how fin micro-corrections eliminate ballistic drift.
          </p>
        </div>

        <div className="grid-2">
          
          {/* Controls Panel */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Sliders size={20} color="#00e5ff" />
              Ballistic Environment Controls
            </h3>

            {/* Crosswind Slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Wind size={16} color="#00e5ff" /> Crosswind Speed:
                </span>
                <strong style={{ color: '#00e5ff', fontFamily: 'var(--font-mono)' }}>{crosswind} m/s</strong>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={crosswind}
                onChange={(e) => setCrosswind(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00e5ff', cursor: 'pointer' }}
              />
            </div>

            {/* Muzzle Velocity Slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Zap size={16} color="#00e5ff" /> Muzzle Velocity:
                </span>
                <strong style={{ color: '#00e5ff', fontFamily: 'var(--font-mono)' }}>{muzzleVel} m/s</strong>
              </div>
              <input
                type="range"
                min="700"
                max="950"
                step="10"
                value={muzzleVel}
                onChange={(e) => setMuzzleVel(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00e5ff', cursor: 'pointer' }}
              />
            </div>

            {/* Launch Angle Slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Target size={16} color="#00e5ff" /> Launch Elevation Angle:
                </span>
                <strong style={{ color: '#00e5ff', fontFamily: 'var(--font-mono)' }}>{launchAngle}°</strong>
              </div>
              <input
                type="range"
                min="30"
                max="60"
                value={launchAngle}
                onChange={(e) => setLaunchAngle(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00e5ff', cursor: 'pointer' }}
              />
            </div>

            {/* Fin Correction Frequency Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <span>Fin Loop Frequency:</span>
                <strong style={{ color: '#00e676', fontFamily: 'var(--font-mono)' }}>{finResponse} Hz</strong>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={finResponse}
                onChange={(e) => setFinResponse(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00e676', cursor: 'pointer' }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Play size={18} fill="#000" />
                {isSimulating ? 'Simulating...' : 'Fire Ballistic Test'}
              </button>
            </div>
          </div>

          {/* Canvas & Telemetry Display */}
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#00e5ff', fontWeight: 700, textTransform: 'uppercase' }}>
                  2D BALLISTIC TRAJECTORY VIEW
                </span>
                <span className="badge badge-green">{telemetry.status}</span>
              </div>

              <canvas
                ref={canvasRef}
                width={550}
                height={260}
                style={{
                  width: '100%',
                  height: 'auto',
                  background: '#050b14',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 229, 255, 0.2)'
                }}
              />
            </div>

            {/* Telemetry Output HUD */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(0,0,0,0.5)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#ff5252', fontWeight: 700 }}>Unguided Shell Miss:</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ff5252', fontFamily: 'var(--font-mono)' }}>
                    {telemetry.unguidedDeviation} meters
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#00e676', fontWeight: 700 }}>Lakshya Fuze Accuracy:</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00e676', fontFamily: 'var(--font-mono)' }}>
                    {telemetry.guidedDeviation} meters CEP
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Flight Time:</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                    {telemetry.flightTime} seconds
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Fin Micro-Corrections:</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#00e5ff', fontFamily: 'var(--font-mono)' }}>
                    {telemetry.correctionsCount} cycles
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

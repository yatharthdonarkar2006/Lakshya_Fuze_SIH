import React, { useState } from 'react';
import { PITCH_SCENES } from '../data/fuzeData';
import { Film, Volume2, Play, CheckCircle } from 'lucide-react';

export default function PitchVideoShowcase() {
  const [activeSceneId, setActiveSceneId] = useState(1);
  const currentScene = PITCH_SCENES.find((s) => s.id === activeSceneId) || PITCH_SCENES[0];

  const VIDEO_SRC = "/WhatsApp Video 2026-09-27 at 18.14.24.mp4";

  return (
    <section id="pitch-video" className="section" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.12) 0%, rgba(5, 11, 20, 1) 90%)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Film size={14} color="#00e5ff" />
            <span>PROJECT CONCEPT PITCH</span>
          </div>
          <h2 className="section-title">Lakshya Fuze Pitch Video Showcase</h2>
          <p className="section-subtitle">
            Watch the official 1.5-minute Lakshya Fuze pitch video explaining problem mechanics, smart nose cap retrofit, and strike accuracy.
          </p>
        </div>

        {/* Video Player Box */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            borderColor: '#00e5ff',
            background: 'rgba(11, 23, 42, 0.95)',
            boxShadow: '0 0 40px rgba(0, 229, 255, 0.3)',
            marginBottom: '2rem'
          }}
        >
          {/* Real HTML5 Video Player */}
          <div
            style={{
              width: '100%',
              background: '#040911',
              borderRadius: '16px',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              marginBottom: '1.5rem'
            }}
          >
            <video
              src={VIDEO_SRC}
              controls
              controlsList="nodownload"
              poster=""
              style={{
                width: '100%',
                maxHeight: '520px',
                display: 'block',
                background: '#000'
              }}
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>

          {/* Narration & Active Scene Info Banner */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              padding: '1.2rem 1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid #00e5ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.75rem' }}>
                  {currentScene.title} ({currentScene.time})
                </span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Synced Pitch Narrative
                </span>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#00e5ff', fontStyle: 'italic' }}>
                🎙️ "{currentScene.narration}"
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00e676', fontSize: '0.82rem', fontWeight: 700 }}>
              <Volume2 size={16} />
              <span>OFFICIAL PITCH VIDEO</span>
            </div>
          </div>

          {/* 8 Scene Jump / Reference Buttons */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {PITCH_SCENES.map((scene) => {
              const isActive = activeSceneId === scene.id;
              return (
                <button
                  key={scene.id}
                  onClick={() => setActiveSceneId(scene.id)}
                  style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '0.75rem 0.5rem',
                    background: isActive ? 'rgba(0, 229, 255, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                    border: `1px solid ${isActive ? '#00e5ff' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '10px',
                    color: isActive ? '#00e5ff' : '#cbd5e1',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>Scene {scene.id}</div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>{scene.time}</div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

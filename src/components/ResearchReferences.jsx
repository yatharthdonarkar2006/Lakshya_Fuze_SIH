import React from 'react';
import { RESEARCH_DATA } from '../data/fuzeData';
import { BookOpen, ExternalLink, Building2, FileText, CheckCircle2 } from 'lucide-react';

export default function ResearchReferences() {
  return (
    <section id="research" className="section" style={{ background: 'rgba(5, 11, 20, 0.95)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} color="#00e5ff" />
            <span>INDUSTRY VERIFICATION & CITATIONS</span>
          </div>
          <h2 className="section-title">Research & References</h2>
          <p className="section-subtitle">
            Groundwork grounded in technical field visits to defense manufacturing centers and peer-reviewed ballistics literature.
          </p>
        </div>

        {/* Subsection 1 — Industry Visit YIL */}
        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', borderColor: '#00e5ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
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
                <Building2 size={24} color="#00e5ff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  {RESEARCH_DATA.yilVisit.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  {RESEARCH_DATA.yilVisit.subtitle} • <strong style={{ color: '#00e5ff' }}>{RESEARCH_DATA.yilVisit.date}</strong>
                </div>
              </div>
            </div>

            <span className="badge badge-teal">Field Verified</span>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 700, marginBottom: '0.6rem' }}>
              Key Insights & Technical Validation:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RESEARCH_DATA.yilVisit.takeaways.map((takeaway, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={16} color="#00e5ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {RESEARCH_DATA.yilVisit.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <span>{link.name}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Subsection 2 & 3 — Reference Documents & Datasheets */}
        <div className="grid-2">
          {/* Reference Papers */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <FileText size={20} color="#00e5ff" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                Reference Whitepapers & Standards
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {RESEARCH_DATA.references.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '0.9rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00e5ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
                >
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>{doc.name}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{doc.type}</div>
                  </div>
                  <ExternalLink size={16} color="#00e5ff" />
                </a>
              ))}
            </div>
          </div>

          {/* Component Datasheets */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <BookOpen size={20} color="#00e676" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                Open-Source Sensor Datasheets
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {RESEARCH_DATA.datasheets.map((ds, idx) => (
                <a
                  key={idx}
                  href={ds.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '0.9rem',
                    background: 'rgba(15, 23, 42, 0.7)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00e676')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
                >
                  <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>{ds.name}</div>
                  <ExternalLink size={16} color="#00e676" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

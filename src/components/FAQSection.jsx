import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/fuzeData';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="section" style={{ background: 'rgba(5, 11, 20, 0.85)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} color="#00e5ff" />
            <span>JUDGES & EVALUATORS Q&A</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Detailed answers addressing common technical queries regarding launch g-forces, EW resistance, retrofitting, and cost efficiency.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search questions (e.g., cost, g-force, GPS jamming)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.9rem 1.2rem 0.9rem 3rem',
              background: 'rgba(11, 23, 42, 0.9)',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.4rem 1.8rem',
                  borderColor: isOpen ? '#00e5ff' : 'rgba(255,255,255,0.08)',
                  background: isOpen ? 'rgba(11, 23, 42, 0.95)' : 'rgba(11, 23, 42, 0.6)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: isOpen ? '#00e5ff' : '#fff' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    color={isOpen ? '#00e5ff' : '#94a3b8'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

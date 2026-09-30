import React, { useState } from 'react';
import { Mail, Send, FileText, CheckCircle2, UserCheck, Code, Globe } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Judge / Evaluator', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(0, 229, 255, 0.1) 0%, rgba(5, 11, 20, 1) 80%)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} color="#00e5ff" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Contact & Next Steps</h2>
          <p className="section-subtitle">
            Interested in reviewing complete engineering schematics, testing the prototype, or collaborating? Reach out to the Lakshya Fuze SIH team.
          </p>
        </div>

        <div className="grid-2">
          
          {/* Left Column — Contact Info & Team Overview */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
                SIH Defense Innovation Team
              </h3>

              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                We are a multi-disciplinary engineering team specializing in embedded firmware, guidance mathematics, and aerodynamic mechanical prototyping.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { title: "Project Lead & Systems Architect", icon: UserCheck },
                  { title: "Embedded Firmware & Sensor Fusion Lead", icon: UserCheck },
                  { title: "AI Trajectory & Extended Kalman Filter Lead", icon: UserCheck },
                  { title: "Aerodynamic Hardware Prototyping Lead", icon: UserCheck }
                ].map((role, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#f8fafc', fontSize: '0.92rem' }}>
                    <role.icon size={18} color="#00e5ff" />
                    <span>{role.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub & Deck Links */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ flex: 1, padding: '0.75rem' }}
              >
                <Code size={18} />
                <span>GitHub Repository</span>
              </a>

              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); alert("Lakshya Fuze SIH Executive Summary & Deck Download Triggered."); }}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.75rem' }}
              >
                <FileText size={18} fill="#000" />
                <span>Download Deck (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
              Send a Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  background: 'rgba(0, 230, 118, 0.1)',
                  border: '1px solid #00e676',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={48} color="#00e676" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                  Message Received!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Thank you for reaching out to the Lakshya Fuze team. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Dr. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(5, 11, 20, 0.8)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@drdo.gov.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(5, 11, 20, 0.8)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Role / Category
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(5, 11, 20, 0.8)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Judge / Evaluator">SIH Judge / Evaluator</option>
                    <option value="Military Personnel">Military / Artillery Officer</option>
                    <option value="Defense Manufacturer">Defense Manufacturer (YIL / OFB)</option>
                    <option value="Academic Researcher">Academic Researcher</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide your feedback or collaboration query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(5, 11, 20, 0.8)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem' }}>
                  <Send size={18} fill="#000" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

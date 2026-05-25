import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : '');

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    color: 'var(--text-main)',
    padding: '12px 16px',
    fontSize: '0.92rem',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    letterSpacing: '0.3px'
  };

  const links = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'wglodkowska@gmail.com',
      href: 'mailto:wglodkowska@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/weronika-głódkowska',
      href: 'https://www.linkedin.com/in/weronika-g%C5%82%C3%B3dkowska-494870162/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'phrog-exe',
      href: 'https://github.com/phrog-exe'
    },
    {
      icon: '💬',
      label: 'Discord',
      value: 'phrogatron',
      href: 'https://discord.com/users/phrogatron'
    },
    {
      icon: '📍',
      label: 'Lokalizacja',
      value: 'Gdańsk, Polska',
      href: null
    },
  ];

  return (
    <div className="page-transition case-file">

      {/* NAGŁÓWEK */}
      <header className="section-box case-header" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>
              Kontakt
            </span>
            <h1 style={{ margin: 0, fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
              Napisz do mnie
            </h1>
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--accent-emerald)',
            background: 'rgba(16, 185, 129, 0.06)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontWeight: 500,
          }}>
            Szukam stażu / pracy juniorskiej
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* FORMULARZ */}
        <section className="section-box" style={{ flex: 1.5, minWidth: '300px', margin: 0, padding: '28px' }}>
          <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: '0 0 24px 0', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Wyślij wiadomość
          </h3>

          {status === 'success' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '10px', color: '#10b981', fontSize: '0.88rem' }}>
              ✅ Wiadomość wysłana! Odezwę się najszybciej jak mogę.
            </div>
          )}
          {status === 'error' && (
            <div style={{ marginBottom: '20px', padding: '14px 18px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '10px', color: '#ef4444', fontSize: '0.88rem' }}>
              ❌ Coś poszło nie tak. Spróbuj jeszcze raz lub napisz bezpośrednio na maila.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={labelStyle} htmlFor="contact-name">Imię / nick</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jak mam się do Ciebie zwracać?"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle} htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="twoj@email.pl"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle} htmlFor="contact-message">Wiadomość</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="W czym mogę pomóc albo co Cię interesuje?"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-purple))',
                color: '#fff',
                border: 'none',
                padding: '13px 24px',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                fontWeight: 600,
                borderRadius: '10px',
                fontSize: '0.9rem',
                opacity: status === 'sending' ? 0.7 : 1,
                transition: 'opacity 0.2s, transform 0.1s',
                letterSpacing: '0.3px'
              }}
            >
              {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość →'}
            </button>
          </form>
        </section>

        {/* DANE KONTAKTOWE */}
        <section className="section-box" style={{ flex: 1, minWidth: '240px', margin: 0, padding: '28px' }}>
          <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: '0 0 24px 0', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Znajdź mnie
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {links.map((l, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 14px',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: '10px',
                transition: 'border-color 0.2s'
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{l.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '2px', fontFamily: 'var(--font-mono)' }}>
                    {l.label}
                  </div>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noreferrer"
                      style={{ color: 'var(--accent-emerald)', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}
                    >
                      {l.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 500 }}>{l.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CV download */}
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
              padding: '12px',
              background: 'rgba(191,90,242,0.08)',
              border: '1px solid rgba(191,90,242,0.2)',
              borderRadius: '10px',
              color: 'var(--accent-purple)',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            📄 Pobierz CV
          </a>
        </section>

      </div>
    </div>
  );
}

export default Contact;

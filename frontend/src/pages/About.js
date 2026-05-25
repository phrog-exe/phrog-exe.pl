import React from 'react';

function About() {
  const timelineEvents = [
    {
      id: 1,
      date: '2023 – 2027',
      title: 'Studia — Informatyka w Gdańsku',
      subtitle: 'WSB Merito Gdańsk · Inżynieria oprogramowania',
      desc: 'Studia inżynierskie na kierunku Informatyka. Uczę się programowania obiektowego, baz danych i inżynierii oprogramowania — teorię staram się od razu przekuwać w praktyczne projekty.',
      status: 'in_progress'
    },
    {
      id: 2,
      date: '2025',
      title: 'Hackatony - Hack4Change & Global Game Jam',
      subtitle: 'Prototypowanie · Praca zespołowa · Agile',
      desc: 'Pierwsze zderzenie z kodowaniem pod presją czasu. Na GGJ zbudowałam od zera grę w 48h na temat "Bubbles". Przy Hack4Change praca w interdyscyplinarnym zespole z artystami i projektantami w środowisku Agile.',
      status: 'done'
    },
    {
      id: 3,
      date: '2025',
      title: 'Women in Tech Summit',
      subtitle: 'Konferencja branżowa · DevOps, Cloud, AI',
      desc: 'Udział w konferencji i warsztatach poświęconych infrastrukturze, automatyzacji, AGI i ML w chmurze. Rozmowy z inżynierami z wiodących firm — sporo wyniosłam zarówno technicznie, jak i networkingowo.',
      status: 'done'
    },
    {
      id: 4,
      date: '2026',
      title: 'Portfolio - React + FastAPI',
      subtitle: 'Własny projekt · Full-stack',
      desc: 'Migracja strony z czystego HTML/CSS na pełny stos: React na froncie, FastAPI + SQLite na backendzie. Projekt, przy którym zebrałam to wszystko w jednym miejscu.',
      status: 'active'
    }
  ];

  const pill = (label) => (
    <span style={{
      background: 'rgba(16, 185, 129, 0.06)',
      color: 'var(--accent-emerald)',
      border: '1px solid rgba(16, 185, 129, 0.12)',
      padding: '3px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontFamily: 'var(--font-mono)'
    }}>{label}</span>
  );

  const statusColor = (s) => ({
    active: { color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', label: 'aktywny' },
    in_progress: { color: 'var(--accent-purple)', bg: 'rgba(191,90,242,0.08)', border: 'rgba(191,90,242,0.2)', label: 'w toku' },
    done: { color: 'var(--text-muted)', bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.06)', label: 'ukończone' },
  }[s] || {});

  return (
    <div className="page-transition case-file">

     

      {/* DWUKOLUMNOWY PANEL */}
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginBottom: '25px' }}>

        {/* LEWA KOLUMNA: DANE */}
        <section className="section-box" style={{ flex: 1.5, minWidth: '300px', margin: 0 }}>
          <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: 0, borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Podstawowe informacje
          </h3>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>&gt; Imię:</span>
              <span className="censored-text" title="Najedź myszką, aby zobaczyć">Weronika G.</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>&gt; Uczelnia:</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>WSB Merito Gdańsk, 2023–2027</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>&gt; Fokus:</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Backend, DevOps, sieci domowe</span>
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>&gt; Języki:</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Polski (native) · Angielski (C1)</span>
            </div>
    
            <div style={{ display: 'flex' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>&gt; Prawo jazdy:</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Kategoria B</span>
            </div>
          </div>
        </section>

        {/* PRAWA KOLUMNA: DLA REKRUTERA */}
        <section className="section-box" style={{ flex: 1, minWidth: '220px', margin: 0, background: 'rgba(191,90,242,0.03)', border: '1px dashed rgba(191,90,242,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ background: 'var(--accent-purple)', color: '#fff', display: 'inline-block', padding: '4px 12px', margin: '0 0 18px 0', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Dla rekrutera
          </h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: '2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Szukam:</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>staż / junior</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Dostępność:</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>od zaraz</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Forma:</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>zdalna / hybryda / stacjonarnie na terenie Trójmiasta</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>GitHub:</span>
              <a href="https://github.com/phrog-exe" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', fontWeight: 600, textDecoration: 'none' }}>phrog-exe</a>
            </div>
          </div>
        </section>
      </div>

      {/* KURSY I CERTYFIKATY */}
      <section className="section-box" style={{ marginBottom: '25px' }}>
        <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: 0, borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Kursy i certyfikaty
        </h3>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { name: 'Vue.js: Building Modern and Efficient Applications', type: 'Szkolenie' },
            { name: 'Next-Gen Development: React & FastAPI', type: 'Szkolenie' },
          ].map((cert, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{cert.name}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', flexShrink: 0, marginLeft: '12px' }}>{cert.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-box" style={{ marginBottom: '25px' }}>
        <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: 0, borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Doświadczenie i aktywność
        </h3>

        <div style={{ marginTop: '30px', position: 'relative', paddingLeft: '20px' }}>
          <div style={{
            position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px',
            background: 'repeating-linear-gradient(to bottom, var(--accent-emerald), var(--accent-emerald) 4px, transparent 4px, transparent 8px)'
          }}></div>

          {timelineEvents.map((evt) => {
            const s = statusColor(evt.status);
            return (
              <div key={evt.id} style={{ position: 'relative', marginBottom: '25px' }}>
                <div style={{
                  position: 'absolute', left: '-19px', top: '5px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'var(--bg-primary)', border: '2px solid var(--accent-emerald)',
                  boxShadow: '0 0 8px var(--accent-emerald)'
                }}></div>

                <div style={{ marginLeft: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span style={{
                      fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)',
                      background: 'rgba(16, 185, 129, 0.08)', padding: '2px 8px', borderRadius: '4px',
                      border: '1px solid rgba(16, 185, 129, 0.15)'
                    }}>{evt.date}</span>
                    <span style={{
                      fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
                      color: s.color, background: s.bg, border: `1px solid ${s.border}`,
                      padding: '2px 8px', borderRadius: '10px'
                    }}>{s.label}</span>
                  </div>

                  <h4 style={{ margin: '4px 0 2px 0', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.3px' }}>
                    {evt.title}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                    {evt.subtitle}
                  </span>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {evt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section className="section-box">
        <h3 style={{ background: 'var(--accent-emerald)', color: '#07090e', display: 'inline-block', padding: '4px 12px', margin: 0, borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Technologie
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '25px' }}>

          <div style={{ border: '1px solid rgba(16,185,129,0.1)', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.01)' }}>
            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'block', marginBottom: '10px', fontWeight: 600 }}>Backend</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['C# .NET Core', 'Java', 'C++', 'Spring Boot', 'FastAPI'].map(pill)}
            </div>
          </div>

          <div style={{ border: '1px solid rgba(16,185,129,0.1)', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.01)' }}>
            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'block', marginBottom: '10px', fontWeight: 600 }}>Frontend</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['React.js', 'Vue.js', 'JavaScript', 'HTML / CSS'].map(pill)}
            </div>
          </div>

          <div style={{ border: '1px solid rgba(16,185,129,0.1)', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.01)' }}>
            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'block', marginBottom: '10px', fontWeight: 600 }}>Systemy & Sieci</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['Linux (Ubuntu / Kali)', 'MikroTik RouterOS', 'SQL', 'Zabbix', 'Graylog'].map(pill)}
            </div>
          </div>

          <div style={{ border: '1px solid rgba(16,185,129,0.1)', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.01)' }}>
            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'block', marginBottom: '10px', fontWeight: 600 }}>Narzędzia & Inne</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['Git', 'Docker', 'Maven', 'Agile / Scrum'].map(pill)}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;

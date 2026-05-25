import React from 'react';

function Home() {
  return (
    <div className="page-transition">
      <main className="section-box" style={{ 
        padding: '35px 40px', 
        minHeight: '628px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        
        {/* SEKCJA 1: SYSTEM PROFILE HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            fontSize: '0.72rem',
            color: 'var(--accent-emerald)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}>
            WSB Merito Gdańsk · 2023–2027
          </div>
          <h1 style={{ margin: 0, fontSize: '2.1rem', fontWeight: 800, letterSpacing: '-0.7px', color: 'var(--text-main)' }}>
            Cześć, jestem Weronika 🐸
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.95rem', fontWeight: 300, lineHeight: '1.5' }}>
            Backend · Home Lab · Game Dev · Hardware
          </p>
        </div>

        {/* SEKCJA 2: BIO DOSSIER */}
        <div style={{ 
          background: 'rgba(255,255,255,0.01)', 
          border: '1px solid rgba(255,255,255,0.03)', 
          borderRadius: '12px', 
          padding: '20px', 
          marginBottom: '20px' 
        }}>
          <h3 style={{ 
            color: 'var(--accent-emerald)', 
            marginTop: 0, 
            marginBottom: '10px',
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem', 
            letterSpacing: '1px', 
            textTransform: 'uppercase' 
          }}>
            O mnie
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.75', fontWeight: 400, margin: 0 }}>
            Po godzinach piszę kod, składam komputery znajomym i grzebię w domowej sieci. Interesuję się backendem - C#, Java, trochę game devu, ale też stroną sprzętową i sieciami. Tu wrzucam rzeczy, przy których się czegoś nauczyłam 🐸
          </p>
        </div>

        {/* SEKCJA 3: SYSTEM METRICS // STATUS MONITOR */}
        <div style={{ 
          background: 'rgba(191, 90, 242, 0.02)', 
          border: '1px solid rgba(191, 90, 242, 0.08)', 
          borderRadius: '12px', 
          padding: '20px', 
          marginBottom: '20px' 
        }}>
          <h3 style={{ 
            color: 'var(--accent-purple)', 
            marginTop: 0, 
            marginBottom: '12px',
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem', 
            letterSpacing: '1px', 
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ animation: 'blink 1.5s infinite', color: 'var(--accent-purple)' }}>●</span> 
            Stack tego portfolio
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem'
          }}>
            {/* ITEM 1: BACKEND API */}
            <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '8px', padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Backend:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>FastAPI v1.0</span>
                <span style={{ color: 'var(--accent-emerald)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ animation: 'blink 1.2s infinite' }}>●</span> ONLINE
                </span>
              </div>
            </div>
 
            {/* ITEM 2: DATABASE */}
            <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '8px', padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Baza danych:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>SQLite</span>
                <span style={{ color: 'var(--accent-emerald)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>●</span> ACTIVE
                </span>
              </div>
            </div>
 
            {/* ITEM 3: SERVER LOCATION */}
            <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '8px', padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Lokalizacja:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Gdańsk, PL</span>
                <span style={{ color: 'var(--accent-purple)', fontSize: '0.7rem' }}>WSB Merito</span>
              </div>
            </div>
 
            {/* ITEM 4: HARDWARE NODE */}
            <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '8px', padding: '10px 15px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Home Lab:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>MikroTik + RPi + PC</span>
                <span style={{ color: 'var(--accent-purple)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ animation: 'blink 2s infinite' }}>●</span> SECURE
                </span>
              </div>
            </div>
          </div>
        </div>
 
        {/* SEKCJA 4: DYNAMICZNY ZESTAW PROGRESS BAR */}
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.03)', 
          border: '1px solid rgba(16, 185, 129, 0.12)', 
          borderRadius: '12px', 
          padding: '20px', 
          marginBottom: '25px' 
        }}>
          <h3 style={{ 
            color: 'var(--accent-purple)', 
            marginTop: 0, 
            marginBottom: '4px',
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem', 
            letterSpacing: '1px', 
            textTransform: 'uppercase' 
          }}>
            🚀 Portfolio — migracja na nowy stos:
          </h3>
          
          <div style={{ 
            border: '1px solid rgba(191, 90, 242, 0.25)', 
            width: '100%', 
            height: '10px', 
            background: 'rgba(0, 0, 0, 0.55)', 
            margin: '12px 0 8px 0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #bf5af2, #00ff66)', 
              width: '95%', 
              height: '100%',
              borderRadius: '10px',
              boxShadow: '0 0 15px rgba(191, 90, 242, 0.45)',
              transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--text-muted)' }}>
              Postęp: <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>95% ukończone</span>
            </span>
            <span style={{ color: 'var(--accent-purple)' }}>
              React + FastAPI + SQLite — działa i to mi wystarczy 😄
            </span>
          </div>
        </div>

        {/* SEKCJA 5: ELEGANCKIE SOCIALS */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: 'var(--accent-emerald)', 
            marginBottom: '15px', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase' 
          }}>
            Znajdź mnie
          </h3>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/phrog-exe" className="socials" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', padding: '6px 16px' }}>
              GitHub
            </a>
            <a href="https://discord.com/users/phrogatron" className="socials" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', padding: '6px 16px' }}>
              Discord
            </a>
            <a href="https://instagram.com/phrog_xo" className="socials" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', padding: '6px 16px' }}>
              Instagram
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;

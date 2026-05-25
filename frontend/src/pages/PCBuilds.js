import React, { useState } from 'react';

function PCBuilds() {
  const [showLogs, setShowLogs] = useState({});

  const builds = [
    {
      id: 1,
      title: "Mój setup",
      objective: "Mój główny komputer do wszystkiego - nauka, programowanie, gry i ogólne użytkowanie. Zbudowany z myślą o balansie między wydajnością a ceną, bez przepłacania za to czego nie potrzebuję.",
      tuning: "RAM podbity do 6000 MHz CL32 przez XMP/EXPO w BIOSie. Krzywe wentylatorów dostrojone ręcznie - w spoczynku system jest praktycznie cichy, pod obciążeniem Kraken trzyma temperatury procesora w ryzach.",
      specs: {
        cpu: "Intel Core i5-13600K (13. gen, 3.5 GHz, 14C/20T)",
        gpu: "NVIDIA GeForce RTX 4060 8GB",
        ram: "32GB Kingston Fury Renegade RGB DDR5 6000MHz CL32",
        mobo: "ASRock B760 Pro RS",
        cooling: "NZXT Kraken Elite 360 AIO",
        psu: "SilentiumPC Vero L3 700W 80+ Bronze",
        case: "NZXT H9 Elite (szklana, dual-chamber)",
        custom: "Samsung 980 1TB M.2 NVMe + HDD jako dodatkowa przestrzeń"
      },
      image_url: "/assets/pc-builds/pc_build1.jpg",
      status: "Daily driver",
      view_logs: `Specyfikacja pełna:
──────────────────────────────────────────
CPU:      Intel Core i5-13600K (13. gen)
          14 rdzeni (6P + 8E) / 20 wątków
          Takt bazowy: 3.5 GHz, boost: do 5.1 GHz

GPU:      NVIDIA GeForce RTX 4060 8GB GDDR6
RAM:      32GB Kingston Fury Renegade RGB DDR5
          6000 MHz CL32 (XMP aktywny)

Płyta:    ASRock B760 Pro RS
Obudowa:  NZXT H9 Elite (dual-chamber, szkło hartowane)
Chłodz.:  NZXT Kraken Elite 360 AIO
Zasilacz: SilentiumPC Vero L3 700W 80+ Bronze

Pamięć masowa:
  M.2 NVMe: Samsung 980 1TB (system + programy)
  HDD:      dodatkowy dysk na dane

Łącznie zainstalowane: ~2.19TB`
    }
  ];

  const toggleBuildLogs = (id) => {
    setShowLogs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="page-transition case-file">
      {/* NAGŁÓWEK SEKCI PC BUILDS */}
      <header className="section-box case-header" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>
              Złożone komputery
            </span>
            <h1 style={{ margin: 0, fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
              PC Builds
            </h1>
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--accent-emerald)',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)'
          }}>
            Zbudowane przeze mnie
          </div>
        </div>
      </header>

      {/* LISTA ZBUDOWANYCH KOMPUTERÓW */}
      {builds.map((build) => (
        <section key={build.id} className="section-box" style={{ marginTop: '25px', padding: '25px' }}>
          
          {/* HEADER KARTY PC BUILD */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>&gt;</span> {build.title}
            </h3>
            
            {/* Status tuningowy komputera */}
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: build.status === 'STABLE_OC' ? '#10b981' : 'var(--accent-purple)',
              background: build.status === 'STABLE_OC' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(191, 90, 242, 0.08)',
              border: build.status === 'STABLE_OC' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(191, 90, 242, 0.2)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}>
              <span style={{ animation: 'blink 1.5s infinite', marginRight: '6px' }}>●</span>
              {build.status}
            </span>
          </div>

          {/* SYSTEM SPECYFIKACJI */}
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap-reverse' }}>
            
            {/* SPECYFIKACJE I CELE */}
            <div style={{ flex: 1.5, minWidth: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                    🎯 Cel / dla kogo:
                  </span>
                  <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {build.objective}
                  </p>
                </div>

                <div>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                    🔧 Tuning i optymalizacja:
                  </span>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {build.tuning}
                  </p>
                </div>

                {/* TABELA SPECYFIKACJI CZĘŚCI */}
                <div style={{ marginTop: '10px' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
                    📱 Specyfikacja:
                  </span>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '100px 1fr', 
                    gap: '8px 15px', 
                    fontSize: '0.82rem', 
                    fontFamily: 'var(--font-mono)', 
                    background: 'rgba(255,255,255,0.01)', 
                    border: '1px solid rgba(255,255,255,0.03)',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <span style={{ color: 'var(--accent-purple)' }}>CPU:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.cpu}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>GPU:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.gpu}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>RAM:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.ram}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>Płyta główna:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.mobo}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>Chłodzenie:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.cooling}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>Zasilacz:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.psu}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>Obudowa:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.case}</span>

                    <span style={{ color: 'var(--accent-purple)' }}>Modyfikacje:</span>
                    <span style={{ color: 'var(--text-main)' }}>{build.specs.custom}</span>
                  </div>
                </div>
              </div>

              {/* RETRO PRZYCISK OD LOGÓW STRESÓW */}
              <div style={{ marginTop: '25px' }}>
                <button 
                  onClick={() => toggleBuildLogs(build.id)} 
                  className="nav-link" 
                  style={{ 
                    fontSize: '0.8rem', 
                    background: 'transparent', 
                    cursor: 'pointer', 
                    fontFamily: 'var(--font-mono)', 
                    border: '1px solid var(--border-color)',
                    padding: '6px 14px' 
                  }}
                >
                  {showLogs[build.id] ? 'Ukryj wyniki benchmarków' : 'Wyniki benchmarków'}
                </button>
              </div>
            </div>

            {/* ZDJĘCIE MOCKUPA PC BUILD */}
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a 
                href={build.image_url} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  width: '100%', 
                  display: 'block', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  transition: 'all 0.3s ease'
                }}
                className="project-image"
              >
                <img 
                  src={build.image_url} 
                  alt={build.title} 
                  style={{ width: '100%', display: 'block', transition: 'all 0.4s ease' }} 
                />
              </a>
            </div>
          </div>

          {/* DANE DIAGNOSTYCZNE Z BENCHMARKÓW */}
          {showLogs[build.id] && (
            <div style={{ marginTop: '25px', width: '100%', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div className="center-wrapper" style={{ padding: '5px 0' }}>
                <div className="tech-specs-box">
                  <pre style={{ margin: 0, textAlign: 'left', fontSize: '0.8rem' }}>
                    {build.view_logs}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default PCBuilds;

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import podstron
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import PCBuilds from './pages/PCBuilds';
import Contact from './pages/Contact';

const API_BASE_URL = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : '');

// Interaktywny Żabo-Gotchi w panelu bocznym
function ZaboGotchi({ onTriggerFrog }) {
  const [hunger, setHunger] = useState(50); // 0 = hungry, 100 = full
  const [xp, setXp] = useState(10); // 0 to 100 to level up
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState('IDLE'); // 'IDLE', 'FEEDING', 'CODING', 'SLEEPING'
  const [log, setLog] = useState('Żabo-Gotchi v1.0: ONLINE // READY');

  const playSound = () => {
    const audio = new Audio('/assets/audio/retro-blip.mp3');
    audio.volume = 0.25;
    audio.play().catch((err) => console.log('Audio blocked:', err));
  };

  const handleFeed = () => {
    if (status !== 'IDLE') return;
    playSound();
    setStatus('FEEDING');
    setLog('*NOM NOM NOM* Feeding delicious cyber-fly...');
    setTimeout(() => {
      setHunger(prev => Math.min(prev + 25, 100));
      setStatus('IDLE');
      setLog('Fly consumed! Satiety replenished (+25).');
    }, 2000);
  };

  const handleCode = () => {
    if (status !== 'IDLE') return;
    if (hunger < 20) {
      setLog('WARNING: Too hungry to write code! Feed the frog!');
      return;
    }
    playSound();
    setStatus('CODING');
    setLog('Writing kernel module in assembly... *clack clack*');
    setTimeout(() => {
      setHunger(prev => Math.max(prev - 20, 0));
      setXp(prev => {
        const nextXp = prev + 30;
        if (nextXp >= 100) {
          setLevel(l => {
            const nextLvl = l + 1;
            setLog(`LEVEL UP! Frog is now Level ${nextLvl} Cyber-Coder!`);
            // Easter egg: Trigger daily frog draw on level up!
            if (onTriggerFrog) {
              onTriggerFrog(false);
            }
            return nextLvl;
          });
          return nextXp - 100;
        } else {
          setLog('Code compiled successfully! +30 XP gained.');
          return nextXp;
        }
      });
      setStatus('IDLE');
    }, 2500);
  };

  const handleSleep = () => {
    if (status !== 'IDLE') return;
    playSound();
    setStatus('SLEEPING');
    setLog('Entering deep sleep cycle... Zzz...');
    setTimeout(() => {
      setHunger(prev => Math.max(prev - 10, 0));
      setLog('Sleep complete! Energy fully recharged.');
      setStatus('IDLE');
    }, 3500);
  };

  const getAvatar = () => {
    switch (status) {
      case 'FEEDING':
        return '🪰 🐸 *MUNCH*';
      case 'CODING':
        return '💻 🐸 *MATRIX_MODE*';
      case 'SLEEPING':
        return '😴 🐸 *Zzz...*';
      default:
        if (hunger < 30) return '💀 🐸 *HUNGRY*';
        if (level >= 5) return '👑 🐸 *ARCH-CODER*';
        return '👾 🐸 *STATUS_OK*';
    }
  };

  return (
    <div className="cli-terminal" style={{ marginTop: '15px', padding: '18px', textAlign: 'left' }}>
      <div className="cli-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '12px' }}>
        <span>ŻABO-GOTCHI v1.0</span>
        <span style={{ color: status === 'SLEEPING' ? '#ff9800' : 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
          ● {status}
        </span>
      </div>

      {/* Ekranik Żabo-Gotchi */}
      <div style={{
        background: '#040711',
        border: '1px solid rgba(0, 255, 102, 0.15)',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.1rem',
        color: 'var(--accent-emerald)',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 0 0 15px rgba(0, 255, 102, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          animation: status !== 'IDLE' ? 'blink 0.8s infinite' : 'none',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          textShadow: '0 0 8px var(--accent-glow)',
          letterSpacing: '1px'
        }}>
          {getAvatar()}
        </div>

        {status === 'CODING' && (
          <div style={{
            fontSize: '0.62rem',
            color: 'rgba(0, 255, 102, 0.4)',
            marginTop: '5px',
            animation: 'blink 0.4s infinite'
          }}>
            01000110 01010010 01001111 01000110
          </div>
        )}
      </div>

      {/* Statystyki / Paski stanu */}
      <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-purple)' }}>
          <span>HACKER_LEVEL:</span>
          <span>LVL {level}</span>
        </div>

        {/* Sytość */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', color: 'var(--text-muted)' }}>
            <span>HUNGER (Sytość):</span>
            <span style={{ color: hunger < 35 ? '#ff4444' : 'var(--accent-emerald)' }}>{hunger}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: `${hunger}%`, height: '100%', background: hunger < 35 ? '#ff4444' : 'linear-gradient(90deg, #00ff66, #bf5af2)', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Doświadczenie */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', color: 'var(--text-muted)' }}>
            <span>CODER_XP (Doświadczenie):</span>
            <span>{xp}/100</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: `${xp}%`, height: '100%', background: 'linear-gradient(90deg, #bf5af2, #b026ff)', transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>

      {/* Logi systemowe */}
      <div style={{
        marginTop: '12px',
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.03)',
        borderRadius: '6px',
        padding: '8px 10px',
        fontSize: '0.72rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-muted)',
        minHeight: '34px',
        lineHeight: '1.3'
      }}>
        <span style={{ color: 'var(--accent-purple)' }}>&gt; </span>{log}
      </div>

      {/* Przyciski interakcji */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <button 
          onClick={handleFeed} 
          disabled={status !== 'IDLE'}
          className="retro-btn" 
          style={{ flex: 1, padding: '8px 4px', fontSize: '0.7rem', opacity: status !== 'IDLE' ? 0.4 : 1, minHeight: '34px' }}
        >
          FEED 🪰
        </button>
        <button 
          onClick={handleCode} 
          disabled={status !== 'IDLE'}
          className="retro-btn" 
          style={{ flex: 1, padding: '8px 4px', fontSize: '0.7rem', opacity: status !== 'IDLE' ? 0.4 : 1, minHeight: '34px' }}
        >
          CODE 💻
        </button>
        <button 
          onClick={handleSleep} 
          disabled={status !== 'IDLE'}
          className="retro-btn" 
          style={{ flex: 1, padding: '8px 4px', fontSize: '0.7rem', opacity: status !== 'IDLE' ? 0.4 : 1, minHeight: '34px' }}
        >
          SLEEP 😴
        </button>
      </div>
    </div>
  );
}

// Współdzielony komponent Żaby Dnia (Sidebar)
function Sidebar({ triggerFrogEvent, onResetTrigger }) {
  const [frog, setFrog] = useState({ name: '', file: '/assets/phrog.gif' });
  const [loading, setLoading] = useState(false);

  // Tablica zapasowa na wypadek offline
  const fallbackFrogs = [
    { name: "Żaba kapelusznik!", file: "/assets/frogs/f1.jpg" },
    { name: "Żaba czekająca na paczkę z Temu!", file: "/assets/frogs/f6.jpg" },
    { name: "Żaba księżniczka!", file: "/assets/frogs/f7.jpg" },
    { name: "Żabka wiedźma!", file: "/assets/frogs/f8.jpg" },
    { name: "Żabka gentleman!", file: "/assets/frogs/f9.jpg" },
    { name: "Kowbojska żabka!", file: "/assets/frogs/f10.jpg" },
    { name: "Żabka wróżka grająca serenadę!", file: "/assets/frogs/f11.jpg" },
    { name: "Żabka kąpielowa!", file: "/assets/frogs/f12.jpg" },
    { name: "Żabka skater!", file: "/assets/frogs/f13.jpg" },
    { name: "Żabalarz!", file: "/assets/frogs/f14.jpg" },
    { name: "Żabka urodzinowa!", file: "/assets/frogs/f15.jpg" },
    { name: "Żabka grająca w lola!", file: "/assets/frogs/f16.jpg" },
    { name: "Żaba skoczek!", file: "/assets/frogs/skok.gif" },
    { name: "Żaba tancerz!", file: "/assets/frogs/taniec.gif" },
  ];

  const playBlip = () => {
    const audio = new Audio('/assets/audio/retro-blip.mp3');
    audio.volume = 0.25;
    audio.play().catch((err) => console.log('Audio playback blocked:', err));
  };

  const pickFrog = (silent = false) => {
    setLoading(true);
    if (!silent) {
      playBlip();
    }
    fetch(`${API_BASE_URL}/api/frogs/random`)
      .then((res) => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then((data) => {
        setFrog({ name: 'Twój patron: ' + data.name, file: data.file });
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Backend API offline, losuję żabę lokalnie:', err);
        const randomIndex = Math.floor(Math.random() * fallbackFrogs.length);
        const randomFrog = fallbackFrogs[randomIndex];
        setFrog({ name: 'Twój patron: ' + randomFrog.name, file: randomFrog.file });
        setLoading(false);
      });
  };

  // Reagowanie na wywołanie z terminala CLI
  useEffect(() => {
    if (triggerFrogEvent) {
      pickFrog(false);
      onResetTrigger();
    }
  }, [triggerFrogEvent]);

  return (
    <aside className="section-box side-panel" style={{ flex: 1.4, minWidth: '330px' }}>
      <h2 style={{ color: 'var(--accent-emerald)', marginTop: 0, fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
        Żaba Dnia
      </h2>
      <div id="frog-container" style={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
        <img 
          id="random-frog" 
          src={frog.file} 
          alt="Frog of the day" 
          style={{ 
            opacity: loading ? 0.5 : 1, 
            transition: 'opacity 0.2s',
            width: '100%',
            height: 'auto',
            borderRadius: '12px'
          }}
        />
      </div>
      <p id="frog-name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', minHeight: '40px', margin: '5px 0', fontFamily: 'var(--font-mono)' }}>
        {frog.name}
      </p>
      <button onClick={() => pickFrog(false)} className="retro-btn" style={{ width: '100%' }}>
        LOSUJ! 🐸
      </button>

      {/* Interaktywny Żabo-Gotchi w panelu bocznym */}
      <ZaboGotchi onTriggerFrog={pickFrog} />
    </aside>
  );
}

function App() {
  const [navActive, setNavActive] = useState(false);
  const [triggerFrog, setTriggerFrog] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Śledzenie myszki dla luksusowego efektu poświaty (Mouse-Glow)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleNav = () => {
    setNavActive(prev => !prev);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <Router>
      {/* Element świetlny podążający za kursorem */}
      <div className="mouse-glow" style={{ left: mousePos.x, top: mousePos.y }}></div>

      <div id="main-container">
        <nav>
          <button 
            id="menu-toggle" 
            className="menu-btn"
            onClick={toggleNav}
          >
            ACCESS_MENU_
          </button>
          <ul id="nav-list" className={navActive ? 'active' : ''}>
            <li>
              <NavLink to="/" onClick={closeNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeNav}>About Me</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/pc-builds" onClick={closeNav}>PC Builds</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeNav}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ 
          border: '1px solid var(--border-color)', 
          color: 'var(--accent-emerald)', 
          padding: '8px 16px', 
          marginBottom: '25px', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.82rem', 
          borderRadius: '8px', 
          background: 'rgba(0, 255, 102, 0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          boxShadow: '0 4px 15px rgba(0, 255, 102, 0.02)'
        }}>
          <span>&gt; SYSTEM_STATUS: OPERATIONAL // 6_PROJECTS_LOADED</span>
          
        </div>

        <Routes>
          <Route path="/" element={
            <div className="content-wrapper" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap-reverse' }}>
              <Sidebar triggerFrogEvent={triggerFrog} onResetTrigger={() => setTriggerFrog(false)} />
              <div style={{ flex: 3, minWidth: '300px' }}>
                <Home />
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pc-builds" element={<PCBuilds />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="section-box" style={{ marginTop: '20px', textAlign: 'center' }}>
          Phrogramer Network™ 2026
        </footer>
      </div>
    </Router>
  );
}

export default App;

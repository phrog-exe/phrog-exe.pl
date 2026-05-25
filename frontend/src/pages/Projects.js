import React, { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : '');

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogs, setShowLogs] = useState({});
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'

  const fallbackProjects = [
    {
      id: 1,
      title: "WordPress w chmurze — Google Cloud + Docker",
      objective: "Postawienie bloga na WordPressie na maszynie wirtualnej w Google Cloud — od zera, bez gotowych tutoriali.",
      method: "Całe środowisko (WordPress + MySQL + phpMyAdmin) skonteneryzowałam za pomocą Docker Compose na instancji Compute Engine. Napisałam też reguły zapory sieciowej (Firewall) w GCP ręcznie.",
      strike_team: "Projekt indywidualny — sama konfigurowałam instancję, sieć i kontenery.",
      tech_stack: "Docker, Docker Compose, GCP Compute Engine, MySQL, phpMyAdmin, Git",
      source_code: "https://github.com/phrog-exe/Przetwarzanie-rozproszone",
      live_link: "http://34.171.210.147",
      image_url: "/assets/projects/projekt1.png",
      status: "Aktywny",
      view_logs: ""
    },
    {
      id: 2,
      title: "Retro stacja TV na Raspberry Pi + CRT",
      objective: "Zamiana starego telewizora kineskopowego Philips w działającą retro stację TV — z własnym harmonogramem emisji i analogowym sygnałem wideo.",
      method: "Na Raspberry Pi 3B+ postawiłam serwer ErsatzTV, który emuluje klasyczną telewizję kablową w formacie 4:3. Całość chodzi pod LibreELEC.",
      hardware_mod: "Połączenie przez kabel TRRS-RCA (Composite Video) + ręczna kalibracja geometrii obrazu PAL w config.txt Raspberry Pi, żeby obraz idealnie wypełniał szkło CRT.",
      tech_stack: "Raspberry Pi, LibreELEC, ErsatzTV, Linux, Composite Video, PAL",
      source_code: "",
      live_link: "",
      image_url: "/assets/projects/projekt2.jpeg",
      status: "SIGNAL_STABLE",
      view_logs: `============================================================
PROJECT: RETRO_BROADCAST_STATION_V1.0
HARDWARE: Raspberry Pi 3 Model B+
DISPLAY: Philips CRT (Cathode Ray Tube) via Composite Video
============================================================

[1. VIDEO SIGNAL CONFIGURATION]
Standard: PAL (Phase Alternating Line)
Interface: 3.5mm TRRS (Jack) to 3-RCA
Status: Operational / Stable

Config.txt Parameters (RPI 3B+ Specific):
-----------------------------------------
# Forcing analog output and PAL standard:
sdtv_mode=2                  # 2 = PAL Standard (576i)
sdtv_aspect=1                # 1 = 4:3 Aspect Ratio
disable_overscan=1           # Ensures edge-to-edge coverage
audio_pwm_mode=2             # High-quality analog audio mode

[2. SOFTWARE STACK]
Server: ErsatzTV (FFmpeg-based scheduling)
Transcoding Profile: 720x576 (Native PAL Resolution)
Scaling Behavior: CROP (Removes modern 16:9 pillarboxing)
OS: LibreELEC / Kodi Matrix

[3. CALIBRATION & UI]
UI Skin: Quartz (Optimized for low-res CRT readability)
Pixel Ratio: 1.000 (Adjusted for non-square CRT pixels)
Overscan: Manually calibrated to match physical glass frame

[4. NOTES]
- Successfully managed TRRS pinout for vintage RCA input.
- Audio signal forced via analog PWM to bypass HDMI handshake.
- Auto-execution script deployed for "Instant-On" TV experience.

============================================================
END OF SPECIFICATION - 2026_EDITION
============================================================`
    },
    {
      id: 3,
      title: "PROJECT_03: SECURE_NETWORK_INFRASTRUCTURE",
      objective: "Postawienie bezpiecznej sieci domowej z własnym, szybkim tunelem VPN.",
      method: "Uruchomienie serwera WireGuard na routerze głównym z obsługą dynamicznego DNS i przekierowaniem portów.",
      hardware_mod: "Główny router MikroTik hEX spięty z modemem ISP w trybie Bridge. Do tego twarde reguły Firewall w RouterOS chroniące sieć przed skanowaniem portów.",
      tech_stack: "MIKROTIK_ROUTEROS, WIREGUARD_VPN, DDNS_CLOUD, FIREWALL_FILTER, PORT_FORWARDING",
      source_code: "",
      live_link: "",
      image_url: "/assets/projects/projekt3.png",
      status: "SIGNAL_STABLE",
      view_logs: `============================================================
PROJECT: SECURE_NETWORK_INFRASTRUCTURE_V1.0
HARDWARE: MikroTik hEX (RB750Gr3) // RouterOS v7
VPN PROTOCOL: WireGuard (Kernel-level Encryption)
============================================================

[1. WIREGUARD SERVER CONFIGURATION]
Interface Name: wireguard1
Listen Port: 13231 (UDP)
Listen Port: 13231 (UDP)
MTU: 1420
Private Key: [ENCRYPTED]
Public Key:  [GENERATED]
IP Address: 10.0.0.1/24

[2. DYNAMIC DNS (DDNS)]
MikroTik IP Cloud: Enabled
DDNS Hostname: 82a17df9c20a.sn.mynetname.net
Status: Synchronized / WAN IP Auto-Updated

[3. FIREWALL RULES (ROUTEROS /IP FIREWALL FILTER)]
/ip firewall filter
add chain=input action=accept protocol=udp dst-port=13231 comment="Allow WireGuard VPN"
add chain=input action=accept src-address=10.0.0.0/24 comment="Allow VPN Clients access"
add chain=input action=drop comment="Drop all other input"

[4. ROUTING & NAT CONFIGURATION]
Play Gateway (WAN): Kaon/Sagemcom -> Port Forward UDP 13231 to MikroTik
Internal DNS Server: 192.168.88.253 (Pi-hole) Distributed via DHCP Option 6

============================================================
END OF SPECIFICATION - 2026_EDITION
============================================================`
    },
    {
      id: 4,
      title: "PROJECT_04: PI_HOLE_DNS_SINKHOLE",
      objective: "Wycięcie reklam i telemetrii w całej sieci domowej za pomocą tzw. czarnej dziury DNS.",
      method: "Postawienie Pi-hole zainstalowanego na Raspberry Pi jako lokalnego serwera DNS z zaawansowanymi filtrami wyrażeń regularnych.",
      hardware_mod: "Konfiguracja serwera DHCP na MikroTiku, aby automatycznie rozsyłał adres Pi-hole jako jedyny DNS. Do tego skrypt bashowy sprawdzający co minutę czy demon DNS nie padł.",
      tech_stack: "RASPBERRY_PI, PI_HOLE, MIKROTIK_DHCP, BASH_SHELL, DNS_FILTER",
      source_code: "",
      live_link: "",
      image_url: "/assets/projects/projekt4.png",
      status: "ACTIVE",
      view_logs: `============================================================
PROJECT: PI_HOLE_DNS_SINKHOLE_V5.0
HARDWARE: Raspberry Pi 3 Model B (Debian / Linux)
SOFTWARE: Pi-hole core (FTL engine enabled)
============================================================

[1. NETWORK INTERFACE CONFIGURATION]
IP Address: 192.168.88.253 (Static)
Gateway: 192.168.88.1 (MikroTik hEX)
Netmask: 255.255.255.0
Interface: eth0 (Gigabit Ethernet)
DNS Port: 53 (TCP/UDP)

[2. ADLISTS & REGEX FILTERING]
Total Blocklist Domains (Gravity): 428,506
Poland Specific Adlists: Polish AdBlock List, KAD
RegEx Rules Deployed: 14 (Blocks dynamic telemetries & adservers)

[3. UPSTREAM DNS SERVER]
Primary: 1.1.1.1 (Cloudflare DNSSEC Enabled)
Secondary: 9.9.9.9 (Quad9 Malware Blocking Enabled)

[4. MAINTENANCE SCRIPTS (BASH CRONTAB)]
# /etc/cron.d/pihole-update
30 3 * * 7 root /usr/local/bin/pihole -g > /var/log/pihole_gravity.log
# /usr/local/bin/monitor_dns.sh
* * * * * if ! systemctl is-active --quiet pihole-FTL; then systemctl restart pihole-FTL; fi

============================================================
END OF SPECIFICATION - 2026_EDITION
============================================================`
    },
    {
      id: 5,
      title: "PROJECT_05: BANKING_DECISION_ENGINE",
      objective: "Uruchomienie inteligentnego silnika decyzyjnego dla kredytów w ramach zadania rekrutacyjnego na staż.",
      method: "Stworzenie mikroserwisów oprogramowania (Spring Boot w Javie 21 + Vue.js 3 na froncie) optymalizujących maksymalną kwotę pożyczki w oparciu o algorytm scoringowy.",
      strike_team: "Sama napisałam pełną logikę biznesową i testy jednostkowe. Fajna lekcja o tym, jak pisać testy badające intencję wymagań, a nie tylko brak błędów w kodzie.",
      tech_stack: "JAVA, SPRING_BOOT, VUE_JS, VITE, MAVEN, REST_API",
      source_code: "https://github.com/phrog-exe/banking-decision-engine",
      live_link: "",
      image_url: "/assets/projects/projekt5.png",
      status: "ACTIVE",
      view_logs: `============================================================
PROJECT: BANKING_DECISION_ENGINE_V1.0
BACKEND: Spring Boot REST API (Java 21) // Maven
FRONTEND: Vue.js 3 + Vite 5 (Responsive Single-Page App)
============================================================

[1. CORE LOAN ALGORITHM]
Scoring Formula:
credit_score = (credit_modifier / loan_amount) * loan_period

Rearranged for maximum possible approvable amount:
amount = modifier * period (always returns the actual max limit)

[2. TRANSACTION PIPELINE]
GET /api/loan/check
Query params: personal_code, amount, period
Response payload: { approved: boolean, amount: float, period: integer }

Rules:
- Strict validation: amount €2000 - €10000, period 12 - 60 months.
- Reject instantly if applicant has existing debt (e.g. personal code 49002010965).
- Search all periods (12 to 60) dynamically if the requested period fails.

[3. UNIT TESTS SPECIFICATION]
Framework: JUnit 5 + MockMvc
Test cases written: 14 (validating edge constraints, scoring limits, debt checks)
Debug note: Fixed loop search stopping at first threshold instead of absolute maximum.

============================================================
END OF SPECIFICATION - 2026_EDITION
============================================================`
    },
    {
      id: 6,
      title: "PROJECT_06: DUNGEON_ARCHITECT",
      objective: "Budowa desktopowego narzędzia do proceduralnego generowania lochów i labiryntów dla gier roguelike.",
      method: "Implementacja w języku C# autorskiego algorytmu podziału przestrzeni (BSP - Binary Space Partitioning) połączonego z algorytmem błądzenia losowego (Random Walk).",
      strike_team: "Samodzielny projekt desktopowy. Oprogramowałam pełną logikę generowania pokoi, korytarzy oraz optymalizację renderowania siatki 2D.",
      tech_stack: "C_SHARP, NET_CORE, PROCEDURAL_GENERATION, BSP_ALGORITHM, GAME_DEV",
      source_code: "https://github.com/phrog-exe/Dungeon-architect",
      live_link: "",
      image_url: "/assets/projects/projekt6.png",
      status: "ACTIVE",
      view_logs: `============================================================
PROJECT: DUNGEON_ARCHITECT_V1.0
ENVIRONMENT: .NET Core Desktop Core // C# 10
RENDER ENGINE: 2D Grid Rasterization Engine
============================================================

[1. PROCEDURAL GENERATION PIPELINE]
Primary Algorithm: BSP (Binary Space Partitioning)
- Recursive subdivision of space down to min room size.
- Guaranteed room separation and corridor connectivity.
Secondary Algorithm: Cellular Automata (Cave Generation mode)
- 4-5 rule for organic wall smoothing.
- Post-processing flood fill to remove isolated sub-caves.

[2. GRID UTILITIES]
Map Size Limits: 32x32 to 128x128 tiles
Tile Types: WALL, FLOOR, DOOR, CORRIDOR, START, EXIT
Performance: Generates a fully connected 64x64 dungeon in < 5ms.

[3. IMPLEMENTATION DETAILS]
- Graph-based path connectivity using A* search for corridor validation.
- Random seed synchronization for reproducible map layouts.
- Native WinForms/WPF layout visualizer for direct test runs.

============================================================
END OF SPECIFICATION - 2026_EDITION
============================================================`
    }
  ];

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Nie udało się połączyć z API backendu, ładuję projekty lokalne:", err);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  const toggleProjectLogs = (id) => {
    setShowLogs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOrder === 'newest') {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  if (loading) {
    return (
      <main className="section-box" style={{ textAlign: 'center', padding: '60px' }}>
        <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--accent-emerald)' }}>
          Ładowanie projektów...
        </h2>
        <div style={{ animation: 'blink 1s infinite', fontSize: '2rem', color: 'var(--accent-emerald)', marginTop: '10px' }}>●</div>
      </main>
    );
  }

  return (
    <div className="page-transition case-file">
      {/* NAGŁÓWEK SEKCI PROJEKTÓW */}
      <header className="section-box case-header" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>
              Moje projekty
            </span>
            <h1 style={{ margin: 0, fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
              Projekty
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Przycisk wyboru sortowania w stylu terminala */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '4px 10px', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SORT:</span>
              <button 
                onClick={() => setSortOrder('newest')} 
                style={{
                  background: sortOrder === 'newest' ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                  color: sortOrder === 'newest' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  border: sortOrder === 'newest' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                Najnowsze
              </button>
              <button 
                onClick={() => setSortOrder('oldest')} 
                style={{
                  background: sortOrder === 'oldest' ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                  color: sortOrder === 'oldest' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  border: sortOrder === 'oldest' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                Najstarsze
              </button>
            </div>

            <div style={{
              fontSize: '0.8rem',
              color: 'var(--accent-purple)',
              background: 'rgba(191, 90, 242, 0.08)',
              border: '1px solid rgba(191, 90, 242, 0.2)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)'
            }}>
              Aktywne
            </div>
          </div>
        </div>
      </header>

      {/* LISTA PROJEKTÓW W LUKSUSOWYM GRILLU */}
      {sortedProjects.map((proj) => (
        <section key={proj.id} className="section-box" style={{ marginTop: '25px', padding: '25px' }}>
          
          {/* HEADER KARTY PROJEKTU */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>&gt;</span> {proj.title}
            </h3>
            
            {/* Status w postaci nowoczesnej kapsułki z poświatą */}
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: proj.status === 'ACTIVE' ? '#10b981' : 'var(--accent-purple)',
              background: proj.status === 'ACTIVE' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(191, 90, 242, 0.08)',
              border: proj.status === 'ACTIVE' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(191, 90, 242, 0.2)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}>
              <span style={{ animation: 'blink 1.5s infinite', marginRight: '6px' }}>●</span>
              {proj.status}
            </span>
          </div>

          {/* DANE PROJEKTU (DWUKOLUMNOWY UKŁAD ZDJĘCIE / SPECYFIKACJA) */}
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap-reverse' }}>
            
            {/* KOLUMNA LEWA: SPECYFIKACJA TECHNICZNA */}
            <div style={{ flex: 1.5, minWidth: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                    🎯 Co to jest:
                  </span>
                  <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {proj.objective}
                  </p>
                </div>

                <div>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                    ⚙️ Jak to zrobiłam:
                  </span>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {proj.method}
                  </p>
                </div>

                {proj.strike_team && (
                  <div>
                    <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                      Rola / mój udział:
                    </span>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {proj.strike_team}
                    </p>
                  </div>
                )}

                {proj.hardware_mod && (
                  <div>
                    <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                      🔌 Hardware:
                    </span>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {proj.hardware_mod}
                    </p>
                  </div>
                )}

                <div style={{ marginTop: '5px' }}>
                  <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>
                    🚀 Technologie:
                  </span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {proj.tech_stack && proj.tech_stack.split(',').map((tech, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(16, 185, 129, 0.06)',
                        color: 'var(--accent-emerald)',
                        border: '1px solid rgba(16, 185, 129, 0.12)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* LINKI DO PROJEKTU */}
              <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {proj.source_code && (
                  <a href={proj.source_code} className="nav-link" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  [ Kod źródłowy ]
                  </a>
                )}
                {proj.live_link && (
                  <a href={proj.live_link} className="nav-link" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  [ Live ]
                  </a>
                )}
                {proj.view_logs && (
                  <button 
                    onClick={() => toggleProjectLogs(proj.id)} 
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
                    {showLogs[proj.id] ? 'Ukryj szczegóły techniczne' : 'Szczegóły techniczne'}
                  </button>
                )}
              </div>
            </div>

            {/* KOLUMNA PRAWA: PREMIUM PREVIEW OBRAZKA */}
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a 
                href={proj.image_url} 
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
                  src={proj.image_url} 
                  alt={proj.title} 
                  style={{ width: '100%', display: 'block', transition: 'all 0.4s ease' }} 
                />
              </a>
            </div>
          </div>

          {/* PRZESTRZEŃ TERMINALOWA DLA SZCZEGÓŁOWYCH LOGÓW (TV CRT) */}
          {proj.view_logs && showLogs[proj.id] && (
            <div style={{ marginTop: '25px', width: '100%', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div className="center-wrapper" style={{ padding: '5px 0' }}>
                <div className="tech-specs-box">
                  <pre style={{ margin: 0, textAlign: 'left' }}>
                    {proj.view_logs}
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

export default Projects;

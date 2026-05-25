from sqlalchemy.orm import Session
from .models import Frog, Project

def seed_data(db: Session):
    # 1. ZASIEWANIE ŻAB (FROGS)
    if db.query(Frog).count() == 0:
        frogs = [
            {"name": "Żaba kapelusznik!", "file": "/assets/frogs/f1.jpg"},
            {"name": "Żaba czekająca na paczkę z Temu!", "file": "/assets/frogs/f6.jpg"},
            {"name": "Żaba księżniczka!", "file": "/assets/frogs/f7.jpg"},
            {"name": "Żabka wiedźma!", "file": "/assets/frogs/f8.jpg"},
            {"name": "Żabka gentleman!", "file": "/assets/frogs/f9.jpg"},
            {"name": "Kowbojska żabka!", "file": "/assets/frogs/f10.jpg"},
            {"name": "Żabka wróżka grająca serenadę!", "file": "/assets/frogs/f11.jpg"},
            {"name": "Żabka kąpielowa!", "file": "/assets/frogs/f12.jpg"},
            {"name": "Żabka skater!", "file": "/assets/frogs/f13.jpg"},
            {"name": "Żabalarz!", "file": "/assets/frogs/f14.jpg"},
            {"name": "Żabka urodzinowa!", "file": "/assets/frogs/f15.jpg"},
            {"name": "Żabka grająca w lola!", "file": "/assets/frogs/f16.jpg"},
            {"name": "Żaba skoczek!", "file": "/assets/frogs/skok.gif"},
            {"name": "Żaba tancerz!", "file": "/assets/frogs/taniec.gif"},
        ]
        
        for f in frogs:
            db.add(Frog(name=f["name"], file=f["file"]))
        db.commit()
        print("Baza danych: Pomyślnie zasiano tablicę żab (Frogs)!")

    # 2. ZASIEWANIE I AKTUALIZACJA PROJEKTÓW (PROJECTS)
    p2_logs = """============================================================
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
============================================================
"""

    p3_logs = """============================================================
PROJECT: SECURE_NETWORK_INFRASTRUCTURE_V1.0
HARDWARE: MikroTik hEX (RB750Gr3) // RouterOS v7
VPN PROTOCOL: WireGuard (Kernel-level Encryption)
============================================================

[1. WIREGUARD SERVER CONFIGURATION]
Interface Name: wireguard1
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
============================================================
"""

    p4_logs = """============================================================
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
============================================================
"""

    p5_logs = """============================================================
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
============================================================
"""

    p6_logs = """============================================================
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
============================================================
"""

    projects_list = [
        {
            "title": "PROJECT_01: CLOUD_INFRASTRUCTURE",
            "objective": "Postawienie bloga opartego o WordPressa na maszynie wirtualnej w chmurze Google Cloud.",
            "method": "Konteneryzacja całego środowiska (WordPress + baza MySQL + panel phpMyAdmin) za pomocą Docker Compose.",
            "strike_team": "Sama konfigurowałam instancję Compute Engine od zera i pisałam reguły zapory sieciowej (Firewall).",
            "tech_stack": "DOCKER, GCP_COMPUTE_ENGINE, MYSQL, GIT",
            "source_code": "https://github.com/phrog-exe/Przetwarzanie-rozproszone",
            "live_link": "http://34.171.210.147",
            "image_url": "/assets/projects/projekt1.png",
            "status": "ACTIVE",
            "view_logs": ""
        },
        {
            "title": "PROJECT_02: RETRO_BROADCAST_STATION",
            "objective": "Odpalenie własnej „retro stacji TV” na starym kineskopowym telewizorze Philips (CRT).",
            "method": "Postawiłam serwer ErsatzTV na Raspberry Pi, który emuluje klasyczną telewizję kablową w formacie 4:3.",
            "hardware_mod": "Trochę zabawy z kablami TRRS-RCA (Composite Video) i kalibracja geometrii ekranu w configu Maliny, żeby obraz PAL idealnie mieścił się na szkle.",
            "tech_stack": "RASPBERRY_PI, LIBREELEC, ERSATZTV, LINUX_CONFIG, COMPOSITE_VIDEO",
            "source_code": "",
            "live_link": "",
            "image_url": "/assets/projects/projekt2.jpeg",
            "status": "SIGNAL_STABLE",
            "view_logs": p2_logs
        },
        {
            "title": "PROJECT_03: SECURE_NETWORK_INFRASTRUCTURE",
            "objective": "Postawienie bezpiecznej sieci domowej z własnym, szybkim tunelem VPN.",
            "method": "Uruchomienie serwera WireGuard na routerze głównym z obsługą dynamicznego DNS i przekierowaniem portów.",
            "hardware_mod": "Główny router MikroTik hEX spięty z modemem ISP w trybie Bridge. Do tego twarde reguły Firewall w RouterOS chroniące sieć przed skanowaniem portów.",
            "tech_stack": "MIKROTIK_ROUTEROS, WIREGUARD_VPN, DDNS_CLOUD, FIREWALL_FILTER, PORT_FORWARDING",
            "source_code": "",
            "live_link": "",
            "image_url": "/assets/projects/projekt3.png",
            "status": "SIGNAL_STABLE",
            "view_logs": p3_logs
        },
        {
            "title": "PROJECT_04: PI_HOLE_DNS_SINKHOLE",
            "objective": "Wycięcie reklam i telemetrii w całej sieci domowej za pomocą tzw. czarnej dziury DNS.",
            "method": "Postawienie Pi-hole zainstalowanego na Raspberry Pi jako lokalnego serwera DNS z zaawansowanymi filtrami wyrażeń regularnych.",
            "hardware_mod": "Konfiguracja serwera DHCP na MikroTiku, aby automatycznie rozsyłał adres Pi-hole jako jedyny DNS. Do tego skrypt bashowy sprawdzający co minutę czy demon DNS nie padł.",
            "tech_stack": "RASPBERRY_PI, PI_HOLE, MIKROTIK_DHCP, BASH_SHELL, DNS_FILTER",
            "source_code": "",
            "live_link": "",
            "image_url": "/assets/projects/projekt4.png",
            "status": "ACTIVE",
            "view_logs": p4_logs
        },
        {
            "title": "PROJECT_05: BANKING_DECISION_ENGINE",
            "objective": "Uruchomienie inteligentnego silnika decyzyjnego dla kredytów w ramach zadania rekrutacyjnego na staż.",
            "method": "Stworzenie mikroserwisów oprogramowania (Spring Boot w Javie 21 + Vue.js 3 na froncie) optymalizujących maksymalną kwotę pożyczki w oparciu o algorytm scoringowy.",
            "strike_team": "Sama napisałam pełną logikę biznesową i testy jednostkowe. Fajna lekcja o tym, jak pisać testy badające intencję wymagań, a nie tylko brak błędów w kodzie.",
            "tech_stack": "JAVA, SPRING_BOOT, VUE_JS, VITE, MAVEN, REST_API",
            "source_code": "https://github.com/phrog-exe/banking-decision-engine",
            "live_link": "",
            "image_url": "/assets/projects/projekt5.png",
            "status": "ACTIVE",
            "view_logs": p5_logs
        },
        {
            "title": "PROJECT_06: DUNGEON_ARCHITECT",
            "objective": "Budowa desktopowego narzędzia do proceduralnego generowania lochów i labiryntów dla gier roguelike.",
            "method": "Implementacja w języku C# autorskiego algorytmu podziału przestrzeni (BSP - Binary Space Partitioning) połączonego z algorytmem błądzenia losowego (Random Walk).",
            "strike_team": "Samodzielny projekt desktopowy. Oprogramowałam pełną logikę generowania pokoi, korytarzy oraz optymalizację renderowania siatki 2D.",
            "tech_stack": "C_SHARP, NET_CORE, PROCEDURAL_GENERATION, BSP_ALGORITHM, GAME_DEV",
            "source_code": "https://github.com/phrog-exe/Dungeon-architect",
            "live_link": "",
            "image_url": "/assets/projects/projekt6.png",
            "status": "ACTIVE",
            "view_logs": p6_logs
        }
    ]

    for proj in projects_list:
        existing = db.query(Project).filter(Project.title == proj["title"]).first()
        if not existing:
            db_proj = Project(
                title=proj["title"],
                objective=proj["objective"],
                method=proj["method"],
                strike_team=proj.get("strike_team", ""),
                hardware_mod=proj.get("hardware_mod", ""),
                tech_stack=proj["tech_stack"],
                source_code=proj["source_code"],
                live_link=proj["live_link"],
                image_url=proj["image_url"],
                status=proj["status"],
                view_logs=proj["view_logs"]
            )
            db.add(db_proj)
            db.commit()
            print(f"Baza danych: Pomyślnie zasiano/zaktualizowano projekt {proj['title']}!")


// Czekamy, aż cała strona się załaduje
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active'); // Przełącza klasę widoczności
        });
    }
});

// losowanie żab
const frogs = [
    { name: "Żaba kapelusznik!", file: "../assets/frogs/f1.jpg" },
    { name: "Żaba czekająca na paczkę z Temu!", file: "../assets/frogs/f6.jpg" },
    { name: "Żaba księżniczka!", file: "../assets/frogs/f7.jpg" },
    { name: "Żabka wiedźma!", file: "../assets/frogs/f8.jpg" },
    { name: "Żabka gentleman!", file: "../assets/frogs/f9.jpg" },
    { name: "Kowojska żabka!", file: "../assets/frogs/f10.jpg" },
    { name: "Żabka wróżka grająca serenadę!", file: "../assets/frogs/f11.jpg" },
    { name: "Żabka kąpielowa!", file: "../assets/frogs/f12.jpg" },
    { name: "Żabka skater!", file: "../assets/frogs/f13.jpg" },
    { name: "Żabalarz!", file: "../assets/frogs/f14.jpg" },
    { name: "Żabka urodzinowa!", file: "../assets/frogs/f15.jpg" },
    { name: "Żabka grająca w lola!", file: "../assets/frogs/f16.jpg" },
    { name: "Żaba skoczek!", file: "../assets/frogs/skok.gif" },
    { name: "Żaba tancerz!", file: "../assets/frogs/taniec.gif" },
];

function pickFrog() {
    const randomIndex = Math.floor(Math.random() * frogs.length);
    const frog = frogs[randomIndex];
    
    document.getElementById('random-frog').src = frog.file;
    document.getElementById('frog-name').innerText = "Twój patron: " + frog.name;
}

// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    if (form) { 
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            
            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert("TRANSMISSION_SUCCESSFUL: Wiadomość wysłana.");
                    form.reset();
                } else {
                    alert("CRITICAL_ERROR: Serwer odrzucił transmisję.");
                }
            } catch (error) {
                alert("CONNECTION_LOST: Błąd połączenia z bazą danych.");
            }
        });
    }
});
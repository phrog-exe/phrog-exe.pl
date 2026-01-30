const frogs = [
    { name: "Żaba kapelusznik", file: "../assets/frogs/f1.jpg" },
    { name: "pulpet", file: "../assets/frogs/f2.jpg" },
    { name: "Żaba Moczarowa", file: "../assets/frogs/f3.jpg" }
];

function pickFrog() {
    const randomIndex = Math.floor(Math.random() * frogs.length);
    const frog = frogs[randomIndex];
    
    document.getElementById('random-frog').src = frog.file;
    document.getElementById('frog-name').innerText = "Twój patron: " + frog.name;
}

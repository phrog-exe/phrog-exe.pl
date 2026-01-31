const frogs = [
    { name: "Żaba kapelusznik!", file: "../assets/frogs/f1.jpg" },
    { name: "Wallace's flying frog!", file: "../assets/frogs/f2.jpg" },
    { name: "Żaba Moczarowa", file: "../assets/frogs/f3.jpg" },
    { name: "Pumpkin toadlet - tiny frog!", file: "../assets/frogs/f4.jpg" },
    { name: "Painted reed frog!", file: "../assets/frogs/f5.jpg" }
];

function pickFrog() {
    const randomIndex = Math.floor(Math.random() * frogs.length);
    const frog = frogs[randomIndex];
    
    document.getElementById('random-frog').src = frog.file;
    document.getElementById('frog-name').innerText = "Twój patron: " + frog.name;
}

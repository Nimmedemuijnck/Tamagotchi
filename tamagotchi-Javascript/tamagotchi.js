/*constante || let variabelen || alle functies  || event listnerd */

// ---------------------------------------------------------constanten---------------------------------------------------------

const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const h2 = document.querySelector("h2"); // Tekstelement om begroeting weer te geven
const healthSpan = document.querySelector('#health');
const happinessSpan = document.querySelector('#happiness');
const feedButton = document.querySelector('#feed'); // Knop om Tamagotchi te voeren
const playButton = document.querySelector('#play'); // Knop om Tamagotchi te laten spelen
const startButton = document.getElementById("startButton");
const firstPage = document.getElementById("first-page"); //Chat GPT, prompt: hoe kan ik met behulp van javascript een soort tweede pagina maken zonder een nieuw html bestand aan het maken?
const secondPage = document.getElementById("second-page"); //Chat GPT, prompt: hoe kan ik met behulp van javascript een soort tweede pagina maken zonder een nieuw html bestand aan het maken?
const catImage = document.querySelector('#cat_happy');
const tamagotchiNameH2 = document.querySelector('#tamagotchiNameH2'); // Element om naam van Tamagotchi weer te geven
const tamagotchiIMG = document.querySelector('#tamagotchiIMG');
const sleepButton = document.getElementById("sleep");
const activities = ["feeding", "playing"]; //Array van mogelijke activiteiten


// ---------------------------------------------------------Let---------------------------------------------------------

let health = 100;
let happiness = 100;
let tamagotchiName;
let sleeping = false; // Geeft aan of Tamagotchi slaapt


// ---------------------------------------------------------Functions---------------------------------------------------------

// Functie om naam van Tamagotchi weer te geven
function logInput() {
    tamagotchiName = nameInput.value;
    h2.textContent = "Hi, my name is " + tamagotchiName;
    tamagotchiNameH2.textContent = tamagotchiName;
}
// Functie om Tamagotchi status bij te werken. Met behulp van Seth
function updateStatus() {
    healthSpan.textContent = health;
    happinessSpan.textContent = happiness;
    checkPetStatus();
}
// Functie om Tamagotchi status te controleren en te kijken of Tamagotchi is overleden
function checkPetStatus() {
    if (health <= 0 || happiness <= 0) {
        clearInterval(happinessInterval);
        health = 0;
        happiness = 0;
        tamagotchiIMG.src = "./images/cat_sleeping.png";
        feedButton.disabled = true;
        playButton.disabled = true;
        setTimeout(function () {
            alert("We're sorry to inform you that your beloved pet has peacefully passed away."); //Bron: https://www.shecodes.io/athena/67094-how-to-create-an-alert-in-javascript
        }, 100);
    }
}
// Functie om Tamagotchi te voeren. Met behulp van Seth
function interactionFeed() {
    if (health < 101) {
        health += 10;
        if (health > 100) {
            health = 100;
        }
        if (happiness < 101) {
            happiness += 10;
        }
        if (happiness > 100) {
            happiness = 100;
        }
        tamagotchiIMG.src = "./images/cat_happy.png";
        updateStatus();
    }
}
// Functie om Tamagotchi te laten spelen. Met behulp van Seth
function interactionPlay() {
    if (happiness < 101) {
        happiness += 10;
    }
    if (happiness > 100) {
        happiness = 100;
    }
    if (health > 0) {
        let randomDecrease = Math.floor(Math.random() * 10) + 1; // Willekeurige vermindering tussen 1-10
        health -= randomDecrease;
        if (health < 0) {
            health = 0;
        }
    }
    tamagotchiIMG.src = "./images/cat_happy.png";
    updateStatus();
}
// Functie om meters te verhogen terwijl Tamagotchi slaapt. Chat GPT, prompt: ik wil dat er een knop komt om mijn tamagotchie te laten slapen. en voor iedere 10 secondat dat hij slaapt gaan de health en happiness meters met 10% omhoog. ook wil ik dat de afbeelding verandert als je op de sleep knop drukt
function startIncreasingMeters() {
    increaseInterval = setInterval(() => {
        if (sleeping) { // Controleren of Tamagotchi slaapt
            if (health < 100) {
                health += 10;
                if (health > 100) {
                    health = 100; // Zorgen dat gezondheid niet hoger is dan 100%
                }
            }
            if (happiness < 100) {
                happiness += 10;
                if (happiness > 100) {
                    happiness = 100; // Zorgen dat geluk niet hoger is dan 100%
                }
            }
            updateStatus();

            // Controleren of zowel gezondheid als geluk 100% zijn
            if (happiness === 100) {
                clearInterval(increaseInterval);
            }
        }
    }, 4000); // Iedere 4 seconden
}

// Functie om Tamagotchi te laten slapen
function sleepTamagotchi() {
    if (!sleeping) {
        sleeping = true;
        tamagotchiIMG.src = "./images/cat_sleeping.png"; // Afbeelding veranderen naar slapende Tamagotchi
        startIncreasingMeters(); // Meters verhogen terwijl Tamagotchi slaapt
        setTimeout(() => {
            tamagotchiIMG.src = "./images/cat_happy.png"; // Afbeelding terug veranderen naar blije Tamagotchi na wakker worden
            sleeping = false;
        }, 15000); // Wakker worden na 15 seconden
    }
}
// Functie om geluk van Tamagotchi elke 4 seconden te verminderen
function decreaseHappiness() {
    if (!sleeping && happiness > 0) { // Controleren of Tamagotchi niet slaapt
        happiness -= 10;
        if (happiness < 0) {
            happiness = 0;
        }
        updateStatus();
    }
}


// ---------------------------------------------------------Event Listners---------------------------------------------------------

// Knop om Tamagotchi te voeren
feedButton.addEventListener('click', interactionFeed);

// Knop om Tamagotchi te laten spelen
playButton.addEventListener('click', interactionPlay);

//Spel starten
startButton.addEventListener("click", () => {
    happinessInterval = setInterval(decreaseHappiness, 4000); //geluk neemt iedere 4 seconden af
    // Controleer of de naam is ingevoerd met een while loop
    while (nameInput.value === "") {
        alert("Please enter a name for your tamagotchi!"); // Geeft een waarschuwing als er geen naam is ingevoerd
        return; // Stop de functie als er geen naam is ingevoerd
    }
    logInput(); // Roep de logInput functie aan als er een naam is ingevoerd
    firstPage.style.display = "none"; // Eerste pagina verbergen. Chat GPT, prompt: hoe kan ik met behulp van javascript een soort tweede pagina maken zonder een nieuw html bestand aan het maken?
    secondPage.style.display = "block"; // Tweede pagina weergeven. Chat GPT, prompt: hoe kan ik met behulp van javascript een soort tweede pagina maken zonder een nieuw html bestand aan het maken?

    // Selecteer de audio en start het afspelen
    const audio = document.querySelector('audio');
    audio.play();
}
);

//Knop om naam van Tamagotchi in te voeren
nameButton.addEventListener("click", logInput);

//Knop om Tamagotchi te laten slapen
sleepButton.addEventListener('click', sleepTamagotchi); // Luister naar klikken op de slaapknop

// Status van Tamagotchi bijwerken
updateStatus();
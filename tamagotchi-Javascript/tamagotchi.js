/*constante || let variabelen || alle functies  || event listnerd */
/* healthbar: https://www.youtube.com/watch?v=Wh2kVSPi_sE */
/* second page: https://chatgpt.com/share/ec93347c-0c04-4e9f-b067-4d8b19d59953 */

// ---------------------------------------------------------constanten---------------------------------------------------------

const nameInput = document.getElementById("nameInput"); //Give Name
const nameButton = document.getElementById("nameButton"); //Give Name Button
const h2 = document.querySelector("h2"); //Greet
const healthSpan = document.querySelector('#health'); //HealthSpan
const happinessSpan = document.querySelector('#happiness'); //Happiness
const feedButton = document.querySelector('#feed'); //Feeding
const playButton = document.querySelector('#play'); //Playing
const startButton = document.getElementById("startButton"); //Start Game
const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const catImage = document.querySelector('#cat_happy'); // Kat Afbeelding
const tamagotchiNameH2 = document.querySelector('#tamagotchiNameH2');
const tamagotchiIMG = document.querySelector('#tamagotchiIMG');

// ---------------------------------------------------------Let---------------------------------------------------------

let health = 100;
let happiness = 100;
let tamagotchiName;

// ---------------------------------------------------------Functions---------------------------------------------------------

//Give Name
function logInput() {
    tamagotchiName = nameInput.value;
    h2.textContent = "Hi, my name is " + tamagotchiName;
    tamagotchiNameH2.textContent = tamagotchiName;
}
//Update Pet Status
function updateStatus() {
    healthSpan.textContent = health;
    happinessSpan.textContent = happiness;
    checkPetStatus();
}
//Check Pet Status + Pet Dies
function checkPetStatus() {
    if (health <= 0 || happiness <= 0) {
        clearInterval(happinessInterval);
        health = 0;
        happiness = 0;
        tamagotchiIMG.src = "./images/cat_sleeping.png";
        feedButton.disabled = true;
        playButton.disabled = true;
        setTimeout(function() {
            alert("We're sorry to inform you that your beloved pet has peacefully passed away."); //Bron: https://www.shecodes.io/athena/67094-how-to-create-an-alert-in-javascript
        },100);
    }
}
//Feeding
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
        updateStatus();
    }
}
//playing
function interactionPlay() {
    if (happiness < 101) {
        happiness += 10;
    }
    if (happiness > 100) {
        happiness = 100;
    }
    if (health > 0) {
        let randomDecrease = Math.floor(Math.random() * 10) + 1; //random decrease between 1-10
        health -= randomDecrease;
        if (health < 0) {
            health = 0;
        }
    }
    updateStatus();
}
//Decrease Happiness
function decreaseHappiness() {
    if (happiness > 0) {
        happiness -= 10;
        if (happiness < 0) {
            happiness = 0;
        }
        updateStatus();
    }
}


// ---------------------------------------------------------Event Listners---------------------------------------------------------


feedButton.addEventListener('click', interactionFeed); //Feeding
playButton.addEventListener('click', interactionPlay); //Playing
//Start Button
startButton.addEventListener("click", () => {
    happinessInterval = setInterval(decreaseHappiness, 4000);
    if (nameInput.value === "") {
        alert("Please enter a name for your tamagotchi!"); // Geef een waarschuwing als er geen naam is ingevoerd
    } else {
        logInput(); // Roep de logInput functie aan als er een naam is ingevoerd
        firstPage.style.display = "none";
        secondPage.style.display = "block";

        // Selecteer de audio en start het afspelen
        const audio = document.querySelector('audio');
        audio.play();
    }
});
//Hapiness Decrease Every 10 Seconds

//Name Button
nameButton.addEventListener("click", logInput);



updateStatus();
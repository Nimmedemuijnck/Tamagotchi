/*constante || let variabelen || alle functies  || event listnerd */
/* healthbar: https://www.youtube.com/watch?v=Wh2kVSPi_sE */
/* second page: https://chatgpt.com/share/ec93347c-0c04-4e9f-b067-4d8b19d59953 */

/*
function geefEten(){
console.log("Geef je tamagotchi eten!");
}
geefEten();

function kiesKarater(naam){
    console.log("Jouw karakter: " + naam)
}
kiesKarater("Mimitchie");*/

/*function showHint() {
    hintP.textContent = "It's old and squeeky"
    setTimeout(hideHint, 3000)
    }

function hideHint() {
    hintP.textContent = ""
}

showHint()
*/

/*
let secondsPassed = 0

setInterval(countSeconds, 1000)

function countSeconds() {
    eersteKop.textContent = secondsPassed
    secondsPassed += 1
}


let timer = setInterval(countSeconds, 1000)

function countSeconds() {
""
}

btnStop.addEventListener('click', stopCountingTime)

function stopCountingTime(){
    clearInterval(timer)
}
*/

/* while loop:
optellen:
let i = 5;
while (i < 5) {
    console.log(i);
    i++;

aftellen:
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
*/


/* for loop:
optellen:
for (let i = 0; i < 4; i++) {
    console.log(i);
}

aftellen:
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
*/




// constanten
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

//letjes
let health = 100;
let happiness = 100;
let tamagotchiName;


//functions
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
        tamagotchiIMG.src = "../images/cat_sleeping.png";
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


//event listeners

feedButton.addEventListener('click', interactionFeed); //Feeding
playButton.addEventListener('click', interactionPlay); //Playing
//Start Button
startButton.addEventListener("click", () => {
    if (nameInput.value === "") {
        alert("Please enter a name for your tamagotchi!"); //warning to enter a name
        logInput();
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    }
});
//Hapiness Decrease Every 10 Seconds
happinessInterval = setInterval(decreaseHappiness, 10000);
//Name Button
nameButton.addEventListener("click", logInput);

updateStatus();
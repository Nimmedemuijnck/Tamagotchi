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


/* Happy birthday 1 karakter

function HappyBirthday(naam){
    console.log("Happy Birthday to you.");
    console.log("Happy Birthday to you.");
    console.log("Happy Birthday, dear " + naam);
    console.log("Happy Birthday to you.");
}
HappyBirthday ("Mimitchie");
*/

/* Happy birthday 2 karakters

function HappyBirthday(naamEen, naamTwee){
    console.log("Happy Birthday to you.");
    console.log("Happy Birthday to you.");
    console.log("Happy Birthday, dear "
    + naamEen,"and",naamTwee)
    console.log("Happy Birthday to you.");
}
HappyBirthday ("Mimitchie", "Tama");
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



// letjes
let health = 100;
let happiness = 100;
let tamagotchiName;
 
//functions

//Give Name
function logInput() {
    tamagotchiName = nameInput.value;
    h2.textContent = "Hi, my name is " + tamagotchiName;
}

function updateStatus() {
    healthSpan.textContent = health;
    happinessSpan.textContent = happiness;
    checkPetStatus();
}


function checkPetStatus() {
    if (health <= 0 || happiness <= 0) {
        health = 0;
        happiness = 0;
        alert("We're sorry to inform you that your beloved pet has peacefully passed away."); //Bron: https://www.shecodes.io/athena/67094-how-to-create-an-alert-in-javascript
        feedButton.disabled = true;
        playButton.disabled = true;

        clearInterval(happinessInterval); 
    }
}

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
 
function interactionPlay() {
    if (happiness < 101) {
        happiness += 10;
    }
    if (happiness > 100) {
        happiness = 100;
    }
    if(health > 0) {
        health -= 5;
    }
    updateStatus();
}
 
function decreaseHappiness() {
    if (happiness > 0) {
        happiness -= happiness * 0.1;
        if (happiness < 0) {
            happiness = 0;
        }
        updateStatus();
    }
}
 
//event listeners
feedButton.addEventListener('click', interactionFeed);
playButton.addEventListener('click', interactionPlay);
startButton.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});
happinessInterval = setInterval(decreaseHappiness, 10000); 

nameButton.addEventListener("click", logInput);

 
updateStatus();
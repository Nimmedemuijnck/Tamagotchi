/*constante || let variabelen || alle functies  || event listnerd */
/* healthbar: https://www.youtube.com/watch?v=Wh2kVSPi_sE */

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
const nameInput = document.getElementById("nameInput"); //naam geven
const button = document.getElementById("button"); //naam geven knop
const h2 = document.querySelector("h2"); //groet
const healthSpan = document.querySelector('#health'); //healthspan
const happinessSpan = document.querySelector('#happiness'); //happiness
const feedButton = document.querySelector('#feed'); //feeding
const playButton = document.querySelector('#play'); //playing
const startButton = document.getElementById("startButton"); //start game button
const firstPage = document.getElementById("first-page"); //first page
const secondPage = document.getElementById("second-page"); //second page


// letjes
let health = 100; //healthspan
let happiness = 100; //happiness
let tamagotchiName; //naam geven
 
//functions
function logInput() {
    tamagotchiName = nameInput.value; //naam geven
    h2.textContent = "Hi, my name is " + tamagotchiName; //groet
}

function updateStatus() {
    healthSpan.textContent = health; //healthspan
    happinessSpan.textContent = happiness; //happiness
    checkPetStatus();
}
 
function checkPetStatus() {
    if (health <= 0 || happiness <= 0) { //healthspan & happiness
        health = 0;
        happiness = 0;
        alert("Oh no! Your pet has passed away. "); //Bron: https://www.shecodes.io/athena/67094-how-to-create-an-alert-in-javascript
        feedButton.disabled = true; //feeding
        playButton.disabled = true; //playing
    }
}

function interactionFeed() {
    if (health < 101) { //healthspan
        health += 10;
        if (health > 100) {
            health = 100;
        }
        updateStatus();
    }
}
 
/*function interactionPlay() { //happiness
    if (happiness < 101) {
        happiness += 10;
    }
    if (happiness > 100) {
        happiness = 100;
    }
    if(health > 0) {
        health -= 5; // Playing makes the pet a bit tired
    }
    updateStatus();
}
*/
 
//event listeners
feedButton.addEventListener('click', interactionFeed); //feeding
playButton.addEventListener('click', interactionPlay); //playing
startButton.addEventListener("click", () => { //start game button
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});
button.addEventListener("click", logInput); //naam geven knop
 
updateStatus();
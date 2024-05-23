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


const nameInput = document.getElementById("nameInput");
const button = document.getElementById("button");
const h2 = document.querySelector("h2");

let tamagotchiName;

function logInput() {
    tamagotchiName = nameInput.value;
    h2.textContent = "Hi, my name is " + tamagotchiName;
}

button.addEventListener("click", logInput);


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
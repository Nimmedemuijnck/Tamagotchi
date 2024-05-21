/*constante || let variabelen || alle functies  || event listnerd */

console.log("Javascript werkt!");

function geefEten(){
console.log("Geef je tamagotchi eten!");
}
geefEten();


function kiesKarater(naam){
    console.log("Jouw karakter: " + naam)
}

kiesKarater("Mimitchie");


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
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. dichiaro le variabili vuote a cui darò un valore più avanti
let choice;
let even;
let odd;
let userNumber;

// 2. chiedo all'utente di scegliere tra pari e dispari FINTANTO CHE choice sarà diversa da 'pari' E diversa da 'dispari'
do {
    choice = (prompt("Scegli pari o dispari?"));
} while ((choice != "pari") && (choice != "dispari"))

// 3. salvo la scelta dell'utente in variabili già dichiarate
if (choice === "dispari") {
    odd = choice;
} else {
    even = choice;
}

console.log("choice =", choice);
console.log("even =", even);
console.log("odd =", odd);

// 4. chiedo all'utente un numero tra 1 e 5 FINTANTO CHE userNumber sarà: minore o uguale a 0 OPPURE maggiore di 5 OPPURE un nonNumero
do {
    userNumber = Number(prompt("Scegli un numero tra 1 e 5"));
} while ((userNumber <= 0) || (userNumber > 5) || (isNaN(userNumber)))

console.log("userNumber =", userNumber);
console.log(typeof userNumber);

// 5. creo una funzione che genera un numero randomico intero definito in un range
function randomNumberGen(min, max) {
    random = Math.floor(Math.random() * max) + min;
    return random
} 

// 6. genero con la funzione randomNumberGen un numero randomico intero tra 1 e 5 e lo salvo nella let randomNumber
let randomNumber = randomNumberGen(5, 1);

console.log("randomNumber =", randomNumber);

// 7. sommo il numero dell'utente con il numero randomico
const sum = userNumber + randomNumber;

console.log("sum =", sum);
console.log(typeof sum);



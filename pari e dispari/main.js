// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. creo una funzione che genera un numero randomico intero definito in un range
function randomNumberGen(min, max) {
    random = Math.floor(Math.random() * max) + min;
    return random
} 

// 2. creo una funzione che, inserendo un numero, mi dica se è pari o dispari
function oddOrEven(number) {
    if (number % 2 === 1) {
        result = "dispari";
    } else {
        result = "pari";
    }
    return result
}

alert("Gioca a 'pari e dispari' contro il computer.")

// 3. dichiaro le variabili vuote a cui darò un valore più avanti
let userChoice;
let userNumber;

// 4. chiedo all'utente di scegliere tra pari e dispari FINTANTO CHE userChoice sarà diversa da 'pari' E diversa da 'dispari'
do {
    userChoice = (prompt("Scegli: pari o dispari?"));
} while ((userChoice != "pari") && (userChoice != "dispari"))

console.log("userChoice =", userChoice);

// 5. chiedo all'utente un numero tra 1 e 5 FINTANTO CHE userNumber sarà: minore o uguale a 0 OPPURE maggiore di 5 OPPURE un nonNumero
do {
    userNumber = Number(prompt("Scegli un numero tra 1 e 5. Il computer farà lo stesso."));
} while ((userNumber <= 0) || (userNumber > 5) || (isNaN(userNumber)))

console.log("userNumber =", userNumber);
console.log(typeof userNumber);

// 6. genero con la funzione randomNumberGen un numero randomico intero tra 1 e 5 e lo salvo nella let randomNumber
let randomNumber = randomNumberGen(1, 5);
console.log("randomNumber =", randomNumber);

alert(`${"Il numero che ha scelto il computer è ="} ${randomNumber}`);

// 7. sommo il numero dell'utente con il numero randomico
const sum = userNumber + randomNumber;
console.log("sum =", sum);
console.log(typeof sum);

alert(`${userNumber} + ${randomNumber} = ${sum}`);

// 8. con la funzione oddOrEven stabilisco se sum è pari o dispari
let parityFactor = oddOrEven(sum);
console.log("result =", parityFactor);

// 9. dichiaro chi è il vincitore tra utente e computer
//     SE userChoice è uguale a parityFactor stampo "HAI VINTO! ;-)", ALTRIMENTI stampo "hai perso :-("
if (userChoice === parityFactor) {
    alert("HAI VINTO! ;-)");
} else {
    alert("hai perso :-(");
}
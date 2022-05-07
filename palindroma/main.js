// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. chiedo all'utente di inserire una parola
let askWord = String(prompt(`${"Inserisci una parola."} ${"Ti dirò se è palindroma."}`));
console.log(typeof askWord);
console.log(askWord.length);

// 2. creo una funzione che mi restituisce la parola inserita dall'utente al rovescio
function wordFlip() {
    // 2.1 dichiaro una variabile vuota e VOGLIO CHE SIA UNA STRINGA per poterla gestire (+ o -) come un array
    let flippedWord = "";
    // 2.2 ciclo la parola per la sua lunghezza - 1 (numero di caratteri) partendo dall'ultima
    for (let i = askWord.length - 1; i >= 0; i--) {
        console.log(askWord[i]);
        // 2.3 aggiungo ogni lettera di word alla variabile reverseWord per ottenere la parola al rovescio
        flippedWord += askWord[i];
    }
    return flippedWord
}

// 3. salvo il risultato della funzione wordFlip nella const reverseWord
const reverseWord = wordFlip(askWord);
console.log(reverseWord);
// debugger;                           
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. chiedo all'utente di inserire una parola
const word = String(prompt("Inserisci una parola.", "Ti dirò se è palindroma."));
console.log(typeof word);
console.log(word.length);

// 2. dichiaro una variabile vuota COME STRINGA
let reverseWord = "";

// 3. ciclo la parola per la sua lunghezza (numero di caratteri) partendo dall'ultima
for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
    // 3.1 aggiungo ogni lettera di word alla variabile reverseWord per ottenere la parola al rovescio
    reverseWord = reverseWord + word[i];
    // 2.1 SE la prima lettera è uguale all'ultima, la seconda alla penultima, e così via...
    // if (word[i] === word[word.length - 1 - i]) {
    //     console.log("Palindroma");
    // } else {
    //     console.log("Non palindroma");
    // }
}

console.log(reverseWord);
                               
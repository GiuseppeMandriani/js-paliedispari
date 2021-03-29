/**
 * 
 * Esercizio 2 - Pari e Dispari
 * 
 * - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * - Sommiamo i due numeri
 * - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * - Dichiariamo chi ha vinto.
 * 
 */



// Scelta Pari/Dispari e numero

var pariDispari = prompt('Facciamo un gioco, scegli se:\nPari\nDispari').toLowerCase().trim();
console.log('Scelta utente: ', pariDispari);


while(pariDispari !== 'pari' && pariDispari !== 'dispari'){
    var pariDispari = prompt('Scegli tra:\nPari\nDispari').toLowerCase().trim();
    console.log('Scelta errata')
    
}

console.log('Hai scelto: ', pariDispari);

var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

while(( userNumber > 5 || userNumber < 1) || isNaN(userNumber)){
            var userNumber = parseInt(prompt('Prego inserire un numero da 1 a 5'));
            console.log('Valore inserito errato')
}


console.log('Numero da te inserito è: ', userNumber);

        
        
// Generazione numero random da 1 a 5 PC
        
var numRandom = genRandomNumber(1, 5)
console.log('Numero random PC è: ', numRandom)

// Somma Numeri

somma = userNumber + numRandom;
console.log('la somma tra te e il pc è: ', somma);

// Verifico se la somma è pari o dispari
var result = oddEven(somma);
console.log('Il risultato è: ' + somma + ' quindi: ' + result);

// Stampo vincitore in base al risultato
if (result === pariDispari) {
    console.log('Hai Vinto')
} else console.log('Hai perso');












/**
 * 
 *  Esercizio 1 - Parola Palindroma
 * 
 * - Chiedere all’utente di inserire una parola
 * - Creare una funzione per capire se la parola inserita è palindroma
 */

// Fase 1 Richiesta dato all'utente

// var userWord = prompt('Inserire la parola da verificare').toLowerCase().trim();
// console.log('Parola da verificare: ', userWord);

// Fase 2 Verifica se parola è Polindroma

// var wordPalindrome = reverseChars(userWord);



/************************
 * 
 * UTILITIES
 * 
 *************************/

// Definizione Funzioni


/**
 * 
 * @param {string} word //Parola da invertire
 * @returns // Parola invertita
 */
function reverseChars(word){

    var reverseWord = '';
    
    for (var i = word.length - 1; i >= 0; i--){
        // console.log(word[i]) // Singola lettera della parola
        reverseWord += word[i]; // Aggiunta lettera per lettera
    }

    if (reverseWord === word){
        console.log('La Parola è Polindroma: ', reverseWord);
        
    } else console.log('Mi spiace, non è Polindroma: ', reverseWord)
    
    return reverseWord;

}


/**
 * 
 * @param {number} min // Valore minimo range
 * @param {number} max // Valore masssimo range
 * @returns // Numero random 
 */
function genRandomNumber(min, max){
    var random = Math.floor( (Math.random()* max - min + 1)  + min);
    return random;
}


/**
 * 
 * @param {number} num //Numero da analizzare
 * @returns //Pari o Dispari
 */
function oddEven(num){
    if (num % 2 === 0){
        return 'pari'
    }
    return 'dispari'
}
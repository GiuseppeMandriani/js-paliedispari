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


var pariDispari = prompt('Quale numero vuoi inserire?\nPari\nDispari').toLowerCase().trim();

var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

switch (pariDispari){
    case 'pari':
        while(( userNumber > 5 || userNumber < 1) || isNaN(userNumber)){
            var userNumber = parseInt(prompt('Prego inserire un numero da 1 a 5'));
        }
    break;

    case 'dispari':
        while(( userNumber > 5 || userNumber < 1) || isNaN(userNumber)){
        var userNumber = parseInt(prompt('Prego inserire un numero da 1 a 5'));
        }
        

}


// Generazione numero random da 1 a 5 PC

var numRandom = genRandomNumber(1, 5)
console.log(numRandom)








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
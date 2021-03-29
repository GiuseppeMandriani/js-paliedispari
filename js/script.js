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

// Scelta Pari/Dispari




var pariDispari = prompt('Quale numero vuoi inserire?\nPari\nDispari').toLowerCase().trim();



switch(pariDispari){
    case 'pari': 
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    console.log('Hai scelto: ', pariDispari)

    if((userNumber >= 1 && userNumber <= 5) && (!isNaN(userNumber))){
        console.log('correct');
    } else console.log('errato');
    break;
}




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
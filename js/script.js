/**
 * 
 *  Esercizio 1 - Parola Palindroma
 * 
 * - Chiedere all’utente di inserire una parola
 * - Creare una funzione per capire se la parola inserita è palindroma
 */

// Fase 1 Richiesta dato all'utente

var userWord = prompt('Inserire la parola da verificare').toLowerCase().trim();
console.log('Parola da verificare: ', userWord);

// Fase 2 Verifica se parola è Polindroma

var wordPalindrome = reverseChars(userWord);



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
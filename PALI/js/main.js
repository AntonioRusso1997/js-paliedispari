/* Palidroma:
 - Chiedere all’utente di inserire una parola
 - Creare una funzione per capire se la parola inserita è palindroma */

// Chiedo all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola.");
var result = palindroma(parolaUtente);

// Creo la funzione per capire se la parola inserita è palindroma
function palindroma(parola) {
    if (parola == parola.split('').reverse().join('')) {
        alert(parolaUtente + " è palindroma");
    }
    else 
    {
        alert(parolaUtente + " non è palindroma");
    }
}
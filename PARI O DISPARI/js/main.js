/* Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//Dichiaro le variabili iniziali
var sceltaUtente;
var numeroUtente;

//Eseguo il ciclo dove l'utente sceglie fra pari e dispari e un numero da 1 a 5
do {
	sceltaUtente = prompt("Scegli tra 'pari' e 'dispari'.").toLowerCase();
    document.getElementById("scelta").innerHTML = sceltaUtente;

} 
while (sceltaUtente != "pari" && sceltaUtente != "dispari"); //verifica dei dati corretti.

do {
	numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
} 
while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente));//verifica dei dati corretti.

//Genero un numero casuale per la CPU
function rndNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numeroCpu = rndNumber(1, 5);

//Creo variabile per la somma dei numeri e stabilisco se è pari o dispari
var somma = numeroCpu + numeroUtente;
console.log("la somma dei due numeri è: " + somma)
document.getElementById("somma").innerHTML = somma;

// la somma è pari o dispari?
function pariDispari(x,y) {
    var sommaPariDispari = x + y;
    var risultato = false;
    if (sommaPariDispari % 2 == 0)
    {
        risultato = true;
    }
    return risultato;
} 

//Chi vince?
if ((sceltaUtente == "pari" && pariDispari(numeroCpu, numeroUtente) == true) || (sceltaUtente == "dispari" && pariDispari(numeroCpu, numeroUtente) == false))
{
    console.log("Hai vinto!");
    document.getElementById("risultato").innerHTML = "Hai vinto!";
}
else
{
    console.log("Hai perso!");
    document.getElementById("risultato").innerHTML = "Hai perso!";
}
/* JSnack 3 
Richiesta esercizio n. 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

// variabili prompt
const num_first = Number(prompt("Inserisci un numero"));
const num_second = Number(prompt("Inserisci un altro numero"));
const num_third = Number(prompt("Inserire un altro numero"));
const num_fourth = Number(prompt("Inserire un altro numero"));
const num_fifth = Number(prompt("Inserire un altro numero"));
const num_sixth = Number(prompt("Inserire un altro numero"));
const num_seventh = Number(prompt("Inserire un altro numero"));
const num_eighth = Number(prompt("Inserire un altro numero"));
const num_ninth = Number(prompt("Inserire un altro numero"));
const num_tenth = Number(prompt("Inserire un altro numero"));

// altre variabili
const result = document.getElementById("result");
let sum =
	num_first +
	num_second +
	num_third +
	num_fourth +
	num_fifth +
	num_sixth +
	num_seventh +
	num_eighth +
	num_ninth +
	num_tenth;


// risultato somma
result.innerHTML = "La somma dei numeri inseriti è pari a: " + sum;

// console.log
console.log("La somma dei numeri inseriti è pari a: " + sum);

// console.log di chiusura esercizio
console.log("Fine terzo esercizio");

/* JSnack 3 */

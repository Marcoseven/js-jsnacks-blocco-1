/* JSnack 8 
Richiesta esercizio n. 8:
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

// variabili
let numUser = prompt("Inserire un numero composto da quattro cifre");
let result = document.getElementById("result");
let sum = 0;
let i = 0;

// console.log
console.log(numUser);

// ciclo while
for (let index = 0; index < numUser.length; index++) {
	result += numUser[index];
}

// console.log di chiusura esercizio
console.log("Fine ottavo esercizio");

/* /JSnack 8  */

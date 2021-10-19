/* JSnack 6 
Richiesta esercizio n. 6:
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

// variabili
const num = Number(prompt("Inserisci un numero"));
let numCube = Math.pow(num, 3);
const output = (document.getElementById("result").innerHTML =
	"Il cubo del numero inserito dall'utente è pari a: " + numCube);

// console.log
console.log(num, numCube);

// console.log di chiusura esercizio
console.log("Fine sesto esercizio");

/* /JSnack 6  */

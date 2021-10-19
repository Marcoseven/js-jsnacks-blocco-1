/* JSnack 7 
Richiesta esercizio n. 7:
Stampa le potenze di 2 fino a 1000.
*/

// variabili

// ciclo for
for (let index = 0; index <= 1000; index++) {
	let two = Math.pow(2, index);
	document.getElementById("result").innerHTML += `${two}`;
	console.log(two);
}

// console.log di chiusura esercizio
console.log("Fine settimo esercizio");

/* /JSnack 7  */

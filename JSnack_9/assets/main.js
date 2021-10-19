/* JSnack 9 
Richiesta esercizio n. 9:
Calcola la somma e la media dei primi 10 numeri.
*/

let i = 0;
let sum = 0;
let result = document.getElementById("result");

while (i < 10) {
	sum += i + 1;
	i++;
}
console.log(sum);

let sumAverage = sum / 10;
console.log(sumAverage);

result.innerHTML =
	"La somma dei primi dieci numeri è pari a: " +
	sum +
	" mentre la media dell'ultimo numero è pari a: " +
	sumAverage;

// console.log di chiusura esercizio
console.log("Fine nono esercizio");

/* /JSnack 9  */

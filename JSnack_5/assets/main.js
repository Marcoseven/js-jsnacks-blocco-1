/* JSnack 5 
Richiesta esercizio n. 5:
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
*/

// array
const empty = [];

// variabili
const numFirst = Number(prompt("Inserisci un numero"));
const numSecond = Number(prompt("Inserisci un altro numero"));
const numThird = Number(prompt("Inserisci un altro numero"));
const numFourth = Number(prompt("Inserisci un altro numero"));
const numFifth = Number(prompt("Inserisci un altro numero"));
const numSixth = Number(prompt("Inserisci un altro numero"));

// condizionale if
if (numFirst % 2 != 0) {
	empty.push(numFirst);
}
if (numSecond % 2 != 0) {
	empty.push(numSecond);
}
if (numThird % 2 != 0) {
	empty.push(numThird);
}
if (numFourth % 2 != 0) {
	empty.push(numFourth);
}
if (numFifth % 2 != 0) {
	empty.push(numFifth);
}
if (numSixth % 2 != 0) {
	empty.push(numSixth);
}

// risultato visionato su schermo
document.getElementById("result").innerHTML =
	"Array con numeri dispari inseriti dall'utente sono: " + empty;
console.log(empty);

// console.log di chiusura esercizio
console.log("Fine quinto esercizio");

/* /JSnack 5  */

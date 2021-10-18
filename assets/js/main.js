/* 
Descrizione:
Nelle slide trovate una serie di problemi da risolvere. Ciascuno snack é un problema a se, e richiederá alcuni degli strumenti visti fin ora.
Completate ciascun esercizio, utilizzando quello che avete imparato fin ora.

Consigli:
- analizzate prima di tutto il problema,
- scomponetelo in steps
- definite che strumenti vi occorrono
- iniziate a risolvere il problema un passo alla volta.
- Aprite la documentazione di ciascuno degli strumenti che avete rilevato come necessari alla risoluzione del problema

Ripetete quando sopra per ciascuno snack.
*/

/* JSnacks 1 */
// variabili
const numUser_1 = prompt("Inerire un numero?");
const numUser_2 = prompt("Inerire un altro numero?");
const msg = document.getElementById("JSnacks_1");

// console.log
console.log(numUser_1, numUser_2);

// condizionale if
if (numUser_1 > numUser_2) {
	console.log(
		"Il primo numero inserito è maggiore del secondo numero inserito"
	);
	msg.innerHTML =
		"Il primo numero inserito è maggiore del secondo numero inserito";
} else if (numUser_1 < numUser_2) {
	console.log(
		"Il secondo numero inserito è maggiore del primo numero inserito"
	);
	msg.innerHTML =
		"Il secondo numero inserito è maggiore del primo numero inserito";
} else {
	console.log("Il primo e il secondo numero inserito sono pari");
	msg.innerHTML = "Il primo e il secondo numero inserito sono pari";
}
/* /JSnacks 1 */

/* JSnacks 2 */

/* /JSnacks 2 */
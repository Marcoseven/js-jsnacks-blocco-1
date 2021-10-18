/* JSnack 4 
Richiesta esercizio n. 4:
In un array sono contenuti i nomi degli invitati alla festa del grandeGatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// variabili
const nameUser = prompt("Inserire il proprio nome");
let nameFound = false;

// array
const grandeGatsby = ["Marco", "Valerio", "Francesco", "Matteo", "Fabio"];

// ciclo for con condizionale if
for (let i = 0; i < grandeGatsby.length; i++) {
	if (nameUser == grandeGatsby[i]) {
		nameFound = true;
	} else if (nameUser != grandeGatsby[i]) {
	}
}
console.log(nameFound);

// variabile
const msg = document.getElementById("result");

// condizionale if
if (nameFound) {
	console.log("Perfetto, il suo nome è presente nella lista");
	msg.innerHTML = "Perfetto, il suo nome è presente nella lista";
} else {
	console.log("Mi dispiace, il suo nome non è presente nella lista");
	msg.innerHTML = "Mi dispiace, il suo nome non è presente nella lista";
}

// console.log di chiusura esercizio
console.log("Fine quarto esercizio");

/* JSnack 4 */

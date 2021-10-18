/* JSnack 2 
Richiesta esercizio n. 2:
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// variabili
const wordUser_1 = prompt("Inserire una parola");
const wordUser_2 = prompt("Inserire un'altra parola");
const msg_2_up = document.getElementById("result_up");
const msg_2_down = document.getElementById("result_down");

// primo console.log
console.log(wordUser_1, wordUser_2);

// condizionale if
if (wordUser_1.length > wordUser_2.length) {
	msg_2_up.innerHTML = "La prima parola inserita è: " + wordUser_1;
	msg_2_down.innerHTML =
		"che è più lunga della seconda parola inserita, che è: " + wordUser_2;
} else if (wordUser_1.length < wordUser_2.length) {
	msg_2_up.innerHTML = "La seconda parola inserita è: " + wordUser_2;
	msg_2_down.innerHTML =
		"che è più lunga della prima parola inserita, che è: " + wordUser_1;
} else {
	msg_2_up.innerHTML = "Le parole inserite hanno la stessa lunghezza";
}

// console.log di chiusura esercizio
console.log("Fine secondo esercizio");

/* /JSnack 2 */

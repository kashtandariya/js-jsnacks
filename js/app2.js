// L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//Chiediamo all'utente di inserire la prima parola e poi la seconda usando due prompt
const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");

// Verifichiamo la lunghezza delle parole usando la proprietà length
if (parola1.length < parola2.length) {
    console.log("La parola più corta è:", parola1); //SE la parola più corta è la prima
    console.log("La parola più lunga è:", parola2); //e la più lunga è la seconda
} else if (parola2.length < parola1.length) {
    console.log("La parola più corta è:", parola2); //ALTRIMENTI SE la parola più corta è la seconda
    console.log("La parola più lunga è:", parola1); //e la più lunga è la prima
} else {
    console.log("Le parole hanno la stessa lunghezza."); //ALTRIMENTI hanno la stessa lunghezza
}

//stampa tutto durante l'esercizio
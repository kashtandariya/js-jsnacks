//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array. Stampa l'array alla fine.

//array vuoto
const numeriDispari = [];

//ciclo for per chiedere 6 volte all'utente
for (let i = 0; i < 6; i++) {
    // Chiediamo all'utente di inserire un numero per 6 volte
    const numero = parseInt(prompt("Inserisci un numero:"));

//controlla sia che sia un numero, sia che se diviso per 2 il resto è diverso da 0
    if (!isNaN(numero) && numero % 2 !== 0) {
        // Se è dispari, lo aggiungiamo all'array numeriDispari
        numeriDispari.push(numero);
    } else {
        console.log("Input non valido. Inserisci un numero valido.");
    }
}
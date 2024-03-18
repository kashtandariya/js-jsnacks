//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//CICLO FOR
//prima parti da una somma di 0
let somma = 0;

for (let i = 0; i < 10; i++) {
    // Chiediamo all'utente di inserire un numero
    const numero = parseInt(prompt("Inserisci un numero:"));

    // Verifichiamo se l'input è un numero valido con !isNaN
    if (!isNaN(numero)) {
        // Aggiungiamo il numero alla somma utilizzando +=
        somma += numero;
    } else {
        console.log("Input non valido. Inserisci un numero valido.");
    }
}

// Stampiamo la somma dei numeri inseriti
console.log("La somma dei numeri inseriti è:", somma);
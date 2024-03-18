//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

//crea due prompt in cui chiedi numero 1 e numero 2
const numero1 = parseInt(prompt("Inserisci il primo numero:"));

const numero2 = parseInt(prompt("Inserisci il secondo numero:"));


//controlla poi quale dei due numeri è maggiore con funzioni if else
//usa isNan ma negazione per vedere se i numeri sono validi o se sono NaN
if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {                
        console.log("Il numero maggiore è il primo:", numero1); //SE numero1>numero2
 
    } else if (numero2 > numero1) {
        console.log("Il numero maggiore è il secondo:", numero2); //ALTRIMENTI SE numero2>numero1

    } else {
        console.log("I numeri sono uguali."); //ALTRIMENTI SE i numeri sono uguali

    }
} else {
    console.log("Inserimento non valido. Assicurati di inserire numeri validi."); //ALTRIMENTI i valori inseriti non sono validi
}
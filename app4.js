// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//crea un primo array con i nomi degli invitati
const listaInvitati = ["Luca", "Lorenzo", "Marta", "Emma", "Lucia", "Mario", "Paolo", "Francesca"];

// Chiediamo all'utente il suo nome con un prompt
const nomeUtente = prompt("Inserisci il tuo nome:");

// Verifichiamo se il nome dell'utente è presente nell'array lista degli invitati
if (listaInvitati.includes(nomeUtente)) {
    console.log("Benvenuto alla festa del Grande Gatsby,", nomeUtente + "!");
} else {
    console.log("Mi dispiace,", nomeUtente + ", non sei stato invitato alla festa del Grande Gatsby.");
}

// Palidroma

// versione in console  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Chiedere all’utente di inserire una parola

let parolaUtente = prompt("inserisci una parola");

console.log("parola inserita dall'utente: ",parolaUtente);
// Creare una funzione per capire se la parola inserita è palindroma

// creo una funzione per girare la parola
function invertiParola(parolaUtente) {
    let parolaInvertita = '';
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaInvertita += parolaUtente[i];
    }

    return parolaInvertita;
   
}

// giro la parola

let parolaInvertita = invertiParola(parolaUtente);
console.log("Parola invertita:", parolaInvertita);

// adesso confronto le due versione della parola per determinare se la parola è palindroma

if (parolaUtente === parolaInvertita) {
    console.log("La parola inserita è palindroma!");
} else {
    console.log("La parola inserita non è palindroma.");
}





// versione in pagina///////////////////////////////////////////////////////////////////////////////////////////////////////////////




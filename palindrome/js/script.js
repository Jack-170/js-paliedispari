// Palidroma

// versione in console  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Chiedere all’utente di inserire una parola

// let parolaUtente = prompt("inserisci una parola");

// console.log("parola inserita dall'utente: ",parolaUtente);
// Creare una funzione per capire se la parola inserita è palindroma

// creo una funzione per girare la parola
// function invertiParola(parolaUtente) {
//     let parolaInvertita = '';
//     for (let i = parolaUtente.length - 1; i >= 0; i--) {
//         parolaInvertita += parolaUtente[i];
//     }

//     return parolaInvertita;
   
// }

// giro la parola

// let parolaInvertita = invertiParola(parolaUtente);
// console.log("Parola invertita:", parolaInvertita);

// // adesso confronto le due versione della parola per determinare se la parola è palindroma

// if (parolaUtente === parolaInvertita) {
//     console.log("La parola inserita è palindroma!");
// } else {
//     console.log("La parola inserita non è palindroma.");
// }





// versione in pagina///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// dichiaro la funzione per invertile la parola 
function invertiParola(parolaUtente) {
    let parolaInvertita = '';
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaInvertita += parolaUtente[i];
    }
    return parolaInvertita;
}


// Controllo la Palindromia

let bottoneControllo = document.getElementById("controllapalindromia");

bottoneControllo.addEventListener("click",
    function controllaPalindroma() {
        // ottengo il valore della parola inserito
        let inputParola = document.getElementById('parolautente'); 
        let parolaUtente = inputParola.value; 
        
        let parolaInvertita = invertiParola(parolaUtente);
        let risultato = document.getElementById('risultato');
        
        // creo uno span nel caso fosse palindroma
        let palindroma = document.createElement('span');
        palindroma.innerHTML = 'La parola inserita è palindroma!';
        palindroma.classList.add('palindroma');
        palindroma.style.display = 'none';

        // creo uno span nel caso non fosse palindroma
        let nonPalindroma = document.createElement('span');
        nonPalindroma.innerHTML = 'La parola inserita non è palindroma.';
        nonPalindroma.classList.add('non-palindroma');
        nonPalindroma.style.display = 'none';

        // faccio apparire uno span se la parola è palindroma e l'alro se non lo è
        if (parolaUtente === parolaInvertita) {
            risultato.innerHTML = '';
            risultato.append(palindroma);
            palindroma.style.display = 'inline';
        } else {
            risultato.innerHTML = ''; 
            risultato.append(nonPalindroma);
            nonPalindroma.style.display = 'inline';
        }

    }
);
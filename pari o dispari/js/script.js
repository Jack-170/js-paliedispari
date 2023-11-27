// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// L'utente sceglie pari o dispari

const sceltaUtente = prompt("scegli `pari` o `dispari`:")
console.log("l'utente ha scelto: ", sceltaUtente);

// L'utente inserisce un numero da 1 a 5.

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

if (numeroUtente >= 1 && numeroUtente <= 5) {
  // il numero sarà valido
  console.log("Il numero inserito dall'utente è: ", numeroUtente);
} else {
    // numero non valido
  
  alert("numero inserito non valido");
  console.log("il numero inserito non è valido ")

}


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function generateComputerNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//genero un numero casuale compreso tra 1 e 5
let numeroComputer= generateComputerNumber(1, 5);
console.log("il numero del comuter è: ",numeroComputer);


// Sommiamo i due numeri

let somma = numeroUtente + numeroComputer;
console.log("la somma dei due numeri è : ", somma);

//  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

function pariODdispari(somma) {
  let risultato;

  if (somma % 2 === 0) {
    risultato = "pari";
  } else {
    risultato = "dispari";
  }

  return risultato;
}

let risultato = pariODdispari(somma);
console.log("La somma è:", risultato);

// Dichiariamo chi ha vinto

function stabiliamoIlVincitore(sceltaUtente, risultato) {
  if (sceltaUtente === risultato) {
    console.log("Ha vinto l'utente!!!!");
  } else {
    console.log("Ha vinto il computer!!!");
  }
}

stabiliamoIlVincitore(sceltaUtente, risultato);

/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del 
controllo.
*/

// Imposto un array di email valide
let validEmail = ["pinco_pallo@gmail.com","mario.rossi@gmail.com","nome-a-caso@gmail.com"];

// Imposto variabile per email utente
let userEmailEl = document.getElementById("userEmail");

// Imposto una variabile per il bottone
let logInBtnEl = document.getElementById("logInBtn");

// Creo un evento con il click
logInBtnEl.addEventListener("click", function() {


    //Faccio partire un ciclo che controlli tutte le email presenti nell'array
    for (let i = 0; i < validEmail.length; i++) {

        // ?Se l'email inserita è uguale a una delle email presenti nell'array, stampa e arresta il ciclo
        if(userEmailEl.value == validEmail[i]){

            document.getElementById("result").innerHTML = "Benvenuto!";

            break;

        // Altrimenti stampa accesso negato
        } else {

            document.getElementById("result").innerHTML = "Accesso negato!";

        }
    }

});







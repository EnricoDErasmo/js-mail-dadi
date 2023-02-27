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

            document.getElementById("result").innerHTML = "<span style='color: #abff4f;'>Email corretta!</span>";

            break;

        // Altrimenti stampa accesso negato
        } else {

            document.getElementById("result").innerHTML = "<span style='color: #f21b3f;'>Accesso negato!</span>";

        }
    }

});


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Imposto una variabile per il bottone
let diceBtnEl = document.getElementById("diceBtn");

// Creo un evento con il click
diceBtnEl.addEventListener("click", function() {

    // Creo una variabile per generare un numero automatico da 1 a 6 per l'utente
    let userNumber = Math.floor(Math.random() *6) +1;
    document.getElementById("user-num").innerHTML = userNumber  

    // Creo una variabile per generare un numero automatico da 1 a 6 per l'utente
    let computerNumber = Math.floor(Math.random() *6) +1;
    document.getElementById("computer-num").innerHTML = computerNumber
    
    if (userNumber > computerNumber) {
    
        document.getElementById("challengeResult").innerHTML = "Hai vinto!!!";
    
    } else if (userNumber == computerNumber){
    
        document.getElementById("challengeResult").innerHTML = "Pareggio, gioca ancora!";
    
    } else {
    
        document.getElementById("challengeResult").innerHTML = "Hai perso.";
    
    }
});









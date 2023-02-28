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

            document.getElementById("result").innerHTML = "<span style='color: #abff4f;'>Email corretta! Buon divertimento!</span>";
            document.getElementById("diceContainer").style.display = "block";

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

// Array di immagini di dadi
let diceFaceImgs = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png","img/6.png"];
const diceImg1Element = document.getElementById("diceImg1");
const diceImg2Element = document.getElementById("diceImg2");

// Imposto una variabile per il bottone
let diceBtnEl = document.getElementById("diceBtn");

// Creo un evento con il click
diceBtnEl.addEventListener("click", function() {

    // Creo una variabile per generare un numero automatico da 1 a 6 per l'utente
    let userNumber = Math.floor(Math.random() *6) +1; 

    // Creo una variabile per generare un numero automatico da 1 a 6 per l'utente
    let computerNumber = Math.floor(Math.random() *6) +1;
    
    if (userNumber > computerNumber) {
    
        document.getElementById("challengeResult").innerHTML = "<span style='color: #7cb518;'>Hai vinto!!!</span>";
    
    } else if (userNumber == computerNumber){
    
        document.getElementById("challengeResult").innerHTML = "<span style='color: #eae151;'>Pareggio, gioca ancora!</span>";
    
    } else {
    
        document.getElementById("challengeResult").innerHTML = "<span style='color: #f00000;'>Hai perso...ritenta!</span>";
    
    }
    
    diceImg1Element.src = diceFaceImgs[userNumber-1];
    diceImg2Element.src = diceFaceImgs[computerNumber-1]; 
});








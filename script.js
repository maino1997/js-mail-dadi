// Fare array email accettabili 
// Chiedere email utente 
// Far passare tutte le email accettabili e confrontarle con la email dell'utente 

const accMail = ["ciao@gmail.com" , "oggi@hotmail.com" , "ieri@yahoo.com"];

const userMail = prompt("inserisci la tua email");

let aut = false;
let notAut = false;

for ( i = 0 ; i < accMail.length ; i++){
    currentMail = accMail[i];

    if(userMail === currentMail){
      aut = true;
    } else {
        notAut = true;
    }
}

const autMessage = "email corretta";
const unautMessage = "non sei autorizzato";
const displayElement = document.getElementById("list");

if (aut == true){
  displayElement.innerText = autMessage;
} else {
    displayElement.innerText = unautMessage;
}




 


// Genero numero random per l'utente
// Genero numero random per il computer
// Li confronto e stabilisco il vincitore

const userNumber = Math.random();
const compNumber = Math.random();

console.log(userNumber);
console.log(compNumber);

const displayGame = document.getElementById("game");

if(userNumber > compNumber){
    displayGame.innerText = "L'utente ha vinto";
} else {
    displayGame.innerText = "Il computer ha vinto";
}
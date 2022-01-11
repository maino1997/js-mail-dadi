// Fare array email accettabili 
// Chiedere email utente 
// Far passare tutte le email accettabili e confrontarle con la email dell'utente 

const accMail = ["ciao@gmail.com" , "oggi@hotmail.com" , "ieri@yahoo.com"];

const userMail = prompt("inserisci la tua email");

let aut = false;

for ( i = 0 ; i < accMail.length ; i++){
    currentMail = accMail[i];

    if(userMail === currentMail){
      aut = true;
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


// Per fare la stessa cosa si può usare anche il metodo .includes 

if (accMail.includes(userMail)){

}




 


// Genero numero random per l'utente
// Genero numero random per il computer
// Li confronto e stabilisco il vincitore

const userNumber = Math.floor(Math.random() * 6) + 1;
const compNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);
console.log(compNumber);

const displayGame = document.getElementById("game");

let message = "Parità";

if(userNumber > compNumber){
    message = `L'utente ha vinto con il numero ${userNumber}`;
} else if (userNumber < compNumber) {
    message = `Il computer ha vinto con il numero ${compNumber}`;
} 

displayGame.innerHTML = `${message}`;
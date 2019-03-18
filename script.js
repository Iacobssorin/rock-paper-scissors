var btns = document.querySelectorAll('button');
var lbl = document.querySelectorAll('label');

const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
const message = document.createElement('p');
message.style.fontSize = "xx-large";
const h1 = document.querySelector('h1');
h1.style.fontSize = "xx-large";

let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;



function myH1_tag() {
   var element = document.getElementById("demo");
element.innerHTML = "for playing you can use either icon or label";
}
function myH1_Tag() {
   var element = document.getElementById("demo");
element.innerHTML = "Make your choice!";
}

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    computerSelection = choices[random];
}

function playRound(playerSelection, computerSelection) {
    // capitalize first letter
    playerSelection = playerSelection.charAt(0).toUpperCase() +
            playerSelection.slice(1);

    if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
         (playerSelection === 'Paper' && computerSelection === 'Rock') ||
         (playerSelection === 'Scissors' && computerSelection === 'Paper') ) {

        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;

    } else if ( (playerSelection === 'Rock' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
                (playerSelection === 'Scissors' && computerSelection === 'Rock') ) {

        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;

    } else roundResult = 'Draw!';

}

function showResult(computerSelection, roundResult) {
    resultDiv.innerHTML = '<br><h3>Computer chose </h3>' + computerSelection + '<br>' +
            roundResult + '<br><br><h3>Player score:</h3> ' + playerScore + '<br>' +
            '<h3>Computer score:</h3> ' + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        message.textContent = (playerScore === 5) ? 'You win!' : 'You lose!';
        message.style.color = (playerScore === 5) ? 'green' : 'red';
        resultDiv.appendChild(message);
        playerScore = 0;
        computerScore = 0;
    }
}


btns.forEach(function (btn){
    
    btn.addEventListener('click', () => computerPlay());
    btn.addEventListener('click', (e) => playRound(e.target.id, computerSelection));
    btn.addEventListener('click', () => showResult(computerSelection, roundResult));
  
});

lbl.forEach(function (x) {

    x.addEventListener('click', () => computerPlay());
    x.addEventListener('click', (e) => playRound(e.target.id, computerSelection));
    x.addEventListener('click', () => showResult(computerSelection, roundResult));
  
});

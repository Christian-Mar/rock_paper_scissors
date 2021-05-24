let userChoice;
let computerChoice;
let result;
let ranNum;


const finalScore = document.getElementById('score')
const possibleChoices = document.querySelectorAll('.choices');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e =>
{
  userChoice = e.target.id;
  ranNum = Math.round(Math.random() * 3);
  generateComputerChoice();
  compare();
  finalScore.innerHTML = `{player: ${userChoice}, </br> computer: ${computerChoice},</br> result: ${result}}`;  
  }));
function generateComputerChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'rock';
  }
  else if(ranNum == 2)
  {
    computerChoice = 'paper';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'scissors';
  }
}
function compare(){
  if(userChoice === computerChoice)
  {
    result = "no winners in this game";
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper')
  {
    result = "the player wins";
  }
   else if (userChoice === 'paper' && computerChoice === 'rock')
  {
    result = "the player wins";
  }
   else if (userChoice === 'rock' && computerChoice === 'scissors')
  {
    result = "the player wins";
  }
   else if (userChoice === 'rock' && computerChoice === 'paper')
  {
    result = "the computer wins";
  }
   else if (userChoice === 'paper' && computerChoice === 'scissors')
  {
    result = "the computer wins";
  }
   else if (userChoice === 'scissors' && computerChoice === 'rock')
  {
    result = "the computer wins.";
  }
}


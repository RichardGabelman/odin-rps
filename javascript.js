function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) {
    return 'Rock';
  } else if (num == 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "Scissors") {
      console.log("You win! Rock beats Scissors");
      return 1;
    } else if (computerSelection == "Paper") {
      console.log("You lose! Paper beats Rock");
      return -1;
    } else {
      console.log("It's a draw! You both picked Rock");
      return 0;
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "Rock") {
      console.log("You win! Paper beats Rock");
      return 1;
    } else if (computerSelection == "Scissors") {
      console.log("You lose! Scissors beats Paper");
      return -1;
    } else {
      console.log("It's a draw! You both picked Paper");
      return 0;
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "Paper") {
      console.log("You win! Scissors beats Paper");
      return 1;
    } else if (computerSelection == "Rock") {
      console.log("You lose! Rock beats Scissors");
      return -1;
    } else {
      console.log("It's a draw! You both picked Scissors");
      return 0;
    }
  }
}

function playGame() {
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

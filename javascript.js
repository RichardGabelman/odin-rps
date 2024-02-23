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
      return "You win! Rock beats Scissors";
    } else if (computerSelection == "Paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "It's a draw! You both picked Rock";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "Rock") {
      return "You win! Paper beats Rock";
    } else if (computerSelection == "Scissors") {
      return "You lose! Scissors beats Paper";
    } else {
      return "It's a draw! You both picked Paper";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "Paper") {
      return "You win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "It's a draw! You both picked Scissors";
    }
  }
}
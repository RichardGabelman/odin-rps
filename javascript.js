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
  let roundSummary;
  let rtnValue;
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      roundSummary = "You win! Rock beats Scissors";
      rtnValue = 1;
    } else if (computerSelection == "Paper") {
      roundSummary = "You lose! Paper beats Rock";
      rtnValue = -1;
    } else {
      roundSummary = "It's a draw! You both picked Rock";
      rtnValue = 0;
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      roundSummary = "You win! Paper beats Rock";
      rtnValue = 1;
    } else if (computerSelection == "Scissors") {
      roundSummary = "You lose! Scissors beats Paper";
      rtnValue = -1;
    } else {
      roundSummary = "It's a draw! You both picked Paper";
      rtnValue = 0;
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      roundSummary = "You win! Scissors beats Paper";
      rtnValue = 1;
    } else if (computerSelection == "Rock") {
      roundSummary = "You lose! Rock beats Scissors";
      rtnValue = -1;
    } else {
      roundSummary = "It's a draw! You both picked Scissors";
      rtnValue = 0;
    }
  }
  const summary = document.querySelector("#currentRound");
  summary.textContent = roundSummary;
  return rtnValue;
}

function playGame() {
  let computerPoints = 0;
  let playerPoints = 0;
  let result;
  const playerScore = document.querySelector("#player");
  const computerScore = document.querySelector("#computer");
  const winner = document.querySelector("#winner");
  const btns = document.querySelectorAll('.buttons');
  btns.forEach(item => {
    item.addEventListener('click', e => {
      const buttonType = e.target.textContent;
      result = playRound(buttonType, getComputerChoice());
      if (result == 1) {
        playerPoints++;
        playerScore.textContent = `Player Score: ${playerPoints}`;
      } else if (result == -1) {
        computerPoints++;
        computerScore.textContent = `Computer Score: ${computerPoints}`;
      }
      if (computerPoints >= 5) {
        winner.textContent = "Computer wins!";
      } else if (playerPoints >= 5) {
        winner.textContent = "You win!";
      }
   })
 })
}

playGame();

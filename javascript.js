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
  if (playerSelection == "Rock") {
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
  if (playerSelection == "Paper") {
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
  if (playerSelection == "Scissors") {
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
  let computerPoints = 0;
  let playerPoints = 0;
  let result;
  const btns = document.querySelectorAll('.buttons');
  btns.forEach(item => {
    item.addEventListener('click', e => {
      const buttonType = e.target.textContent;
      result = playRound(buttonType, getComputerChoice());
      if (result == 1) {
        playerPoints++;
      } else if (result == -1) {
        computerPoints++;
      }
      if (computerPoints >= 5) {
        console.log("Computer wins!");
      } else if (playerPoints >= 5) {
        console.log("You win!");
      }
   })
 })
}

playGame();

// A function to create random computer choice of rock or paper or scissors.
function getComputerChoice(string) {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    string = "ROCK";
  } else if (computerChoice === 2) {
    string = "PAPER";
  } else {
    string = "SCISSORS";
  }
  return string;
}

//A function that takes the choice of the human player as input.
function getHumanChoice(string) {
  string = prompt("Please enter your choice!").toUpperCase();
  return string;
}

// Initial scores.
let computerScore = 0;
let humanScore = 0;

// Assigning the human player choice and the computer choice in a variable.
let computerMove = getComputerChoice();
let humanMove = getHumanChoice();

// A function to play a round of the game.
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log("It's a tie!");
    } else if (computerChoice === "PAPER") {
      computerScore += 1;
      console.log("You Lose!  'PAPER' beats 'ROCK'");
    } else {
      humanScore += 1;
      console.log("You Won!  'ROCK' beats 'SCISSORS'");
    }
  } else if (humanChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      humanScore += 1;
      console.log("You Won!  'PAPER' beats 'ROCK'");
    } else if (computerChoice === "PAPER") {
      console.log("It's a tie!");
    } else {
      computerScore += 1;
      console.log("You Lose!  'SCISSORS' beats 'PAPER'");
    }
  } else if (humanChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      computerScore += 1;
      console.log("You Lose!  'ROCK' beats 'SCISSORS'");
    } else if (computerChoice === "PAPER") {
      humanScore += 1;
      console.log("You Won!  'SCISSORS' beats 'PAPER'");
    } else {
      console.log("It's a tie!");
    }
  }
  return;
}

function playGame() {
  //Round 1
  playRound(humanMove, computerMove);

  //Round 2
  computerMove = getComputerChoice();
  humanMove = getHumanChoice();
  playRound(humanMove, computerMove);

  //Round 3
  computerMove = getComputerChoice();
  humanMove = getHumanChoice();
  playRound(humanMove, computerMove);

  //Round 4
  computerMove = getComputerChoice();
  humanMove = getHumanChoice();
  playRound(humanMove, computerMove);
  
  //Round 5
  computerMove = getComputerChoice();
  humanMove = getHumanChoice();
  playRound(humanMove, computerMove);
}

// A function to declare final winner after 5 rounds.
playGame();
if(humanScore > computerScore) {
  console.log("Winner is Human!");
} else if(humanScore < computerScore) {
  console.log("Winner is Computer!");
} else {
  console.log("It's a tie!");
}
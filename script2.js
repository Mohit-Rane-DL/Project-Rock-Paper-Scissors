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

let btnRock = document.querySelector("#btnRock");
let btnPaper = document.querySelector("#btnPaper");
let btnScissors = document.querySelector("#btnScissors");
let buttons = document.querySelectorAll(".buttons");
let result = document.querySelector(".result");
let resetGame = document.querySelector(".resetGame");

// Initial scores.
let cScore = document.querySelector(".computerScore");
let hScore = document.querySelector(".humanScore");

let computerScore = 0;
let humanScore = 0;


// Assigning the human player choice and the computer choice in a variable.
let computerMove = getComputerChoice();
let humanMove;

btnRock.addEventListener("click", () => {
  humanMove = "ROCK";
  playRound(humanMove, computerMove);
});

btnPaper.addEventListener("click", () => {
  humanMove = "PAPER";
  playRound(humanMove, computerMove);
});

btnScissors.addEventListener("click", () => {
  humanMove = "SCISSORS";
  playRound(humanMove, computerMove);
});

// To Play a round of game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      alert("It's a tie!");
    } else if (computerChoice === "PAPER") {
      computerScore += 1;
      cScore.textContent = computerScore;
      alert("You Lose!  'PAPER' beats 'ROCK'");
    } else {
      humanScore += 1;
      hScore.textContent = humanScore;
      alert("You Won!  'ROCK' beats 'SCISSORS'");
    }
  } else if (humanChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      humanScore += 1;
      hScore.textContent = humanScore;
      alert("You Won!  'PAPER' beats 'ROCK'");
    } else if (computerChoice === "PAPER") {
      alert("It's a tie!");
    } else {
      computerScore += 1;
      cScore.textContent = computerScore;
      alert("You Lose!  'SCISSORS' beats 'PAPER'");
    }
  } else if (humanChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      computerScore += 1;
      cScore.textContent = computerScore;
      alert("You Lose!  'ROCK' beats 'SCISSORS'");
    } else if (computerChoice === "PAPER") {
      humanScore += 1;
      hScore.textContent = humanScore;
      alert("You Won!  'SCISSORS' beats 'PAPER'");
    } else {
      alert("It's a tie!");
    }
  }
  return;
}


// To declare final winner after 5 rounds.
let count = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () =>{
    count++;
    buttons.forEach(() =>{
      console.log(count);
      if (count === 5){
        if (humanScore > computerScore) {
          result.textContent = "Winner is You!";
          count = 0;
          resetGame.removeAttribute("hidden");
        } else if (humanScore < computerScore) {
          result.textContent = "Winner is Computer!";
          count = 0;
          resetGame.removeAttribute("hidden");
        } else {
          result.textContent = "It's a tie!";
          count = 0;
          resetGame.removeAttribute("hidden");
        }
      }
    });
  });
});

// To Reset Game or New Game
resetGame.addEventListener("click", () =>{
    resetGame.setAttribute("hidden", "");
    count = 0;
    computerScore = 0;
    humanScore = 0;
    cScore.textContent = computerScore;
    hScore.textContent = humanScore;
    result.textContent = "";
});
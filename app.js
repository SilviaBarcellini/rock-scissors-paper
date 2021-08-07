const startGameBtn = document.getElementById("start-game-btn")

//global variables
const ROCK = "ROCK"; 
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const DEFAULT_CHOICE = ROCK;

//user chooses an option
const getPlayerChoice = function() {
    const selection = prompt(`Hi! Are you ${ROCK}, ${SCISSORS} or ${PAPER}?`, "").toUpperCase();
    if (
        selection !==  ROCK &&
        selection !==  SCISSORS &&
        selection !==  PAPER
    ) {
        alert(`Invalid enter! I'll choose ${DEFAULT_CHOICE} for you!`);
        return DEFAULT_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random(); 
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

startGameBtn.addEventListener("click", function() {//anonymous function
    console.log("Starting game...");
    const playerSelection = getPlayerChoice(); 
    console.log(playerSelection);
});

//a method is a function stored inside an object
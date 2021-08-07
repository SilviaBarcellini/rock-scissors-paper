const startGameBtn = document.getElementById("start-game-btn")

const ROCK = "ROCK"; 
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const DEFAULT_CHOICE = ROCK;

const playerChoice = function() {
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


startGameBtn.addEventListener("click", function() {
    console.log("Starting game...");
    const playerSelection = playerChoice(); 
    console.log(playerSelection);
});

//a method is a function stored inside an object
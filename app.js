const startGameBtn = document.getElementById("start-game-btn")

//global variables
const ROCK = "ROCK"; 
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_USER_WINS = "YOU WIN!!"
const RESULT_COMPUTER_WINS = "LOL, I WIN! Try again :)"

let gameIsRunning = false; 

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

const getWinner = function(computerCh, userCh) {
    if (computerCh === userCh) {
        return RESULT_DRAW;
    } else if (
        computerCh === ROCK && userCh === PAPER ||
        computerCh === PAPER && userCh === SCISSORS ||
        computerCh === SCISSORS && userCh === ROCK
        ) {
            return RESULT_USER_WINS;
        } else {
            return RESULT_COMPUTER_WINS;
        }
}

startGameBtn.addEventListener("click", function() {//anonymous function
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting ...") 
        //calling all the functions here!
    const playerSelection = getPlayerChoice(); 
    console.log(playerSelection);
    const computerChoice = getComputerChoice(); 
    console.log(computerChoice);
    const winner = getWinner(playerSelection, computerChoice); 
    console.log(winner)
});

//a method is a function stored inside an object
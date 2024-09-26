let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const totalRounds = 5; // Set the total number of rounds
let currentRound = 0; // Track the current round

function getComputerChoice() {
    const id = Math.floor(Math.random() * 3);
    return choices[id].toLowerCase();
}

function getHumanChoice(choice) {
    const cleanChoice = choice.toLowerCase();
    
    if (cleanChoice === choices[0].toLowerCase() || 
        cleanChoice === choices[1].toLowerCase() || 
        cleanChoice === choices[2].toLowerCase()) {
        return cleanChoice;
    } else {
        return "Invalid input";
    }
}

function playRound(human) {
    if (currentRound >= totalRounds) {
        alert("Game over! You've completed all rounds.");
        return; // Exit if the game is over
    }

    const humanChoice = getHumanChoice(human);
    const computerChoice = getComputerChoice();

    if (humanChoice === "Invalid input") {
        alert("Invalid input, please try again.");
        return; // Exit if the input is invalid
    }

    let result;

    switch (true) {
        case humanChoice === choices[0].toLowerCase() && computerChoice === choices[2].toLowerCase():
            humanScore++;
            result = "You win! Rock beats Scissors";
            break;
        case humanChoice === choices[2].toLowerCase() && computerChoice === choices[1].toLowerCase():
            humanScore++;
            result = "You win! Scissors beats Paper";
            break;
        case humanChoice === choices[1].toLowerCase() && computerChoice === choices[0].toLowerCase():
            humanScore++;
            result = "You win! Paper beats Rock";
            break;
        case computerChoice === choices[0].toLowerCase() && humanChoice === choices[2].toLowerCase():
            computerScore++;
            result = "You Lose! Rock beats Scissors";
            break;
        case computerChoice === choices[2].toLowerCase() && humanChoice === choices[1].toLowerCase():
            computerScore++;
            result = "You Lose! Scissors beats Paper";
            break;
        case computerChoice === choices[1].toLowerCase() && humanChoice === choices[0].toLowerCase():
            computerScore++;
            result = "You Lose! Paper beats Rock";
            break;
        case computerChoice === choices[0].toLowerCase() && humanChoice === choices[0].toLowerCase():
            result = "It's a Tie!";
            break;
        case computerChoice === choices[1].toLowerCase() && humanChoice === choices[1].toLowerCase():
            result = "It's a Tie!";
            break;
        case computerChoice === choices[2].toLowerCase() && humanChoice === choices[2].toLowerCase():
            result = "It's a Tie!";
            break;
        default:
            result = "No Match";
    }

    document.getElementById('winnerDisplay').textContent = result;
    document.getElementById('resultMessage').textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    currentRound++; // Increment the current round
    if (currentRound >= totalRounds) {
        finalWinner(); // Call finalWinner when all rounds are complete
    }
}

function finalWinner() {
    if (humanScore > computerScore) {
        alert(`Final Score: You: ${humanScore}, Computer: ${computerScore} - You WIN!`);
    } else if (humanScore < computerScore) {
        alert(`Final Score: You: ${humanScore}, Computer: ${computerScore} - You LOSE!`);
    } else {
        alert(`Final Score: You: ${humanScore}, Computer: ${computerScore} - It's a TIE!`);
    }
    
    // Reset the game
    resetGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    document.getElementById('winnerDisplay').textContent = '';
    document.getElementById('resultMessage').textContent = 'Score - You: 0, Computer: 0';
}

// UI 

const Rock = document.querySelector(".rock");
const Paper = document.querySelector(".paper");
const Scissors = document.querySelector(".scissors");

Rock.addEventListener('click', () => {
    playRound("Rock");
});

Paper.addEventListener('click', () => {
    playRound("Paper");
});

Scissors.addEventListener('click', () => {
    playRound("Scissors");
});

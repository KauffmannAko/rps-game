
let humanScore = 0;

let computerScore = 0;

const choices =  ["Rock","Paper","Scissors"];

/*
 * Function to get a random choice for the computer in a Rock-Paper-Scissors game.
 * This function generates a random index to select one of three possible choices:
 * Rock, Paper, or Scissors.
 */
function getComputerChoice() {
    // Generate a random integer between 0 and 2
    const id = Math.floor(Math.random() * 3);

    // Return the computer's choice based on the random index
    return  choices[id].toLowerCase();
}


/*
 * Function to get the user's choice in a Rock-Paper-Scissors game.
 * This function prompts the user to enter their choice (rock, paper, or scissors),
 * converts the input to lowercase, and checks if it is valid.
 * If the input is valid, it returns the choice; otherwise, it returns "Invalid input".
 */
function getHumanChoice() {
    // Prompt the user to enter their choice
    const choice = window.prompt("Enter choice: ");
    
    // Convert the user's choice to lowercase for uniformity
    const cleanChoice = choice.toLowerCase();
    
    // Check if the cleaned choice is one of the valid options
    if (cleanChoice === "rock" || 
        cleanChoice === "paper" || 
        cleanChoice === "scissors") {
        // Return the valid choice
        return cleanChoice;
    } else {
        // Return an error message for invalid input
        return "Invalid input";
    }
}

// Rock beats scissors, scissors beat paper, and paper beats rock.
function playRound(humanChoice, computerChoice){
    if(humanChoice === choices[0].toLowerCase() && computerChoice === choices[2].toLowerCase()){
        return `You Win`
    }else{
        return `You lose Rock beats Scissors`;
    }

}

alert(playRound(getHumanChoice(),getComputerChoice()));
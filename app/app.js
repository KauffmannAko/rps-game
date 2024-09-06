
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
    if (cleanChoice === choices[0].toLowerCase() || 
        cleanChoice === choices[1].toLowerCase() || 
        cleanChoice === choices[2].toLowerCase()) {
        // Return the valid choice
        return cleanChoice;
    } else {
        // Return an error message for invalid input
        return "Invalid input";
    }
}

// Rock beats scissors, scissors beat paper, and paper beats rock.
function playRound(Rounds) {
    // Loop through the number of rounds specified
    for (let i = 1; i <= Rounds; i++) {
        const humanChoice = getHumanChoice(); // Get the human player's choice
        const computerChoice = getComputerChoice(); // Get the computer's choice

        // Check if the human's choice is invalid
        if (humanChoice === "Invalid input") {
            alert("Invalid input, please try again."); // Alert the user
            i--; // Decrement i to repeat the round
            continue; // Skip the rest of the loop for this iteration
        }

        let result; // Declare a variable to hold the result of the round

        // Determine the outcome of the round using a switch statement
        switch (true) {
            // Human wins scenarios
            case humanChoice === choices[0].toLowerCase() && computerChoice === choices[2].toLowerCase():
                humanScore++; // Increment human score
                result = "You win! Rock beats Scissors"; // Set result message
                break;
            case humanChoice === choices[2].toLowerCase() && computerChoice === choices[1].toLowerCase():
                humanScore++; // Increment human score
                result = "You win! Scissors beats Paper"; // Set result message
                break;
            case humanChoice === choices[1].toLowerCase() && computerChoice === choices[0].toLowerCase():
                humanScore++; // Increment human score
                result = "You win! Paper beats Rock"; // Set result message
                break;

            // Computer wins scenarios
            case computerChoice === choices[0].toLowerCase() && humanChoice === choices[2].toLowerCase():
                computerScore++; // Increment computer score
                result = "You Lose! Rock beats Scissors"; // Set result message
                break;
            case computerChoice === choices[2].toLowerCase() && humanChoice === choices[1].toLowerCase():
                computerScore++; // Increment computer score
                result = "You Lose! Scissors beats Paper"; // Set result message
                break;
            case computerChoice === choices[1].toLowerCase() && humanChoice === choices[0].toLowerCase():
                computerScore++; // Increment computer score
                result = "You Lose! Paper beats Rock"; // Set result message
                break;

            // Tie scenarios
            case computerChoice === choices[0].toLowerCase() && humanChoice === choices[0].toLowerCase():
                result = "It's a Tie!"; // Set result message
                break;
            case computerChoice === choices[1].toLowerCase() && humanChoice === choices[1].toLowerCase():
                result = "It's a Tie!"; // Set result message
                break;
            case computerChoice === choices[2].toLowerCase() && humanChoice === choices[2].toLowerCase():
                result = "It's a Tie!"; // Set result message
                break;

            default:
                result = "No Match"; // Fallback case if no conditions match
        }

        alert(result); // Display the result of the round
    }
}

// Call the function to play 5 rounds
playRound(5);

// Display the final score after all rounds are complete
alert(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

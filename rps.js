function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); //Generates a number from 0 to 2
    if (choice == 0) {
        return "Rock";
    }
    else if (choice == 1) {
        return "Paper";
    }
    else if (choice == 2) {
        return "Scissors";
    }
    else {
        return "error"
    }
}
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase(); //Simplify user input by changing to all lowercase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); //Capitalize the first letter to match the project's specification

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats rock.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats paper.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats paper.";
    }
    else if (playerSelection == computerSelection) {
        return "It's a tie! You and the computer both picked " + playerSelection;
    }
    else {
        return "Error!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let player = prompt("Rock Paper Scissors! Make your choice.");
        let computer = getComputerChoice();
        console.log("Player chooses: " + player); //Explicitly show Player and Computer's choices
        console.log("Computer chooses: " + computer);
        let result = playRound(player,computer);
        console.log(result);
        if (result.includes("win")){ //if result has the word "win" in it, that means the player won
            playerScore++; 
        }
        else if (result.includes("lose")){ //if result has the word "lose" in it, that means the player lost
            computerScore++;
        }
        console.log("Player: " + playerScore);
        console.log("Computer: " +computerScore);
    }
    console.log("Final score: " + playerScore + "-" + computerScore);
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a draw!");
    }
}
game();
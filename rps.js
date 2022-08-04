function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
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

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

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

console.log(playRound("ROCK", "Scissors"));
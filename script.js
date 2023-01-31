
function getComputerChoice() {
    let computersNumber = Math.floor(Math.random() * 3);
    let computersChoice = "";
    switch (computersNumber) {
        case 0:
            computersChoice = "Rock";
            break;
        case 1:
            computersChoice = "Paper";
            break;
        case 2:
            computersChoice = "Scissors";
            break;
    }
    return computersChoice;
}
function playRound(computerSelection, playerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        return "It was a draw you both selected " + computerSelection;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Won! rock beats scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Won! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Won! Paper beats rock";
    }
    else {
        return "you loose";
    }
}
let computerSelection = getComputerChoice();
let playerSelection = "";


/*function game(computerSelection, playerSelection) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Select either Rock, Paper, Scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
        console.log("\n")
    }
}*/
game(computerSelection, playerSelection);

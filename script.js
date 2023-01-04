
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
let computerSelection = getComputerChoice();
let playerSelection = window.prompt("Select either Rock, Paper, Scissors");

function playRound(computerSelection, playerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        return "It was a draw you both selected " + computerSelection;
    } else if (players.toLowerCase() === "rock" && computerSelection.toLowerCase == "sissors") {
        return "You Won! rock beats scissors";
    }
}
playRound(computerSelection, playerSelection);

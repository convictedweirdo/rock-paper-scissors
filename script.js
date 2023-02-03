var playerScore = 0;
var computerScore = 0;
CONST = MAX_ROUNDS = 6;

function getPlayerChoice() {
    var input = "";
    var valid = false;
        
    do {
        input = prompt("type rock, paper, or scissors");
        input = input.toLowerCase();

        if (input === "rock" || input === "paper" || input === "scissors") {
            valid = true;
        } else {
            valid = false;
        }
    } while (valid === false);
    return input;
}

function getComputerChoice() {
    var result = "";
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        result = "rock";
    } else if (choice == 1) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

function playRound(playerChoice, computerChoice) {

    var winner = "";

    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            winner = "computer";
        } else if (computerChoice == "scissors") {
            winner = "player";
        } else {
            winner = "tie";
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            winner = "computer";
        } else if (computerChoice == "paper") {
            winner = "player";
        } else {
            winner = "tie";
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            winner = "computer";
        } else if (computerChoice = "rock") {
            winner = "player";
        } else {
            winner = "tie";
        }
    }    
    //console.log(winner);
    if (winner == "player") {
        playerScore++;
    } else if (winner == "computer") {
        computerScore++;
    }
    return winner;
}

function game() {

    victory = "";
    highestScore = 0;

    for (var i = 1; i < MAX_ROUNDS; i++) {
        var playerChoice = getPlayerChoice();
        var computerChoice = getComputerChoice();
        var thewinner = playRound(playerChoice, computerChoice);

        console.log(`Round ${i}! Go!`);
        console.log(`player choice is ${playerChoice}`);
        console.log(`computer choice is ${computerChoice}`);
        console.log(`and the winner is ${thewinner}`);

        console.log(`PLAYER SCORE: ${playerScore}`);
        console.log(`COMPUTER SCORE: ${computerScore}`);
        console.log("\n")
    }

    if (computerScore > playerScore) {
        victory = "COMPUTER";
        highestScore = computerScore;
    } else if (computerScore < playerScore) {
        victory = "PLAYER";
        highestScore = playerScore;
    } else {
        victory = "TIE";
    }

    if (victory == "TIE") {
        console.log("AND THE SCORE IS TIED! WOMP WOMP")
    } else {
        console.log(`AND THE WINNER, with ${highestScore} POINTS, IS ${victory}`);
    }
    
}

game();





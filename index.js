function getComputerChoice() {
    let random = Math.random() * 3;
    if (random <= 1) {
        return 'Rock';
    } else if (random <= 2) {
        return 'Paper';
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt('Type \'rock\', \'paper\', or \'scissors\'.');
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            // tie
            console.log(`Tie! You both picked ${humanChoice}.`)
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
            // human lost
            computerScore++;
            console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
        } else if (computerChoice === 'Rock' && humanChoice === 'Paper' || computerChoice === 'Paper' && humanChoice === 'Scissors' || computerChoice === 'Scissors' && humanChoice === 'Rock') {
            // human won
            humanScore++;
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        } else {
            console.log('Oops, something went wrong!!')
        }
    }

    const NUMBER_OF_ROUNDS = 5;

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Human score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
}



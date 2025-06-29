function getComputerChoice() {
    let random = Math.random() * 3;
    console.log(random);
    if (random <= 1) {
        return 'rock';
    } else if (random <= 2) {
        return 'paper';
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt('Type \'rock\', \'paper\', or \'scissors\'.');
    input = input.toLowerCase();
    return input;
}
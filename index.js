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

const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

startPlaying = () => {
    let playerPosition = 0
    let rollDie = Math.floor(Math.random() * 10) % 6 + 1;
    let option = Math.floor(Math.random() * 10) % 3;
    switch (option) {
        case NO_PLAY:
            return playerPosition = playerPosition;
        case LADDER:
            return playerPosition = playerPosition + rollDie;
        case SNAKE:
            return playerPosition = playerPosition - rollDie;
    }
}
module.exports = { startPlaying };


const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;
let playerPosition = 0

diceRoll = () => {
    let rollDie = Math.floor(Math.random() * 10) % 6 + 1;
    return rollDie;
}
startPlaying = () => {
    while ( playerPosition < 100 ) {
        let option = Math.floor(Math.random() * 10) % 3;
        switch (option) {
            case NO_PLAY:
                playerPosition = playerPosition;
            case LADDER:
                if (( playerPosition + diceRoll()) <= 100 ) {
                    playerPosition = playerPosition + diceRoll()
                };
            case SNAKE:
                playerPosition = playerPosition - diceRoll();
        }
        console.log(playerPosition);
    }   
}
module.exports = { startPlaying };

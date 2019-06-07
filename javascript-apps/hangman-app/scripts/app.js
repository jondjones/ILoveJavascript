const outputDiv = document.querySelector('#output');
const guessesleftDiv = document.querySelector('#guesses-left');
const previousGuessesDiv = document.querySelector('#previous-guesses');
const errorDiv = document.querySelector('#error-message');
let hangman;

const renderGameDetails = () => {
    guessesleftDiv.innerHTML = hangman.attemptsLeft;
    previousGuessesDiv.innerHTML = hangman.previousGusses;
    outputDiv.innerHTML = '';
    hangman.currentGameState.split('').forEach((letter) => {
        const letterElement = document.createElement('span');
        letterElement.innerText = letter;
        outputDiv.appendChild(letterElement);
    })
};

const startGame = async () => {
    const puzzle = await getPuzzle();
    console.log(puzzle);
    hangman = new Hangman(puzzle, 4);
    renderGameDetails();
};

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    const { message, error } = hangman.makeGuess(guess);
    renderGameDetails();

    if (error) {
        errorDiv.innerHTML = message;
    } else { errorDiv.innerHTML = ''; }
});

document.querySelector('#reset-game').addEventListener('click', () => {
    startGame()
});

startGame();
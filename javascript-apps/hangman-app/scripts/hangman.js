class Hangman { 
    constructor(wordToGuess, allowedNumberOfGusses) {
        this.wordToGuess = wordToGuess;
        this.lettersInWord =  wordToGuess.toLowerCase().split('');
        this.allowedNumberOfGusses = allowedNumberOfGusses || 3;
        this.previousGussedLetters = [];
        this.won = false;
        this.currentGuess;
    }

    get attemptsLeft()
    {
        return this.allowedNumberOfGusses;
    }

    get currentGameState()
    {
        if (!this.currentGuess) {
            this.calculatePuzzle(''); 
        }
        return this.currentGuess;
    }


    get previousGusses()
    {
        let guessedLettersString = this.previousGussedLetters.join(", ");
        guessedLettersString = !guessedLettersString ? 'None' : guessedLettersString;
        return guessedLettersString;
    }

    createReturnObject(message, won, error) {
        return {
            message: message,
            won: won,
            error: error
        };     
    }

    validateGuess(guessedChar)
    {
        if (this.won) {
            return this.createReturnObject('You won!', true);
        } else if (this.allowedNumberOfGusses === 0) {
            return this.createReturnObject(`You lost the word was \'${this.wordToGuess}\'`, false, true);
        } else if (this.previousGussedLetters.indexOf(guessedChar) != -1) {
            return this.createReturnObject('You have already guessed with that letter, stupid!', false, true);
        } 

        return null;
    }

    calculatePuzzle(guessedChar) {
        this.currentGuess = '';
        this.lettersInWord.forEach((char) => {
            if (this.previousGussedLetters.indexOf(char) != -1) {
                this.currentGuess += char;
            } else if (guessedChar == char) {
                this.currentGuess += char;
            } else if (char == ' ') {
                this.currentGuess += ' ';
            } else {
                this.currentGuess += '*';
            }
        });
    }

    makeGuess(guessedChar)
    {
        const validateStatus = this.validateGuess(guessedChar);
        if (validateStatus) {
            return validateStatus;
        }

        // Add current guess to previous guesses
        this.previousGussedLetters.push(guessedChar);

        // Remove a life is needed
        if (this.lettersInWord.indexOf(guessedChar) === -1) {
            this.allowedNumberOfGusses = this.allowedNumberOfGusses - 1; 
        };

        // Calculate puzzle
        this.calculatePuzzle(guessedChar);

        // No astricks = won
        if (this.currentGuess.indexOf('*') === -1) {
            this.won = true;
        };

        return this.createReturnObject(this.currentGuess, this.won);
    }
};
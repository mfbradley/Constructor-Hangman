// Require inquirer or prompt
// WORD OBJECT
// // word
// // // 1...n: Letters
// // // exposeLetter(letter)
// // // isExposed();

function Word(value) {
    this.letters = [];

    for (var l = 0; l < value.length; l++) {
        this.letters.push(newLetter(value[l]));
    }

    //
    this.exposeLetter = function(letter) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].exposeIfMatches(letter);
        }
    };
    this.isExposed = function() {
        for (var i = 0; i < this.letters.lengt; i++) {
            if (!this.letters[i].exposed()) {
                return false;
            }
        }
        return true;
    };
}
// // letter
// // // character
// // // is exposed
// // // isNotExposed
// exposeIfMatches(letter)

function Letter(character) {
    this.exposed = false;
    this.character = character;

    this.exposeIfMatches = function(letter) {
        if (this.character === letter) {
            this.exposed = true;
        }
    };
}

// NEW GAME
// Initialize new game
// Set number of guesses remaining to 10
// Randomly pick a word from an array of choices

// CONFIRM NEW GAME
// // Ask if they want to play again
// // //if yes,
// // // // new game
// // //Else
// // // // Exit


// GUESS LETTER
// If guesses > 0
// // Ask user to guess a letter
// // Expose letter in currentWord, if used
// // If word is completely exposed:
// // // tell user they win!
// // // confirmNewGame();


// Decrement guesses by 1
// Guess Letter
// Else
// "Do you want to play again? (Y/N)"
// If yes:
// New game
// Else:
// Do nothing (i.e. quit)

var wordChoices = [
    "apple",
    "banana"
]

var currentWord;
var numGuesses;

function newGame() {
    numGuesses = 10;
    // randomly pick a word
    currentWord = new Word(wordChoices[0];
        // need logic to choose random words (replace above with correct code)
        guessLetter();
    }

    function guessLetter() {
        if (numGuesses > 0) {
            inquirer.prompt([{
                "message": "Guess a letter:",
                "name": "letter"
            }]);
        }
        .then(function(userInput) {
            currentWord.exposeLetter(userInput.letter);
            if (currentWord.isExposed()) {
                //user won
                // confirm next game
            }
            else {
                numGuesses--;
                guessLetter();
            };
        });
    })
// ask user to guess (inquirer)
numGuesses--;
guessLetter();
}

else {
    // ask user if they want to play again
    // if yes, newGame
}

newGame();

}

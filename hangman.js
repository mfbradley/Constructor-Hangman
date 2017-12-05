// PSEUDOCODE
// ===============================================================================
// New game
// * Set number of guesses remaining to 10
// * Randomly pick a word from array of choices
// * Ask user to pick first letter

// Confirm New Game
// * Ask if they want to play again
// * If yes,
//   * New game
// * Else
//   * Exit

// Guess Letter
// * If guesses > 0
//   * Ask the user to guess a letter
//   * Expose letter in currentWord, if used
//   * If word is completely exposed:
//     * Tell user they win!
//     * Confirm new game
//   * Else
//     * Decrement guesses by 1
//     * Guess Letter
// * Else
//   * Confirm new game

// GLOBAL VARIABLES
// ===============================================================================

// require inquirer package, letter and word files
var inquirer = require('inquirer');
var letter = require('./assets/javascript/letter.js');
var word = require('./assets/javascript/word.js');

// est global variables
var guessesRemaining;
var letterBlanks = [];

// computer picks a random word from an array
var wordOptions = ["yellowstone", "yosemite", "grand canyon", "zion", "acadia", "arches", "glacier", "bryce canyon", "great smoky mountains", "denali", ];
var currentWord = "";
var lettersInWord = [];
var numBlanks;

// FUNCTIONS
// ===============================================================================

function startGame() {
    guessesRemaining = 10;
}

// MAIN PROCESS
// ===============================================================================

startGame();
// user begins game with 10 guesses

// blanks appear for each letter

// user is asked to pick a letter
inquirer.prompt([{
    name: "guessALetter",
    message: "Guess a letter!"
}]).then(function(answers) {
    console.log(answers);
    guessesRemaining--;
    console.log(guessesRemaining);
});
// user guesses a letter
// blanks expose letters if the user's guess matches that letter
// guesses decrement by 1 until there aren't any guesses remaining
// if guesses = 0, user is asked if they would like to play again y/n?

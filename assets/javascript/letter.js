var inquirer = require('inquirer');

guessLetter();

function guessLetter() {
    inquirer.prompt([{
        name: "letter",
        type: "input",
        message: "Guess a letter!"
    }]).then(function(userGuess) {
        console.log(userGuess.letter);
    });
}

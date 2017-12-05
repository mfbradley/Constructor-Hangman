// PSEUDOCODE
// ===============================================================================

// GLOBAL VARIABLES
// ===============================================================================

// FUNCTIONS
// ===============================================================================

// MAIN PROCESS
// ===============================================================================


var inquirer = require('inquirer');

inquirer.prompt([{
    name: "question",
    message: "Would you like to play again?"
}]);




-- -- -- -- -- -- -- -- -

var currentWord;
var wordArr = ["apple", "orange", "banana", "pear"];
var guessesLeft;

gameStart();


function gameStart() {
    inquirer.prompt([{
        type: "list",
        name: "playGame",
        message: "Would you like to play a new game of hangman?",
        choices: ["Yes", "No"]
    }]).then(function(user) {
        if (user.playGame === "Yes") {
            console.log("Alright, lets get started!");
            newGame();
        }
        else {
            console.log("Ok, maybe another time...");
        }
    });
}


function newGame() {
    guessesLeft = 10;
    currentWord = new Word(wordArr[Math.floor((Math.random() * wordArr.length))]);
    guessLetter();

}

function guessLetter() {
    if (guessesLeft > 0) {
        inquirer.prompt([{
            "message": "Guess a letter:",
            "name": "letter"

        }]).then(function(userInput) {
            currentWord.exposeLetter(userInput.letter);
            if (currentWord.isExposed()) {

            }
            else {
                guessesLeft--;
                guessLetter();
            }
        });

    }
    else {
        gameStart();
    }
}

function Word(value) {
    this.lettersArr = [];

    //looping through each letter of value (wordChoice) and pushing each index to lettersArr and assigning "value" as the "character" of "Letter"
    for (var l = 0; l < value.length; l++) {
        this.lettersArr.push(new Letter(value[l]));
    }

    // loop through characters pushed to lettersArr
    //expose individual letters if character and letter match
    this.exposeLetter = function(letter) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].exposeIfMatches(letter);
        }
    };

    //deciding if user won by looping through lettersArr and checking if all letters are exposed. if all are exposed, will return true, if not, it will keep looping
    this.isExposed = function() {
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (!this.lettersArr[i].exposed) {
                return false;
            }
        }
        console.log("YOU WIN!!!");
        gameStart();
        return true;

    };


}

function Letter(character) {
    this.exposed = false;
    this.character = character;

    //comparing two letters and deciding if it's gonna be exposed
    this.exposeIfMatches = function(letter) {
        console.log(character);
        if (this.character === letter) {
            this.exposed = true;
        }
        if (this.exposed === false) {
            return "_";

        }
        // } else if (this.exposed === false) {
        //     return "_"
        // } else {
        //     return this.character
        // }





        // for (var i = 0; i < character.length; i++) {
        // console.log(character);
        // if(this.character === letter) {
        // this.exposed = true;
        // } if (this.exposed === false) {
        //     character = "_";
        // }

        // }


    };
}

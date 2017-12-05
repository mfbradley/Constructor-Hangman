console.log("word file working!");

// est global variables
var letterBlanks = [];

// computer picks a random word from an array
var wordOptions = ["yellowstone", "yosemite", "grand canyon", "zion", "acadia", "arches", "glacier", "bryce canyon", "great smoky mountains", "denali", ];
var currentWord = "";
var lettersInWord = [];
var numBlanks;


function Word(value) {
    currentWord = wordOptions[Math.floor(Math.random(wordOptions) * wordOptions.length)];
    console.log(currentWord);

    lettersInWord = currentWord.split("");
    console.log(lettersInWord);

    numBlanks = lettersInWord.length;
    console.log(numBlanks);

    for (var i = 0; i < numBlanks.length; i++) {
        letterBlanks.push("_");
        console.log(letterBlanks);
    }
}

Word();

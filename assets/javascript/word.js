// console.log("word file working!");

// est global variables
var letterBlanks = [];

var wordOptions = ["yellowstone", "yosemite", "grand canyon", "zion", "acadia", "arches", "glacier", "bryce canyon", "great smoky mountains", "denali"];
var currentWord = "";
var lettersInWord = [];
var numBlanks;

function makeBlanks() {
    for (var i = 0; i < lettersInWord.length; i++) {
        letterBlanks.push("_");
    }
    console.log("");
    console.log(letterBlanks.join(" "));
    console.log("");
}

function Word(value) {
    // computer picks a random word from an array
    currentWord = wordOptions[Math.floor(Math.random(wordOptions) * wordOptions.length)];
    // console.log(currentWord);

    // split currentWord into an array of letters
    lettersInWord = currentWord.split("");
    // console.log(lettersInWord);

    // determine number of letters in each word
    numBlanks = lettersInWord.length;
    // console.log(numBlanks);

    // blanks appear for each letter
    makeBlanks();

}

Word();

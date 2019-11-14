// * HOMEWORK INSTRUCTIONS: **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

var inquirer = require("inquirer");
var Word = require("./word.js");

// Array of bird names
var birdNames = ["owl", "hawk", "parakeet", "crane", "vulture", "eagle", "swan", "bluebird", "hummingbird", "ostrich", "pigeon", "dove", "heron", "toucan", "meadowlark", "pelican", "wren", "emu", "chicken", "robin", "puffin", "albatross", "parrot", "penguin", "sparrow", "bunting", "chickadee", "falcon", "grouse", "kiwi", "magpie", "osprey", "peacock", "turkey", "finch", "cormorant", "woodpecker", "cockatoo", "quail", "partridge", "pheasant", "flamingo", "crow", "raven"];

// Text colors (from this Stack Overflow post: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)
var FgWhite = "\x1b[0m";
var FgCyan = "\x1b[36m";
var FgGreen = "\x1b[32m";
var FgYellow = "\x1b[33m";
var BgRed = "\x1b[41m";
var BgBlue = "\x1b[44m";

// Set up the array for the inquirer input
var question = [{
    type: "input",
    name: "guessedLetter",
    message: "Guess a letter:",
    // Filter to change any uppercase inputs to lowercase
    filter: function (input) {
        return input.toLowerCase();
    },
    // Ensures input is 1 character and not a number
    validate: function (input) {
        if ((input.length === 1) && !(Number(input))) {
            return true;
        } else {
            return false;
            console.log("\n")
        }
    }
}]

// Create an array to store the guessed letters from the user, set the number of guesses
var guessedLetters = [];
var word = randomWord();
var guesses = 10;

// Function to handle guessed letter
function guessLetter() {
    inquirer
        .prompt(question)
        .then(function (response) {
            if (guessedLetters.includes(response.guessedLetter)) {
                console.log("---------------------------------------------------" + "\nYou have already guessed " + FgYellow + response.guessedLetter + FgWhite + ". Try a different letter." + "\n---------------------------------------------------")
                console.log(word.wordDisplay().join(" "));
                console.log("Guesses left: " + FgCyan + guesses + FgWhite + "\n");
                guessLetter();
            }
            else {
                guessedLetters.push(response.guessedLetter);
                var guess = response.guessedLetter;
                var found = word.guess(guess);
                var output = word.wordDisplay();
                console.log(output.join(" "));
                console.log("\nGuessed letters: " + guessedLetters.join(", "))

                // If want to only decrement on incorrect guess, could delete || found:
                if (!found || found) {
                    guesses--
                }
                if ((guesses === 0) && (output.includes("_"))) {
                    console.log("-----------------------------------" + BgBlue + "\nSorry ... you lost!" + FgWhite + "\n" + "\nThe bird was: " + word.stringWord + "\n-----------------------------------");
                    playAgain()
                }
                else if (output.includes("_")) {
                    console.log("\nGuesses left: " + guesses + "\n");
                    guessLetter();
                }
                else {
                    console.log("------- \n" + BgRed + "You won!" + FgWhite + "\n-------");
                    playAgain();
                }
            }
        })
}
// Message at start of game
console.log(FgGreen + "\nWelcome to 'Bird is the Word' Guessing Game \nEach word is a type of bird. Type a single letter and press the Enter key to begin.  \n" + FgWhite);
console.log(word.wordDisplay().join(" ") + "\n");
console.log("\nGuesses left: " + FgCyan + guesses + FgWhite + "\n");

// Call guessLetter function
guessLetter();

// Function to choose random word
function randomWord() {
    var indexOfWord = Math.floor(Math.random() * birdNames.length);
    return new Word(birdNames[indexOfWord])
}

// Function to let user decide whether to continue playing with a new word or quit game
function playAgain() {
    inquirer
        .prompt([{
            type: "confirm",
            name: "gameContinue",
            message: "Do you want a new word?"
        }])
        .then(function (response) {
            if (response.gameContinue === true) {
                word = randomWord();
                guesses = 10;
                guessedLetters = [];
                console.log(word.wordDisplay().join(" "));
                console.log("\nGuesses left: " + guesses + "\n");
                guessLetter();
            }
            else {
                console.log("---------------------------\n" +
                    FgGreen + "Thank you for playing! \n" + FgWhite + "---------------------------");
            }
        })
}
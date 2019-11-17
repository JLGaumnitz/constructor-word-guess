// * HOMEWORK INSTRUCTIONS: **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
// ========================================================================================================

// Uses the letter.js file
var Letter = require("./letter.js")

// Constructor function that takes in the random word, splits it into letters, and pushes the letters to an array  and ...
function Word(word) {
  var splitword = word.split("");
  var wordArray = [];
  splitword.forEach(function (character) {
    var letter = new Letter(character);
    wordArray.push(letter);
  })
  // ...returns a string representing the word and ...
  this.stringWord = word;
  this.word = wordArray;
  this.wordDisplay = function () {
    var display = [];
    this.word.forEach(function (character) {
      display.push(character.display());
    })
    return display;
  }
  // ... calls the guess function, checking each letter to determine if the letter was found in the word or not (using the forEach method)
  this.guess = function (letter) {
    var found = false;
    this.word.forEach(function (character) {
      if (character.check(letter)) {
        found = true;
      }
    })
    return found;
  }
}
//Export the Word constructor, making it available to any file requiring this file.
module.exports = Word;
# constructor-word-guess

A word guess command-line game using constructor functions

created by Jennifer Gaumnitz

Constructor Word Guess Game demo video: https://drive.google.com/open?id=1WRBE-IU4u5mzv1T1ixpeWQCUrezr6015

GitHub repository: https://github.com/JLGaumnitz/constructor-word-guess

Constructor Word Guess Game is a command line node app that takes in a letter at a time, checks it against the letters in a randomly selected word (from a pre-set array of bird names), and displays whether the guessed letter was part of the word or not, and decrements a guess from the guess count (which starts at 10). 

There are three JavaScript files: 
*letter.js sets up the Letter constructor and displays an underlying character or an underscore, depending on whether or not the user has guessed the letter.

*word.js requires letter.js and sets up the Word constructor, which sets up the word that the user is attempting to guess.

*index.js contains the logic of the game. It requires word.js. It randomly selects a word and uses the Word constructor to store it. It prompts the user for each guess and keeps track of the user's remaining guesses.

Once you have the app prepared (see below), type "node index.js" in the command line. When prompted, input a letter to begin guessing the word. There are 10 guesses per word (both correct and incorrect guesses decrement the guess count).

Start of the Game:

![Image of start of the game](/images/Start_of_Bird_is_Word_Game.PNG)

Winning the Game:

![Image of Win](/images/Won_Bird_is_Word_Game.PNG)

Losing the Game:

![Image of Win](/images/Lost_Bird_is_Word_Game.PNG)

Quitting the Game:
![Image of Win](/images/Quit_Bird_is_Word_Game.PNG)


WHY THE PROJECT IS USEFUL

  The app fulfills a homework assignment for University of Kansas Coding Boot Camp, August 2019 to February 2020. Besides allowing me to continue working with Node.js, the assignment also taught me to work constructors and inquirer. I figured out that you can filter inputs with a function in inquirer (which is where I changed uppercase letters to lowercase), in addition to validating inputs (to be sure they are a letter).


HOW YOU CAN GET STARTED WITH THE PROJECT

   For this command line node app, you will need to install the third-party npm package inquirer. 

WHERE USERS CAN GET HELP WITH THE PROJECT

  Questions? Contact Jennifer Gaumnitz at jlgaumnitz@gmail.com

WHO MAINTAINS AND CONTRIBUTES TO THE PROJECT

  Jennifer Gaumnitz created the project. I probably will not update it again after completing this assignment. 


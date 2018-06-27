/*TOC */
//Variables Section


var countryNames = ["afghanistan", "australia", "argentina", "brazil", "canada", "china", "india", "mexico", "russia", "usa", "iraq", "iran", "poland", "germany", "italy", "france", "japan", "nigeria", "greece", "spain", "sudan", "pakistan", "zimbabwe"];
var currentWord = "";
var totalWins = 0;
var totalLosses = 0;
var wrongLetters = [];
var correctLetters = 0;
var allLettersGuessed = "";
var lettersInCurrentWord = [];
var guessesLeft = 6;
var underscores = "";
var letterBank = [];
var numberOfUnderscores = 0;
var listOfGuessedAndUnderscores= [];

// Functions section

// startGame() function to initialize game

function startGame(){
  
  //picks a random item from the countryName array
  currentWord = countryNames[Math.floor(Math.random() * countryNames.length)];
  //return randomly-selected word in console
  console.log(currentWord);
  //counts the number of letters in the randomly-selected words
  //first by breaking down string into substrings using js's .split method. 
  lettersInCurrentWord = currentWord.split("");
  //then by assigning a value to underscores by using the .length method
  underscores = lettersInCurrentWord.length;
  //return in console
  console.log(underscores);
  //restores number of guesses at start of game
  numGuesses = 6;
  //restores the number of wrong guesses
  wrongLetter = [];
  //resets the list of blanks and correctly guessed letters displayed for player
  listOfGuessedAndUnderscores = [];
  
  //Fill in the listOfGuessedAndUnderscores with appropriate number of _'s with the value in the underscores variable using .push to append an _ for each iteration of the loop
  for (var b = 0; b < underscores; b++){
    listOfGuessedAndUnderscores.push("_");
  }

  //return the number of blanks to the console
  console.log(listOfGuessedAndUnderscores);

  //Updates the values in the various processed variable in the HTML with getElementbyID and .innerHTML by referencing ID tags in HTML
  document.getElementById("guessesAndUnderscores").innerHTML = listOfGuessedAndUnderscores;
  document.getElementById("remainingGuesses").innerHTML = guessesLeft;
  document.getElementById("wrongLetters").innerHTML = wrongLetters;
}
  //Evaluate Guess Function
  //Evaluates the user's input against currentWord to see if there are any matches
  // Must establish a boolean variable first

  function checkLetters(guess){
    var letterInWord = false;

    //goes through each index of the current word, evaluates if there is a match, makes the letterInWord boolean variable true if there is a match
    for (var q = 0; q < underscores; q++){

      if (currentWord[q] === guess) {
        letterInWord = true;
        console.log("true");
        correctLetters++;
        
      } else if(q === underscores && letterInWord = false){
        console.log("false");
        guessesLeft--;
        wrongLetters.push(guess;)
        }
    }
    //if not guessesLeft has one subtracted and wrong guess is appended to wrong letter array using .push
    
  //If letterInWord = true, find the index and replace the _ with the guess
  if (letterInWord = true) {
    for (z = 0; z < underscores; z++) {
      //Loop through word. Evaluation of true equality happens at every index. If they match that index is reassinged a value equal to the guess
      if (currentWord[z] === guess){
        listOfGuessedAndUnderscores[z] = guess;
        console.log(listOfGuessedAndUnderscores);
      
      }
    }
    document.getElementById("guessesAndUnderscores").innerHTML = listOfGuessedAndUnderscores;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetters").innerHTML = wrongLetters;
  }
}

//roundFinished() function
//evaluates when conditions for end of the round have been met, then 
//resets the game state to the startGame function while either adding to losses or wins


function roundFinished(){
  //If the number of correctly guesses letters equals the number of total blanks, you win. Game starts
  if (correctLetters === underscores){
    totalWins++;
    alert("You've Won!")
    document.getElementById("winTotal").innerHTML = totalWins;
    startGame();
  } 
  // If you have no more guesses, you lose. Game restarts.
  else if (guessesLeft === 0){
    totalLosses++;
    alert("You Lost")
    document.getElementById("").innerHTML = totalLosses;
    startGame();
  }
   
}

// Main function

//Starts game
startGame();

//Captures keystroke input and sets that value equal to "guess"
document.onkeyup = function(event) {
  //gives "guess the value from keystroke and converts to lowercase"
  guess = String.fromCharCode(event.which).toLowerCase();
  //runs the letter evaluation function
  checkLetters(guess);
  //runs the roundFinished function
  roundFinished();
}





/*
First Draft Pseudocoding

UPON STARTING
  
alert "Press any key to get started"
instructions
underscores
wins and losses
letters guessed
guesses left

VARIABLES

word bank []
wins 0
losses 0
wrong letters
correct letters []
guesses left []
random word
underscores []
letter bank []

FUNCTIONS

Upon starting (start game function)
- select random word from word bank
- reset wrong letters, selected letters
- for loop to set _'s equal to word length

Game loop

-while remaining letters > 0 and guesses left < 0
 -accept player's guess
 -evaluate whether valid entry
 -update game state with guess
  -if/else evaluate letter is correct
   -if correct
    - replace _ with indexed position of letter in word
     -
    - remove guessed letter from letter bank
   -if wrong
    - --guesses remaining
    - push guessed letter to wrong letter array
 -increment either guesses left/guesses taken
 -add guessed letter to either replace indexed position or add to incorrect letters

 -if remaining letter = 0 
  - Win game alert
  - ++ won games
  - startgame function

 -if guessed letters = 0
  -lost game alert
  - ++ lost games
  -startgame functions
 

EVENT LISTENERS

- capture input with oneKeyUp


*/
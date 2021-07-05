// global variables to store game modes
var GAME_MODE_NUMBER_OF_CHARACTERS = "GAME_MODE_NUMBER_OF_CHARACTERS";
var GAME_MODE_SQUARE = "GAME_MODE_SQUARE";
var GAME_MODE_TRIANGLE = "GAME_MODE_TRIANGLE";
var gameMode = "";

// Function to implement number of characters
var drawNumberOfCharacters = function (input) {
  var output = "";

  // Loop within loop
  var index = 0;
  while (index < input) {
    output += "👍";
    index += 1;
  }

  return output;
};

// Function to implement square
var drawSquare = function (input) {
  var output = "";

  // Loop within loop
  var outerCounter = 0;
  while (outerCounter < input) {
    // for each row, output emojis in a loop
    var innerCounter = 0;
    while (innerCounter < input) {
      output += "👍";
      innerCounter += 1;
    }
    // add line break at the end of the row
    output += "<br>";
    outerCounter += 1;
  }

  return output;
};

// Function to implement triangle
var drawTriangle = function (input) {
  var output = "";

  // Loop within loop
  var outerCounter = 0;
  while (outerCounter < input) {
    var innerCounter = 0;
    // inner loop to print out "length" number of emojis in each line
    while (innerCounter < outerCounter + 1) {
      output += "👍";
      innerCounter += 1;
    }
    // add line break at the end of the line
    output += "<br>";
    outerCounter += 1;

    // if this is the last line, check value of output in console
    if (outerCounter == input) {
      console.log("height");
      console.log(outerCounter);
      console.log("final output");
      console.log(output);
    }
  }

  return output;
};

var main = function (input) {
  var myOutputValue = "";

  // convert input to lowercase
  var inputLower = input.toLowerCase();

  if (inputLower.contains("characters")) {
    // change game mode to GAME_MODE_NUMBER_OF_CHARACTERS
    gameMode = GAME_MODE_NUMBER_OF_CHARACTERS;
    console.log("game mode");
    console.log(gameMode);

    // prompt user to enter integer value
    myOutputValue =
      "You chose the game mode: Number of characters. Next, enter an integer value for the number of characters.";
  }
  if (inputLower.contains("square")) {
    // change game mode to GAME_MODE_SQUARE
    gameMode = GAME_MODE_SQUARE;
    console.log("game mode");
    console.log(gameMode);

    // prompt user to enter integer value
    myOutputValue =
      "You chose the game mode: square. Next, enter an integer value for the dimensions of the square.";
  }
  if (inputLower.contains("triangle")) {
    // change game mode to GAME_MODE_TRIANGLE
    gameMode = GAME_MODE_TRIANGLE;
    console.log("game mode");
    console.log(gameMode);

    // prompt user to enter integer value
    myOutputValue =
      "You chose the game mode: triangle. Next, enter an integer value for the height of the triangle.";
  }

  if (input == "" || Number(input) == NaN) {
    // Output default value "hello world" if user does not enter a number
    myOutputValue = "hello world";
    console.log("default output");
    console.log(myOutputValue);
  }

  return myOutputValue;
};

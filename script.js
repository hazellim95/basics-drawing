// global variables to store game modes
var GAME_MODE_INPUT_MODES = "GAME_MODE_INPUT_MODES";
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
  // Default output value
  if (input == "") {
    var myOutputValue =
      "Hello! There are 3 game modes in this game: <br>" +
      "1) characters <br>" +
      "2) square <br>" +
      "3) triangle <br>" +
      "Please enter your choice of game modes by either entering the number index, or the name of the game modes ";
    console.log("default output");
    console.log(myOutputValue);
    // change gameMode to GAME_MODE_INPUT_MODES
    gameMode = GAME_MODE_INPUT_MODES;
    console.log("game mode");
    console.log(gameMode);

    return myOutputValue;
  }

  // if gameMode is GAME_MODE_INPUT_MODES, get the user input for gameMode
  if (gameMode == GAME_MODE_INPUT_MODES) {
    // convert input to lowercase letters
    var inputLower = input.toLowerCase();

    if (inputLower == "characters" || input == 1) {
      // change game mode to GAME_MODE_NUMBER_OF_CHARACTERS
      gameMode = GAME_MODE_NUMBER_OF_CHARACTERS;
      console.log("game mode");
      console.log(gameMode);

      // prompt user to enter integer value
      myOutputValue =
        "You chose the game mode: <b>Number of characters</b>." +
        "<br>" +
        "Next, enter an integer value for the number of characters.";
    } else if (inputLower == "square" || input == 2) {
      // change game mode to GAME_MODE_SQUARE
      gameMode = GAME_MODE_SQUARE;
      console.log("game mode");
      console.log(gameMode);

      // prompt user to enter integer value
      myOutputValue =
        "You chose the game mode: <b>square</b>." +
        "<br>" +
        "Next, enter an integer value for the dimensions of the square.";
    } else if (inputLower == "triangle" || input == 3) {
      // change game mode to GAME_MODE_TRIANGLE
      gameMode = GAME_MODE_TRIANGLE;
      console.log("game mode");
      console.log(gameMode);

      // prompt user to enter integer value
      myOutputValue =
        "You chose the game mode: <b>triangle</b>." +
        "<br>" +
        "Next, enter an integer value for the height of the triangle.";
    } else {
      // If it reaches this point, input is invalid. Prompt user to enter a valid input
      console.log("Invalid input");
      myOutputValue =
        "Oops, please enter the following to access the respective game modes:" +
        "<br>" +
        "<b> GAME MODE: characters </b> => enter '1' or 'characters'" +
        "<br>" +
        "<b> GAME MODE: square </b> => enter '2' or 'square'" +
        "<br>" +
        "<b> GAME MODE: triangle </b> => enter '3' or 'triangle'";
    }
    return myOutputValue;
  }

  if (input == "" || Number(input) == NaN) {
  }

  return myOutputValue;
};

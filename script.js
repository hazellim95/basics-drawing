// global variable to store length of square
var length = 0;

var main = function (input) {
  var myOutputValue = "";

  // assign input to the value of length variable
  length = input;

  // Create loop to output square wih thumbs-up emoji
  var height = 0;
  while (height < length) {
    var width = 0;
    // inner loop to print out "length" number of emojis in each line
    while (width < length) {
      myOutputValue += "👍";
      width += 1;
    }
    // add line break at the end of the line
    myOutputValue += "<br>";
    height += 1;

    // if this is the last line, check value of myOutputValue in console
    if (height == length) {
      console.log("height");
      console.log(height);
      console.log("final output");
      console.log(myOutputValue);
    }
  }

  // Output default value "hello world" if user does not enter a number

  if (input == "" || Number(input) == NaN) {
    myOutputValue = "hello world";
    console.log("default output");
    console.log(myOutputValue);
  }

  return myOutputValue;
};

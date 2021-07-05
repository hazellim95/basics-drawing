var main = function (input) {
  var myOutputValue = "";

  // Create loop to output "input" number of thumbs-up emoji
  var index = 0;
  while (index < input) {
    myOutputValue += "👍";
    index += 1;
  }

  // Output default value "hello world" if user does not enter a number

  if (input == "" || Number(input) == NaN) {
    myOutputValue = "hello world";
  }

  return myOutputValue;
};

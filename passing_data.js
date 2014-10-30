/*
PASSING DATA
Passing data between functions
*/

var pass = "This data is being passed";

function firstPass(text) {
  return text + ", and here is more text.";
}

function secondPass(text) {
  return text + " Here is even more text!";
}

var passOne = firstPass(pass);
var passTwo = secondPass(passOne);

console.log(passTwo);

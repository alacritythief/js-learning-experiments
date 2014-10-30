/*
REVERSING A STRING
Reversing a string without .reverse()
Created a 'print' function so Node can print on a single line.
*/

function print(string) {
  process.stdout.write(string.toString());
}

console.log("Reversing A String:\n");

var text = "Here is some awesome text!";
console.log("Current string: \n" + text);

var array = text.split("");

console.log("\nSplitting into array:");
print("[" + array + "]");

var reverse = [];

console.log("\nLength of array: " + array.length + " characters");

for (var count = array.length - 1; count >= 0; count--) {
  reverse.push(array[count]);
}

console.log("\nReverse array:");
print("[" + reverse + "]");

reversedText = reverse.join("");

console.log("\n\nReversed text: \n" + reversedText);

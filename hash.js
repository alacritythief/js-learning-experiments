/*
HASH MANIPULATION
Playing around with hashes. I created a "print" function
so that Node can print things on a single line.
*/

function print(string) {
  process.stdout.write(string.toString());
}

var thingy = {a: 1, b: 2, c: 3};

console.log("Here's a hash named 'thingy' with key-value pairs:");
console.log(thingy);
console.log("A " +
            thingy.a + " and a " +
            thingy.b + " and a " +
            thingy.c + "!");

var thingTwo = {};
thingTwo.name = "Bob";

console.log("\nHere is a new hash called 'thingTwo':");
console.log(thingTwo);

console.log("\nLet's loop through keys in the first hash named thingy!");

for (var key in thingy) {
  print(key + " ");
}

console.log("\nLet's get all the values from the thingy!");

for (var key in thingy) {
  print(thingy[key] + " ");
}

console.log("\n\nLet's change the C key's value:");
console.log("Current C: " + thingy.c);

console.log("Changing to six...");
thingy.c = 6;

console.log("New C: " + thingy.c);
console.log("\nHere is the current thingy hash: ");
console.log(thingy);

console.log("\nLet's delete C. with 'delete thingy.c'");
delete thingy.c;
console.log("Here's what's left:");
console.log(thingy);

if ("c" in thingy === false) {
  print("Does thingy.c even exist? Result: ");
  console.log("c" in thingy);
  console.log("thingy.c === false, thingy.c does not exist anymore!");
}

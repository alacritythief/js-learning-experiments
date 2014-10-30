/*
ARRAY
Playing around with arrays.
*/

var array = [];

array.push("This", "is", "a", "test");
console.log("This is an aray: \n[" + array + "]");
console.log("This is an array turned into a string, without commas: ");
console.log(array.join(" "));

console.log("Popping out last array entry:");
array.pop();
console.log(array);

console.log("Removing the first array entry:");
array.shift();
console.log(array);

console.log("Adding 'Joe' to the beginning:");
array.unshift("Joe");
console.log(array);

console.log("Adding 'dog' to the end:");
array.push("dog");
console.log(array);

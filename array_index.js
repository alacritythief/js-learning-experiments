/*
Going through an array, logging each index and value.
*/

var array = ["Mark", "Frank", "Jane", "Deidre", "Alonso"];

console.log("An Array:");
console.log(array);

console.log("Logging Indexes and Values:");

function iterate(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("Index " + i + ": " + array[i]);
  }
}

iterate(array);

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i > -1; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

console.log("Reversing the Array:");
console.log(reverse(array));

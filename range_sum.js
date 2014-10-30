/*
RANGE & SUM
Creating a function that gives an array from a number range,
and a function that sums up an array.
*/

function range(x, y) {
  var array = [];
  for (x; x <= y; x++) {
    array.push(x);
  }
  return array;
}

console.log("Array of 1 - 10: ");
console.log(range(1, 10));

function sum(array) {
  var total = 0;
  for (var count = 0; count < array.length; count++) {
    total += array[count];
  }
  return total;
}

console.log("Sum of array 1 - 10: ");
console.log(sum(range(1, 10)));

/*
A function that gets the factorial of an integer.
*/

function fact(num) {
  var factorial = num;
  for (var c = num; c > 1; c--) {
    factorial *= c - 1;
  }
  return factorial;
}

console.log("Factorial of 7: " + fact(7)); // should be 5040
console.log("Factorial of 5: " + fact(5)); // should be 120
console.log("Factorial of 10: " + fact(10)); // should be 3628800

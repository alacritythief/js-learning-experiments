// Playing around with Crazy Closures

var first = level(3);
var second = superSecret(first);
var third = second(9);

function level(input) {
  var number = 10;
  input += 20;
  function anotherLevel(multiplier) {
    multiplier *= input;
    return number * multiplier;
  }
  return anotherLevel;
}

function superSecret(func) {
  function anotherSecret(anotherNum) {
    return func(34) + anotherNum;
  }
  return anotherSecret;
}

console.log(third); // should be 7829

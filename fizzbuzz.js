/*
FIZZBUZZ
Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the
number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five,
print “FizzBuzz”."
*/

for (var x = 1; x <= 100; x++) {
  if (x % 3 === 0)
    console.log("Fizz");
  else if (x % 5 === 0)
    console.log("Buzz");
  else
    console.log(x);
}

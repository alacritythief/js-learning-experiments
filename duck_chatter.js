/*
Testing Object Oriented Programming by making two
ducks talk.
*/

// The prototype below allows a random element to be selected
// from an array:

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
};

// Here is the Duck object:

function Duck(color){
  this.type = color;
  this.quack = function() {
    console.log(["Quacksicles!","Quacktacular!","That's so QUACK!"].sample());
  };
}

// Creating the Two Ducks:

var redDuck = new Duck("red");
var yellowDuck = new Duck("yellow");

console.log("The " + redDuck.type + " duck says: ");
redDuck.quack();

console.log("The " + yellowDuck.type + " duck says: ");
yellowDuck.quack();

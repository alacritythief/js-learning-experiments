Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
};

var yellowDuck = {
  type: "yellow",
  say: function(line) {
    console.log(line);
  },
  quack: function() {
    console.log(["QUACK!", "ZARK!", "KRYA!"].sample());
  }
};

yellowDuck.say("I am a " + yellowDuck.type + " duck!");
yellowDuck.quack();

// Define the Animal interface
const Animal = {
    name: "",
    eat: function(food) {
      console.log(`${this.name} is eating ${food}`);
    }
  };
  
  // Define the Bird interface that extends the Animal interface
  const Bird = {
    ...Animal, // Spread operator to inherit properties and methods from Animal
    fly: function(speed) {
      console.log(`${this.name} is flying at ${speed} mph`);
    }
  };
  
  // Define the Character class that implements the Bird interface
  class Character {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Implement the Bird interface on the Character class
  Object.assign(Character.prototype, Bird);
  
  // Create an instance of the Character class and call its methods
  const birdCharacter = new Character("Bob the bird");
  birdCharacter.eat("seeds");
  birdCharacter.fly(10);
  



 
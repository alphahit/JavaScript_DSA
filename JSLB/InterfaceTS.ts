// Define the Animal interface
interface Animal {
    name: string;
    eat(food: string): void;
  }
  
  // Define the Bird interface that extends the Animal interface
  interface Bird extends Animal {
    fly(speed: number): void;
  }
  
  // Define the Character class that implements the Bird interface
  class Character implements Bird {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    eat(food: string): void {
      console.log(`${this.name} is eating ${food}`);
    }
  
    fly(speed: number): void {
      console.log(`${this.name} is flying at ${speed} mph`);
    }
  }
  
  // Create an instance of the Character class and call its methods
  const birdCharacter = new Character("Bob the bird");
  birdCharacter.eat("seeds");
  birdCharacter.fly(10);
  


   

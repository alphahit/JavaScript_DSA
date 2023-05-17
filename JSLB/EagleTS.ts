interface Bird {
    flyWithOneWing(): void;
    flyWithTwoWings(): void;
    glideWithTail(): void;
  }
  
  class Eagle implements Bird {
    flyWithOneWing(): void {
      console.log('Eagle is flying with one wing');
    }
  
    flyWithTwoWings(): void {
      console.log('Eagle is flying with two wings');
    }
  
    glideWithTail(): void {
      console.log('Eagle is gliding in air effortlessly with its tail');
    }
  }
  
  const eagle = new Eagle();
  eagle.flyWithOneWing();   // Output: "Eagle is flying with one wing"
  eagle.flyWithTwoWings();  // Output: "Eagle is flying with two wings"
  eagle.glideWithTail();    // Output: "Eagle is gliding in air effortlessly"
  
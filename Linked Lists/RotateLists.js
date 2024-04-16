class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addLast(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //   print() {
  //     let outputString = "";
  //     let current = this.head;
  //     while (current) {
  //         outputString += current.val + "->";
  //       current = current.next;
  //     }
  //     console.log(outputString + "null");
  //   }
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.val.toString());
      current = current.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.print();

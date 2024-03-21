class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
  }
  addLast(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    return;
  }
  printForwards() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  printBackwards() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
  findPair(targetSum) {
    let currentTail = this.head;
    let currentHead = this.head;
    let element = [];
    while (currentTail.next) {
      currentTail = currentTail.next;
    }
    while (currentHead !== currentTail && currentHead.prev !== currentTail) {
      let sum = currentHead.data + currentTail.data;
      if (sum < targetSum) {
        currentHead = currentHead.next;
      } else if (sum > targetSum) {
        currentTail = currentTail.prev;
      } else {
        element.push([currentHead.data, currentTail.data]);
        currentHead = currentHead.next;
        currentTail = currentTail.prev;
      }
    }
    return element;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.addLast(6);
linkedList.addLast(7);
linkedList.addLast(8);
linkedList.addLast(9);
// linkedList.printForwards();
// linkedList.printBackwards();
console.log(linkedList.findPair(7));

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
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
  }
  tripletSum(val) {
    let current = this.head;

    let currentBackward = this.head;
    while (currentBackward.next) {
      currentBackward = currentBackward.next;
    }
    let elem = [];
    while (current.next.next) {
      let currentForward = this.head.next;
      while (currentForward.data < currentBackward.data) {
        let sum = current.data + currentForward.data + currentBackward.data;
        if (sum === val) {
          elem = [
            ...elem,
            [current.data, currentForward.data, currentBackward.data],
          ];
          currentForward = currentForward.next;
          currentBackward = currentBackward.prev;
        } else if (sum > val) {
          currentBackward = currentBackward.prev;
        } else {
          currentForward = currentForward.next;
        }
      }
      current = current.next;
    }
    return elem;
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

console.log(linkedList.tripletSum(17));

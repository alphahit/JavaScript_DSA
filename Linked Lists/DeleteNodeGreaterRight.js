class Node {
  constructor(data) {
    this.data = data;
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

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  deleteGreater() {
    this.reverse();
    let current = this.head;
    let max = current.data;
    let prev = null;

    while (current && current.next) {
      if (current.next.data < max) {
        current.next = current.next.next;
      } else {
        max = current.next.data;
        prev = current;
        current = current.next;
      }
    }
    this.reverse();
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data + "->");
      current = current.next;
    }
  }
}
const linkedlist = new LinkedList();

linkedlist.addLast(12);
linkedlist.addLast(15);
linkedlist.addLast(10);
linkedlist.addLast(11);
linkedlist.addLast(5);
linkedlist.addLast(6);
linkedlist.addLast(2);
linkedlist.addLast(3);
linkedlist.print();
console.log("<=======>");
linkedlist.deleteGreater();
linkedlist.print();

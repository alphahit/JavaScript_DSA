class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
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
    return;
  }

  segregateEvenOdd() {
    let end = this.head;
    let prev = null;
    let current = this.head;
    while (end.next !== null) {
      end = end.next;
    }

    let newEnd = end;
    while (current.data % 2 !== 0 && current !== end) {
      newEnd.next = current;
      current = current.next;
      newEnd.next.next = null;
      newEnd = newEnd.next;
    }

    while (current !== end) {
      if (current.data % 2 === 0) {
        if (prev) {
          prev.next = current;
        } else {
          this.head = current;
        }
        prev = current;
        current = current.next;
      } else {
        prev.next = current.next;
        newEnd.next = current;
        current.next = null;
        newEnd = current;
        current = prev.next;
      }
      if (newEnd !== end && end.data % 2 !== 0) {
        prev.next = end.next;
        newEnd.next = end;
        end.next = null;
      }
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linkedlist = new LinkedList();
linkedlist.addLast(17);
linkedlist.addLast(15);
linkedlist.addLast(8);
linkedlist.addLast(9);
linkedlist.addLast(2);
linkedlist.addLast(4);
linkedlist.addLast(6);

// linkedlist.print();
linkedlist.segregateEvenOdd();
linkedlist.print();

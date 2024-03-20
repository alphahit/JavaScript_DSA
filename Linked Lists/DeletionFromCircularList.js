class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }
  addLast(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
      return;
    }
    let currentHead = this.head;
    let current = this.head;
    while (current.next !== currentHead) {
      current = current.next;
    }
    newNode.next = currentHead;
    current.next = newNode;
  }
  size() {
    let count = 0;
    let currentHead = this.head;
    let current = this.head;
    while (count === 0 || current !== currentHead) {
      count++;
      console.log(current.data);
      current = current.next;
    }
    return count;
  }
  print() {
    let count = 0;

    let current = this.head;
    while (count === this.size()) {
      count++;
      console.log(current.data);
      current = current.next;
    }
  }
  deleteFromLinkedList(val) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    let found = false;

    do {
      if (current.data === val) {
        found = true;
        break;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);

    if (!found) return;

    if (this.head === this.head.next && this.head.data === val) {
      this.head = null;
      return;
    }

    if (current === this.head) {
      prev = this.head;
      while (prev.next !== this.head) {
        prev = prev.next;
      }
      this.head = this.head.next;
      prev.next = this.head;
    } else {
      prev.next = current.next;
    }
  }
}

let linkedList = new CircularLinkedList();
linkedList.addLast('1');
linkedList.addLast('2');
linkedList.addLast('3');
linkedList.addLast('4');
linkedList.print();
console.log('<====>');
// console.log(linkedList.head)

linkedList.deleteFromLinkedList('1');
linkedList.print();

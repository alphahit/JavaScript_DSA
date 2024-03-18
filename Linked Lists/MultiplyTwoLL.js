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
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    current.next = newNode;
  }
  findNumber() {
    const MOD = Math.pow(10, 9) + 7;
    let current = this.head;
    let n1 = 0;
    while (current) {
      n1 = (n1 * 10 + current.data) % MOD;
      current = current.next;
    }
    return n1;
  }
}
const linkedlist = new LinkedList();
const linkedlist1 = new LinkedList();

linkedlist.addLast(9);
linkedlist.addLast(4);
linkedlist.addLast(6);
console.log(linkedlist.findNumber());
linkedlist1.addLast(8);
linkedlist1.addLast(4);
console.log(linkedlist1.findNumber());

function multiplyLL(a, b) {
  return a * b;
}

console.log(multiplyLL(linkedlist.findNumber(), linkedlist1.findNumber()));

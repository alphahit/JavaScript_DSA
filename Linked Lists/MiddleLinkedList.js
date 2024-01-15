class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  print() {
    let current = this.head;
    let output = "";

    while (current) {
      output += current.data + " "; // Append each data element and a space to the output string
      current = current.next;
    }

    console.log(output.trim()); // Log the output string and trim any trailing space
  }
  size() {
    let current = this.head;

    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }
  middleChild() {
    let current = this.head;
    let forward = this.head.next;
    while (forward && forward.next) {
      current = current.next;
      forward = forward.next.next;
    }
    if (this.size() % 2 === 0) {
      return current.next.data;
    } else {
      return current.data;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(3);
linkedlist.addFirst(13);
linkedlist.addFirst(8);
linkedlist.addFirst(5);
linkedlist.addFirst(15);
linkedlist.addFirst(25);
linkedlist.print();

console.log(linkedlist.middleChild());

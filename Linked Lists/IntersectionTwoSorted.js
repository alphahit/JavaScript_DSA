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

  size() {
    let count = 0;
    if (!this.head) return count;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
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
const linkedlistTwo = new LinkedList();

linkedlist.addFirst(50);
linkedlist.addFirst(33);
linkedlist.addFirst(18);
linkedlist.addFirst(13);
linkedlist.addFirst(3);
linkedlist.print();
console.log("<=============>");
linkedlistTwo.addFirst(35);
linkedlistTwo.addFirst(33);
linkedlistTwo.addFirst(30);
linkedlistTwo.addFirst(23);
linkedlistTwo.addFirst(18);
linkedlistTwo.addFirst(3);
linkedlistTwo.print();

function interSection(linkedlist, linkedlistTwo) {
  let f = linkedlist.head;
  let s = linkedlistTwo.head;
  let element = [];
  while (f !== null && s !== null) {
    if (f.data === s.data) {
      element.push(f.data);
      f = f.next;
      s = s.next;
    } else if (f.data < s.data) {
      f = f.next;
    } else {
      s = s.next;
    }
  }
  return element;
}

console.log(interSection(linkedlist, linkedlistTwo));

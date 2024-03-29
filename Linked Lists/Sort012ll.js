class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addLast(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  segregate() {
    let zeroL = new Node(0);
    let zero = zeroL;
    let oneL = new Node(0);
    let one = oneL;
    let twoL = new Node(0);
    let two = twoL;
    let current = this.head;

    while (current) {
      if (current.data === 0) {
        zero.next = current;
        zero = zero.next;
      } else if (current.data === 1) {
        one.next = current;
        one = one.next;
      } else {
        two.next = current;
        two = two.next;
      }
      current = current.next;
    }
    zero.next = oneL.next ? oneL.next : twoL.next;
    oneL.next = twoL.next;
    two.next = null;

    this.head = zeroL.next;
  }
  print(head) {
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();
linkedlist.addLast(1);
linkedlist.addLast(2);
linkedlist.addLast(2);
linkedlist.addLast(1);
linkedlist.addLast(2);
linkedlist.addLast(0);
linkedlist.addLast(2);
linkedlist.addLast(2);
linkedlist.print(linkedlist.head);
linkedlist.segregate();
console.log('After Segragation');
linkedlist.print(linkedlist.head);

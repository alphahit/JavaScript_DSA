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

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    if (!this.head) return null;
    let prevPointer = null;
    let currentPointer = this.head;
    let nextPointer;
    while (currentPointer) {
      nextPointer = currentPointer.next;
      currentPointer.next = prevPointer;
      prevPointer = currentPointer;
      currentPointer = nextPointer;
    }
    return prevPointer;
  }

  checkPalindrome() {
    if (!this.head || !this.head.next) {
      return true;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    slow.next = this.reverse(slow.next);
    let firstHalf = this.head;
    let secondHalf = slow.next;

    while (secondHalf && firstHalf) {
      if (firstHalf.data !== secondHalf.data) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    return true;
  }
}

const linkedlist = new LinkedList();
linkedlist.addLast(9);
linkedlist.addLast(10);
linkedlist.addLast(9);
console.log(linkedlist.checkPalindrome());

const linkedlist1 = new LinkedList();
linkedlist1.addLast(10);
linkedlist1.addLast(10);
linkedlist1.addLast(9);
console.log(linkedlist1.checkPalindrome());

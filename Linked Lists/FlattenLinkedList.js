class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.bottom = null;
  }
}

function newNode(value) {
  return new Node(value);
}

function constructLinkedList() {
  let head = newNode(5);
  head.bottom = newNode(7);
  head.bottom.bottom = newNode(8);
  head.bottom.bottom.bottom = newNode(30);

  head.next = newNode(10);
  head.next.bottom = newNode(20);

  head.next.next = newNode(19);
  head.next.next.bottom = newNode(22);
  head.next.next.bottom.bottom = newNode(50);

  head.next.next.next = newNode(28);
  head.next.next.next.bottom = newNode(35);
  head.next.next.next.bottom.bottom = newNode(40);
  head.next.next.next.bottom.bottom.bottom = newNode(45);

  return head;
}

const head = constructLinkedList();

function printList(head) {
  let element = [];
  let current = head;
  while (current != null) {
    element.push(current.value);
    let bottom = current.bottom;
    while (bottom != null) {
      element.push(bottom.value);
      bottom = bottom.bottom;
    }
    current = current.next;
  }
  return element;
}

class BSTNode {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (val < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (val > current.data) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }
  printInOrder(node = this.root) {
    if (!node) return [];
    return [...this.printInOrder(node.left), node.data, ...this.printInOrder(node.right)];
  }
}
function createBSTFromList(head) {
  let bst = new BST();
  let arr = printList(head);
  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }
  let arrSorted = bst.printInOrder();

  return arrSorted;
}

function createLinkedListFromArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = newNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.bottom = newNode(arr[i]);
    current = current.bottom;
  }

  return head;
}

console.log(printList(createLinkedListFromArray(createBSTFromList(head))));
//TC - worst case O(N*N) ideal case O(NlogN)

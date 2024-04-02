class Node {
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
    const newNode = new Node(val);
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
  delete(node = this.root, val) {
    if (!node) {
      return null;
    }
    if (node.data === val) {
      return this.helper(node);
    }

    let current = node;
    while (current) {
      if (current.data > val) {
        if (current.left && current.left.data === val) {
          current.left = this.helper(current.left);
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right && current.right.data === val) {
          current.right = this.helper(current.right);
          break;
        } else {
          current = current.right;
        }
      }
    }
    return current;
  }

  helper(node) {
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }
    let rightChild = node.right;
    let lastRightChildOfLeft = this.findLastRightChild(node.left);
    lastRightChildOfLeft.right = rightChild;
    return node.left;
  }
  findLastRightChild(node) {
    if (!node.right) {
      return node;
    }
    return this.findLastRightChild(node.right);
  }
}
const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(1);
bst.insert(3);
console.log(bst.printInOrder());
bst.delete(bst.root, 3);
console.log(bst.printInOrder());
bst.delete(bst.root, 2);
console.log(bst.printInOrder());
bst.delete(bst.root, 1);
console.log(bst.printInOrder());

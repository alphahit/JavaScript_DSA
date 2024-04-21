class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let temp = null;
let k = 0;

function kthAncestorDFS(root, node) {
  if (root === null) return null;

  if (root.data === node || (temp = kthAncestorDFS(root.left, node)) !== null || (temp = kthAncestorDFS(root.right, node)) !== null) {
    if (k > 0) k--;
    else if (k === 0) {
      return root.data;
    }
    return root;
  }
  return null;
}

function newNode(data) {
  let temp = new Node();
  temp.data = data;
  temp.left = temp.right = null;
  return temp;
}

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
k = 3;
let node = 5;
let ancestor = kthAncestorDFS(root, node);

if (ancestor !== null) console.log('Kth ancestor is: ' + ancestor);
else console.log('-1');

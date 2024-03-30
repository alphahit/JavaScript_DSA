class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

const inOrderDFS = (root, target) => {
  if (!root) return null;
  if (root.val === target) return true;
  const leftSearch = inOrderDFS(root.left, target);
  if (leftSearch) return leftSearch;
  return inOrderDFS(root.right, target);
};
console.log(inOrderDFS(one, 4));
console.log(inOrderDFS(one, 3));
console.log(inOrderDFS(one, 7));
console.log(inOrderDFS(one, 6));

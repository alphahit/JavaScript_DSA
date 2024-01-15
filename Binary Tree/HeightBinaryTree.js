class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);

one.left = two;
one.right = three;
two.right = five;
two.left = four;
five.right = seven;
five.left = six;
seven.left = eight;

const maxHeight = (root) => {
  if (!root) return 0;

  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
};

console.log(maxHeight(a));
console.log(maxHeight(one));

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(11);
const b = new Node(2);
const c = new Node(-4);
const d = new Node(7);
const e = new Node(21);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function recursiveMin(root) {
  if (!root) return Infinity;
  let l = recursiveMin(root.left);
  let r = recursiveMin(root.right);
  return Math.min(root.val, l, r);
}
console.log(recursiveMin(a));

function minVal(root) {
  if (!root) return Infinity;
  let min = Infinity;
  let stack = [root];
  while (stack.length > 0) {
    let m = stack.pop();
    min = m.val < min ? m.val : min;
    if (m.left) {
      stack.push(m.left);
    }
    if (m.right) {
      stack.push(m.right);
    }
  }
  return min
}
console.log(minVal(a));
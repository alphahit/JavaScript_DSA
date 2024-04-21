class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(11);
const b = new Node(2);
const c = new Node(4);
const d = new Node(7);
const e = new Node(21);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function recurssiveMax(root){
  if(!root) return 0;
  if(root.left === null && root.right === null){
    return root.val
  }
  let l = recurssiveMax(root.left);
  let r = recurssiveMax(root.right);

  return root.val + Math.max(l, r)
}

console.log(recurssiveMax(a))
console.log(recurssiveMax(b))
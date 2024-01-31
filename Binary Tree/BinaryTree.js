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
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.right = g;

//Depth First Traversal
//TC: O(n) SC: O(n)

const depthFirstTraversalStack = (root) => {
  //Based on Stack Implementation - Push Right Push Left 
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

console.log(depthFirstTraversalStack(a));



const depthFirstTraversalRecurssive = (root) => {
    //Based on Recurssive Implementation - Push Right Push Left 
    if (!root) return [];
  
    
    return [root.val, ...depthFirstTraversalRecurssive(root.left), ...depthFirstTraversalRecurssive(root.right)]
  };
  
  console.log(depthFirstTraversalRecurssive(a));

  const breadthFirstTraversal = (root) => { 
    
    if (!root) return [];
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    
    }
    return result;
  };

  console.log('3==>',breadthFirstTraversal(a));



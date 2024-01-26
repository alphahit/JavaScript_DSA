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
  c.left = f;
  c.right = g;


  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);

  one.left = two
  two.left = four
  one.right = three
  three.left = five
  three.right = six
  five.left = seven
  five.right = eight


  const inOrder = (root) => {
    if(!root) return []
    return [...inOrder(root.left), root.val, ...inOrder(root.right)]
  }

  console.log("<<<<<<<<<<<<<<<<<< Inorder >>>>>>>>>>>>>>>>");
  console.log(inOrder(a));
  console.log(inOrder(one));

  const preOrder = (root) => {
    if(!root) return []
    return [root.val, ...preOrder(root.left), ...preOrder(root.right)]
  }

  console.log("<<<<<<<<<<<<<<<<<< Preorder >>>>>>>>>>>>>>>>");
  console.log(preOrder(a));
  console.log(preOrder(one));

  const postOrder = (root) => {
    if(!root) return []
  return [...postOrder(root.left),... postOrder(root.right),root.val]
  }
  console.log("<<<<<<<<<<<<<<<<<< Postorder >>>>>>>>>>>>>>>>");
  console.log(postOrder(a));
  console.log(postOrder(one));
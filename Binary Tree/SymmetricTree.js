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
  const threeRight = new Node(3);
  const twoRight = new Node(2);
  const four = new Node(4);
  const fourRight = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);

  
//   one.left = two;
//   one.right = three;
//   two.right = five;
//   two.left = four;
//   five.right = seven;
//   five.left = six;
//   seven.left = eight;


  one.left = two;
  one.right = twoRight;
  two.right = four;
  two.left = three;
  twoRight.right = threeRight;
  twoRight.left = fourRight;
 
  function isMirror(node1, node2) {
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    if(node1.val !== node2.val) return false;
    
    return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
  }
  var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right)
  };

  
console.log(isSymmetric(one))

class Node {
  constructor(val) {
    this.data = val;
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
const seven = new Node(7);
const eight = new Node(8);

one.left = two;
one.right = three;
two.right = five;
two.left = four;
five.right = seven;
five.left = six;
seven.left = eight;


function maxHeightSum(root) {
  let maxSum = -Infinity;
  let maxLength = 0;
  if(!root){return 0}

  function longestPathSum(root, sum, len){
    if(!root){ //Base Case for Recursion
      if(len > maxLength){
        maxLength = len;
        maxSum = sum;
      }else if(len === maxLength && sum > maxSum){
        maxSum = sum;
      }
      return
    }
    longestPathSum(root.left, sum + root.data, len + 1);
    longestPathSum(root.right, sum + root.data, len + 1);
   
  }
  longestPathSum(root, 0, 0)
  return maxSum
}
console.log(maxHeightSum(one));
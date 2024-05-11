//https://leetcode.com/problems/binary-tree-paths/description/

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

  
  one.left = two;
  one.right = three;
  two.right = five;
  two.left = four;
  five.right = seven;
  five.left = six;
  seven.left = eight;

  var binaryTreePaths = function(root) {
   
    let paths = [];
    function dfs(node, currentPath) {
         if (!node) {
            return; 
        }
if(currentPath.length > 0){
        currentPath += '->' + node.val;
    }else{
        currentPath = node.val.toString();
    }


    if(!node.left && !node.right){
        paths.push(currentPath)
    }else{
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    }
    }
    dfs(root, '');
    return paths;
};

console.log(binaryTreePaths(one))

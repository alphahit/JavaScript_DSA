class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class Solution {
    constructor() {
      this.inorder = [];
    }
  
    binaryTreeToBST(root) {
      this.inOrderTraversal(root);
      return this.buildBST(0, this.inorder.length - 1);
    }
  
    inOrderTraversal(node) {
      if (node) {
        this.inOrderTraversal(node.left);
        this.inorder.push(node.val);
        this.inOrderTraversal(node.right);
      }
    }
  
    buildBST(start, end) {
      if (start > end) {
        return null;
      }
  
      const mid = Math.floor((start + end) / 2);
      const root = new TreeNode(this.inorder[mid]);
  
      root.left = this.buildBST(start, mid - 1);
      root.right = this.buildBST(mid + 1, end);
  
      return root;
    }
  }
  

  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  

  const solution = new Solution();
  const bstRoot = solution.binaryTreeToBST(root);
  

  function printInOrder(node) {
    if (node) {
      printInOrder(node.left);
      console.log(node.val);
      printInOrder(node.right);
    }
  }
  
  printInOrder(bstRoot);
  

  
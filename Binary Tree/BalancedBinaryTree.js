// A balanced binary tree is a type of binary tree where the depth 
// (the length of the path from the root to the deepest node) of the two subtrees of every node 
// never differ by more than one. This balance condition ensures that the tree remains approximately balanced, 
// leading to an improvement in operation times for insertions, deletions, and lookups when compared to 
// unbalanced binary trees. The balance of a binary tree is crucial for maintaining its performance 
// characteristics, particularly to ensure operations can be performed in O(log n) time, 
// where n is the number of nodes in the tree.

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BalancedBinaryTree {
    constructor() {
        this.root = null;
      }
    insertNode(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return;
        }
        let current = this.root;

        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    break
                }
                current = current.left
            }else{
                if (current.right === null) {
                    current.right = newNode;
                    break;
                  }
                  current = current.right;
            }
        }
    }
    
    balancedCheck(node=this.root){
        if (node === null) return true;

        const heightLeft  = this.height(node.left);
        const heightRight = this.height(node.right);
        const diff = Math.abs(heightLeft - heightRight);

    if (diff > 1) return false; 
    else return this.balancedCheck(node.left) && this.balancedCheck(node.right);

    }

    height(node) {
        if (node === null) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
      }



}

const tree = new BalancedBinaryTree();
tree.insertNode(5);
tree.insertNode(3);
tree.insertNode(8);
tree.insertNode(2);
tree.insertNode(4);


console.log(tree.balancedCheck());
tree.insertNode(9);
tree.insertNode(19);
console.log(tree.balancedCheck());
//Tree are non-linear data structure.
//Item (data point, element) stored in non-linear.
//There are associations between items which is not 1:1.


  
//https://chat.openai.com/share/3717b807-9186-4b70-b7d6-0f79932110bc

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  removeChild(childNode) {
    const index = this.children.indexOf(childNode);
    if (index !== -1) {
      this.children.splice(index, 1);
      this.children = this.children.concat(childNode.children);
    }
  }

  //1)Depth First Search (In-order traversal, Pre-order traversal, Post-order traversal)
  //2)Breadth First Search (Level Order Search)

  preOrderTraversal() {
    //First root node
    //Go to left nodes
    //Go to right nodes
    console.log(this.value); // Visit the node

    for (const child of this.children) {
      child.preOrderTraversal(); // Traverse the child nodes in pre-order
    }
  }

  inOrderTraversal() {
    //First left node
    //Go to root nodes
    //Go to right nodes
    if (this.children.length > 0) {
      this.children[0].inOrderTraversal(); // Traverse the leftmost child nodes first
    }

    console.log(this.value); // Visit the node

    for (let i = 1; i < this.children.length; i++) {
      this.children[i].inOrderTraversal(); // Traverse the remaining child nodes
    }
  }

  postOrderTraversal() {
    //First left node
    //Go to right nodes
    //Go to root nodes
    for (const child of this.children) {
      child.postOrderTraversal(); // Traverse the child nodes in post-order
    }

    console.log(this.value); // Visit the node
  }

  traverse() {
    console.log(this.value);

    for (const child of this.children) {
      child.traverse();
    }
  }
}

// Create the tree
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const child3 = new TreeNode(4);
const grandchild1 = new TreeNode(5);
const grandchild2 = new TreeNode(6);
const grandchild3 = new TreeNode(7);
const grandchild4 = new TreeNode(8);
const grandchild5 = new TreeNode(9);
const grandchild6 = new TreeNode(10);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
child1.addChild(grandchild1);
child1.addChild(grandchild2);
child1.addChild(grandchild3);
child2.addChild(grandchild4);
child2.addChild(grandchild5);
child3.addChild(grandchild6);

// Perform traversals
console.log('Pre-order Traversal:');
root.preOrderTraversal();
console.log('------------------------');
console.log('In-order Traversal:');
root.inOrderTraversal();
console.log('------------------------');
console.log('Post-order Traversal:');
root.postOrderTraversal();

console.log('------------------------');
console.log('Normal Traversal:');
root.traverse();


root.removeChild(child2);
console.log("After Deletion ========>")

root.traverse();

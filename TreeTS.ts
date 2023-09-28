class TreeNode {
    value: number;
    children: TreeNode[];
  
    constructor(value: number) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode: TreeNode): void {
      this.children.push(childNode);
    }
  
    removeChild(childNode: TreeNode): void {
      const index = this.children.indexOf(childNode);
      if (index !== -1) {
        this.children.splice(index, 1);
        this.children = this.children.concat(childNode.children);
      }
    }
  
    preOrderTraversal(): void {
      console.log(this.value); // Visit the node
  
      for (const child of this.children) {
        child.preOrderTraversal(); // Traverse the child nodes in pre-order
      }
    }
  
    inOrderTraversal(): void {
      if (this.children.length > 0) {
        this.children[0].inOrderTraversal(); // Traverse the leftmost child nodes first
      }
  
      console.log(this.value); // Visit the node
  
      for (let i = 1; i < this.children.length; i++) {
        this.children[i].inOrderTraversal(); // Traverse the remaining child nodes
      }
    }
  
    postOrderTraversal(): void {
      for (const child of this.children) {
        child.postOrderTraversal(); // Traverse the child nodes in post-order
      }
  
      console.log(this.value); // Visit the node
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
  
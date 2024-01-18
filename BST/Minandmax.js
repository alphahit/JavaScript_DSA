class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

class BST {
    constructor() {
        this.root = null
    }
    insert(val){
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode;
            return;
          }

        let current = this.root
        let prev = null
        while(current){
            if(current.data > val){
                prev = current
                current = current.left
            }
            else if(current.data < val){
                prev = current
                current = current.right
            }
        }
        if(prev.data > val){
           prev.left = newNode
        }
        else if(prev.data < val){
            prev.right = newNode
        }
    }

    min(node = this.root){
        if(!node.left) return node.data
        else return this.min(node.left)

    }
    max(node = this.root){
        if(!node.right) return node.data
        else return this.max(node.right)

    }
}
const tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.max())
console.log(tree.min())
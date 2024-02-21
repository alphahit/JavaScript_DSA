class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;  
    }
}
class BalancedBinaryTree {
    constructor(){
        this.root = null;
    }
    insertNode(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value<current.value){
                if(current.left === null){
                    current.left = newNode;
                    break
                }
                current = current.left
            }else{
                if(current.right === null){
                    current.right = newNode;
                    break;
                }
                current = current.right
            }
        }
    }
    height(node){
        if(node === null) return -1
        return 1 + Math.max(this.height(node.left),this.height(node.right))
    }
    diameter(){
        if (this.root === null) return 0
        const heightLeft  = this.height(this.root.left);
        const heightRight = this.height(this.root.right);
        return heightLeft + heightRight
    }

}
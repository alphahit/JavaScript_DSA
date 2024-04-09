class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

function constructBST(preorder) {
    if (preorder.length === 0) return null;
    
    let root = new Node(preorder[0]);
    let stack = [root];

    for (let i = 1; i < preorder.length; i++) {
        let temp = null;
        while(stack.length !== 0 && preorder[i]> stack[stack.length - 1].data){
            temp =  stack.pop();
        }

        if(temp !== null){
            temp.right = new Node(preorder[i]);
            stack.push(temp.right);
        }else {
            stack[stack.length - 1].left = new Node(preorder[i]);
            stack.push(stack[stack.length - 1].left);
        }
    }
    return root;

}

let preorder  = [10, 5, 1, 7, 40, 50]
let root = constructBST(preorder);

function printInorder(node) {
    if (node === null) return;
    printInorder(node.left);
    console.log(node.data);
    printInorder(node.right);
}

printInorder(root)
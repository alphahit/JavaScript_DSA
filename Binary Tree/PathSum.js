class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

function createNode(val){
    let newNode = new Node(val)
    return newNode
}

class BinaryTree {
    constructor(){
        this.root = null
    }
   
    pathSum(root, targetSum) {
        let result = [];
        let path = [];
        
        function solve(root, targetSum){
            if(root === null){
                return;
            }
            
            let remainSum = targetSum-root.val;
            path.push(root.val);
            if(!root.left && !root.right && remainSum === 0){
                result.push([...path]);
                return;
            }
            if(root.left){
                solve(root.left, remainSum);
                path.pop();
            }
            if(root.right){
                solve(root.right, remainSum);
                path.pop();
            }
        }
        solve(root, targetSum);
        return result;
    }
    
}
let node5 = createNode(5);
let node4_left = createNode(4);
let node8 = createNode(8);
let node11 = createNode(11);
let node2 = createNode(2);
let node13 = createNode(13);
let node4_right = createNode(4);
let node7 = createNode(7);
let node5_right = createNode(5);
let node1 = createNode(1);


node5.left = node4_left;
node5.right = node8;
node4_left.left = node11;
node4_left.right = node2;
node11.left = node7;
node8.left = node13;
node8.right = node4_right;
node4_right.left = node5_right;
node4_right.right = node1;

let binaryTree = new BinaryTree();
binaryTree.root = node5;









 console.log(binaryTree.pathSum(binaryTree.root, 22))
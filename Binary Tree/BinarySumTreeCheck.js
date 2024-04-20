class Node{
    constructor(val){
        this.val = val;
        this.left  = null;
        this.right = null;
    }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);

three.right = two
three.left = one


const ten = new Node(10);
const twenty = new Node(20);
const thirty = new Node(30);
const tenLeft = new Node(10);
const tenRight = new Node(10);


ten.right = thirty
ten.left = twenty
twenty.right = tenRight
twenty.left = tenLeft


class Solution {
    isSumTree(node){
        if(!node) return 1;
        if(!node.left && !node.right) return 1;
        let result = this.sumCheckerHelper(node)
        return result.isSumTree
    }

    sumCheckerHelper(node){
        if(!node) return {sum : 0, isSumTree: 1};
        if(!node.left && !node.right) return {sum : node.val, isSumTree: 1};
        let left = this.sumCheckerHelper(node.left)
        let right = this.sumCheckerHelper(node.right)
        let totalSum = left.sum + right.sum + node.val
        let isSumTree = left.isSumTree && right.isSumTree && (node.val === right.sum + left.sum)
        return {sum : totalSum, isSumTree : isSumTree}
    }
}
const solution = new Solution();
console.log(solution.isSumTree(three));
console.log(solution.isSumTree(ten));
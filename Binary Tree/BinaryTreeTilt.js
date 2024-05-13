/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    let totalTilt = 0;
   
    function sum(node){
        if(node === null) return 0
        let leftSum = sum(node.left)
        let rightSum = sum(node.right)
        totalTilt += Math.abs(leftSum - rightSum)
        return leftSum + rightSum + node.val
    }
    sum(root);
    return totalTilt;
};
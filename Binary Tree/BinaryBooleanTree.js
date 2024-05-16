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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function booleanOp(node){
        if(node === null){
            return null
        }
        if(node.left === null && node.right === null) {
            return node.val === 1;
        }
        let lval = booleanOp(node.left);
        let rval = booleanOp(node.right);
        let op;
        if(node.val === 2){
            op = lval || rval;
        } else {
            op = lval && rval;
        }
        return op;
       
    }
    return booleanOp(root)
};
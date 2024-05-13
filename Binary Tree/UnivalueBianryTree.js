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
var isUnivalTree = function (root) {
    function equalCheck(node, value) {
        if (node === null) {
            return true;
        }

        if (node.val !== value) {
            return false;
        }

        return equalCheck(node.left, value) && equalCheck(node.right, value);
    }

    return equalCheck(root, root.val);
};

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let nodeInfo = {}
    function dfs(node, parent, depth){
        if(!node) return;
        nodeInfo[node.val] = {parent: parent, depth: depth}
        dfs(node.left, node, depth + 1)
        dfs(node.right, node, depth + 1)
    }
    dfs(root, null, 0)
    const xInfo = nodeInfo[x];
    const yInfo = nodeInfo[y];

    return xInfo && yInfo && (xInfo.depth === yInfo.depth) && (xInfo.parent !== yInfo.parent);
};
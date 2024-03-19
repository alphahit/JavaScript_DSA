function isLeafAtSameLevel(root) {
  let leafLevel = -1;

  function dfs(node, level) {
    if (!node) return true;
    if (!node.left && !node.right) {
      if (leafLevel === -1) {
        leafLevel = level;
        return true;
      }
      return level === leafLevel;
    }

    return dfs(node.left, level + 1) && dfs(node.right, level + 1);
  }

  return dfs(root, 0);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

console.log(isLeafAtSameLevel(root1));

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);

console.log(isLeafAtSameLevel(root2));

// Example 3
let root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);
root3.left.right = new TreeNode(4);
root3.right.right = new TreeNode(5);

console.log(isLeafAtSameLevel(root3));

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

// Tree 1
const root1 = new TreeNode(1);
const node3Left = new TreeNode(3);
const node2Right = new TreeNode(2);
const node5Left = new TreeNode(5);

root1.left = node3Left;
root1.right = node2Right;
node3Left.left = node5Left;

// Tree 2
const root2 = new TreeNode(2);
const node1Left = new TreeNode(1);
const node3Right = new TreeNode(3);
const node4Right = new TreeNode(4);
const node7Right = new TreeNode(7);

root2.left = node1Left;
root2.right = node3Right;
node1Left.right = node4Right;
node3Right.right = node7Right;

var mergeTrees = function(root1, root2) {
    if(!root1 && !root2) {
        return null;
    }
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    const mergedRoot = new TreeNode(root1.val + root2.val);
    mergedRoot.left = mergeTrees(root1.left, root2.left);
    mergedRoot.right = mergeTrees(root1.right, root2.right);
    return mergedRoot;
};


class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inOrder, preorder, n) {
  let preIndex = 0;
  function buildTreeRecursively(start, end) {
    if (start > end) return null;
    let node = new Node(preorder[preIndex++]);
    if (start == end) return node;
    let inIndex = inOrder.indexOf(node.value, start);
    node.left = buildTreeRecursively(start, inIndex - 1);
    node.right = buildTreeRecursively(inIndex + 1, end);

    return node;
  }
  return buildTreeRecursively(0, n - 1);
}

function postorderTraversal(root) {
  let result = [];
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }
  traverse(root);
  return result;
}

const inorder = [1, 6, 8, 7];
const preorder = [1, 6, 7, 8];
const n = 4;
const root = buildTree(inorder, preorder, n);
console.log(postorderTraversal(root));

var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.children = [];
    }
    TreeNode.prototype.addChild = function (childNode) {
        this.children.push(childNode);
    };
    TreeNode.prototype.removeChild = function (childNode) {
        var index = this.children.indexOf(childNode);
        if (index !== -1) {
            this.children.splice(index, 1);
            this.children = this.children.concat(childNode.children);
        }
    };
    TreeNode.prototype.preOrderTraversal = function () {
        console.log(this.value); // Visit the node
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.preOrderTraversal(); // Traverse the child nodes in pre-order
        }
    };
    TreeNode.prototype.inOrderTraversal = function () {
        if (this.children.length > 0) {
            this.children[0].inOrderTraversal(); // Traverse the leftmost child nodes first
        }
        console.log(this.value); // Visit the node
        for (var i = 1; i < this.children.length; i++) {
            this.children[i].inOrderTraversal(); // Traverse the remaining child nodes
        }
    };
    TreeNode.prototype.postOrderTraversal = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.postOrderTraversal(); // Traverse the child nodes in post-order
        }
        console.log(this.value); // Visit the node
    };
    return TreeNode;
}());
// Create the tree
var root = new TreeNode(1);
var child1 = new TreeNode(2);
var child2 = new TreeNode(3);
var child3 = new TreeNode(4);
var grandchild1 = new TreeNode(5);
var grandchild2 = new TreeNode(6);
var grandchild3 = new TreeNode(7);
var grandchild4 = new TreeNode(8);
var grandchild5 = new TreeNode(9);
var grandchild6 = new TreeNode(10);
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
child1.addChild(grandchild1);
child1.addChild(grandchild2);
child1.addChild(grandchild3);
child2.addChild(grandchild4);
child2.addChild(grandchild5);
child3.addChild(grandchild6);
// Perform traversals
console.log('Pre-order Traversal:');
root.preOrderTraversal();
console.log('------------------------');
console.log('In-order Traversal:');
root.inOrderTraversal();
console.log('------------------------');
console.log('Post-order Traversal:');
root.postOrderTraversal();

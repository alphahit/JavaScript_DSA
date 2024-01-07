class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}



const a = new Node(11);
const b = new Node(2);
const c = new Node(4);
const d = new Node(7);
const e = new Node(21);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const breadthFirstSum = (root) => {
    if(!root) return 0
    let stack = [root]
    let result = 0;
    while(stack.length>0){
        let current = stack.shift()
        result += current.val
        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
    }
    return result
}


console.log(breadthFirstSum(a));


const recurssiveSum = (root) => { 
    if(!root) return 0
    let l = recurssiveSum(root.left)
    let r = recurssiveSum(root.right) 
    return root.val + l + r
}
console.log(recurssiveSum(a));
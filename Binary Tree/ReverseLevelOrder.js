class Node {
    constructor(val){
        this.data = val
        this.left = null
        this.right = null
    }

}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const ten = new Node(10);
const twenty = new Node(20);
const thirty = new Node(30);
const forty = new Node(40);
const sixty = new Node(60);
const seventy = new Node(70);

ten.left = twenty
ten.right = thirty
twenty.left = forty
twenty.right = sixty
thirty.right = seventy


function reverseLevelOrder(root){
    if (!root) return [];
    return [ ...reverseLevelOrder(root.left), ...reverseLevelOrder(root.right),root.data]
}

console.log(reverseLevelOrder(a))
console.log(reverseLevelOrder(ten))
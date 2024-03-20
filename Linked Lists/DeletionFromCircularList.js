class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    addLast(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            return;
        }
        let currentHead = this.head;
        let current = this.head;
        while (current.next !== currentHead) {
            current = current.next;
        }
        newNode.next = currentHead;
        current.next = newNode;
    }
    size() {
        let count = 0;
        let currentHead = this.head;
        let current = this.head;
        while (count === 0 || current !== currentHead) {
            count++;
            console.log(current.data);
            current = current.next;
        }
        return count
    }
    print() {
        let count = 0;
        let currentHead = this.head;
        let current = this.head;
        while (count === this.size()) {
            count++;
            console.log(current.data);
            current = current.next;
        }
    }
    deleteFromLinkedList(val) {
        
        
    }
}

let linkedList = new CircularLinkedList();
linkedList.addLast('1');
linkedList.addLast('2');
linkedList.addLast('3');
linkedList.addLast('4');
linkedList.print();
console.log("<====>")
// console.log(linkedList.head)

linkedList.deleteFromLinkedList("2");
// linkedList.print();

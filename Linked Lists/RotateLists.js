class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addLast(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    print() {
        let outputString = '';
        let current = this.head;
        while (current) {
            outputString += current.val + '->';
            current = current.next;
        }
        console.log(outputString + 'null');
    }
    // print() {
    //   let current = this.head;
    //   while (current) {
    //     process.stdout.write(current.val.toString());
    //     current = current.next;
    //   }
    // }
    size() {
        let current = this.head;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
    rotatek(k) {
        let current = this.head;
        let prev = null;
        let cutOffPoint = this.size() - k;
        let movement = 0;
        while (movement < cutOffPoint) {
            movement++;
            prev = current;
            current = current.next;
        }

        let newHead = current;

        let newCurrent = current;
        prev.next = null;

        while (newCurrent.next) {
            newCurrent = newCurrent.next;
        }

        newCurrent.next = this.head;

        this.head = newHead;
    }
}

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.print();
linkedList.rotatek(2);
 console.log("After Rotation");
linkedList.print();

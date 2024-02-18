class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // Only needed if using addLast elsewhere
    }

    addFront(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) { // If the list was empty, head and tail are the same
            this.tail = newNode;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            let nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        this.head = prev;
    }

    addTwoLists(firstList, secondList) {
        // Reverse the input lists to start addition from the least significant digit
        firstList.reverse();
        secondList.reverse();

        let result = new LinkedList();
        let carry = 0;
        let firstCurrent = firstList.head;
        let secondCurrent = secondList.head;

        // Loop through both lists until both are null and carry is processed
        while (firstCurrent !== null || secondCurrent !== null || carry > 0) {
            let sum = carry + (firstCurrent ? firstCurrent.data : 0) + (secondCurrent ? secondCurrent.data : 0);
            carry = Math.floor(sum / 10);
            result.addFront(sum % 10); // Add the remainder (digit to keep) to the front

            if (firstCurrent) firstCurrent = firstCurrent.next;
            if (secondCurrent) secondCurrent = secondCurrent.next;
        }

        // No need to reverse the result, as it's already in the correct order
        return result;
    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}


// Initialize first linked list
const linkedlist1 = new LinkedList();
linkedlist1.addFront(6); 
linkedlist1.addFront(4);
linkedlist1.addFront(3);



// Initialize second linked list
const linkedlist2 = new LinkedList();
linkedlist2.addFront(5);
linkedlist2.addFront(4);
linkedlist2.addFront(3);

 // Represents the number 543

// Add the two lists and capture the result in a new list
const sumList = linkedlist1.addTwoLists(linkedlist1, linkedlist2);

// Print the result
console.log("<=======>");
sumList.print(); // Expected to print the sum of 634 and 543 in correct order

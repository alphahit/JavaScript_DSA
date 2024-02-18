class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null
    }
  
  
    //Correct Approach
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) { 
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
    }

  
    lltoarraytonumber(head, head2) {
        let num1 = this.linkedListToNumber(head);
        let num2 = this.linkedListToNumber(head2);
        let sum = num1 + num2;
        this.head = null;
        this.tail = null;
        sum.toString().split('').forEach(digit => this.addLast(parseInt(digit)));
    }

    linkedListToNumber(node) {
        let num = '';
        while (node) {
            num += node.data;
            node = node.next;
        }
        return parseInt(num);
    }
    print(head){
        let current = head
        while(current){
            console.log(current.data)
            current = current.next
      
        }
    }
     

}

const linkedlist = new LinkedList()
linkedlist.addLast(3)
linkedlist.addLast(4)
linkedlist.addLast(6)

const linkedlist2 = new LinkedList()
linkedlist2.addLast(3)
linkedlist2.addLast(4)
linkedlist2.addLast(5)
linkedlist.lltoarraytonumber(linkedlist.head, linkedlist2.head)
console.log("<=======>")
linkedlist.print(linkedlist.head)




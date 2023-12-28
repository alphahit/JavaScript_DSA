class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

}

class LinkedList {
    constructor(data){
        this.head = null;
    }
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    size() {
        let count = 0
        let current = this.head
        if(!this.head){
            
            return count
        }
        while (current){
            current = current.next
            count++
        }
        return count
    }
    nthFromEnd(n){
        let totalSize = this.size();
        if(n<0 || n>totalSize){
            return null
        }
        let stepsToMove = totalSize - n
        let current = this.head
        for(let i = 0; i <= stepsToMove; i++){
            current = current.next
        }
        return current.data;  
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(3)
linkedlist.addFirst(13)
linkedlist.addFirst(8)
linkedlist.addFirst(5)
linkedlist.addFirst(18)
linkedlist.addFirst(15)
console.log(linkedlist.nthFromEnd(3))

class Node {
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
    size(){
        let count = 0;
        if(!this.head) return count

        let current = this.head
        while(current){
            count ++
            current = current.next
        }
        return count
    }
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
}

class QuickSortLinkedList extends LinkedList { 

    
     
     

    
}
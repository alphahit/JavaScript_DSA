class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    isEmpty(){return this.head === null}
    addFirst(val){
        const newNode = new Node(val)
        if(this.isEmpty()) {
            this.head = this.tail = newNode
           
        }else{
             newNode.next = this.head
             this.head.prev = newNode
             this.head = newNode;
        }
     
    }
    addLast(val){
        const newNode = new Node(val)
        if(this.isEmpty()) {
            this.head = this.tail = newNode
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const dll = new DLL();
 
// Add elements in the list
dll.addLast(25);
dll.addLast(27);
dll.addFirst(17);
dll.addFirst(29);
dll.print()
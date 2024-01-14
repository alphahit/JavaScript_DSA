class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data) {
        this.head = null
    }
    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    size(){
        if(!this.head){
            
            return count
        }
        let current = this.head
        let count = 0
        while(current){
            current = current.next
            count++
        }
        return count
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    movelasttofirst(){
        let current = this.head
        let prev = null
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = null
        current.next = this.head
        this.head = current
    }
    
}

const linkedlist = new LinkedList();

linkedlist.addFirst(13)
linkedlist.addFirst(10)
linkedlist.addFirst(8)
linkedlist.addFirst(8)
linkedlist.addFirst(5)
linkedlist.addFirst(5)
linkedlist.addFirst(5)
linkedlist.addFirst(3)


linkedlist.print()
console.log("After Movement ====>")
linkedlist.movelasttofirst()
linkedlist.print()


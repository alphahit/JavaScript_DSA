class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(data){
        this.head = null
    }

    addFirst(data){
      const newNode = new Node(data)
      newNode.next = this.head
      this.head = newNode

    }


    size() {
        let count = 0
        if(!this.head) return count
        let current = this.head
        while(current){
            count ++
            current = current.next
        }
        return count
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }


    reverse() {
        if(!this.head) return null
        let prevPointer = null
        let currentPointer = this.head
        let nextPointer;
   
        while(currentPointer){
            nextPointer = currentPointer.next;
            currentPointer.next = prevPointer
            prevPointer = currentPointer 
            currentPointer = nextPointer
           
        }

        this.head = prevPointer
      
    }

    reverseRecurssive(node=this.head, prev=null){
        if(!node){
            this.head = prev
            return
        }
        let nextPointer = node.next
        node.next = prev
        this.reverseRecurssive(nextPointer,node)
    }
}


const linkedlist = new LinkedList();

linkedlist.addFirst(3);
linkedlist.addFirst(13);
linkedlist.addFirst(-8);
linkedlist.addFirst(5);
linkedlist.print()
console.log("================================")
linkedlist.reverse()
linkedlist.print()
console.log("================================")
linkedlist.reverseRecurssive()
linkedlist.print()
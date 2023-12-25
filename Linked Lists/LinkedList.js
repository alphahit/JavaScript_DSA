class Node{
    constructor (data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode
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
    size(){
        let count = 0
        if(!this.head){
            
            return count
        }
        let current = this.head
        
        while (current){
       
                count++;
                current = current.next
            
        }
        return count
    }
    addAt(index, data){
        if(index < 0 || index > this.size()){
            console.error("Index out of bounds")
            return
        }
        const newNode = new Node(data)
        if(index === 0){
            newNode.next == this.head
            this.head === newNode
            return
        }
        let current = this.head
       for(let i = 0; i < index-1; i++){
       current == current.next
       }
       newNode.next = current.next
       current.next = newNode
    }
    removeTop(){
        if(!this.head){
            return
        }
        this.head = this.head.next;
        //If there no place referencing the deleted head it will be removed by JavaScript engine
    }
    removeLast(){
        if(!this.head){
            return
        }
        let current = this.head
      while(current.next.next) {
        current = current.next
      }
      
      current.next = null
    }
    removeAt(index){
        if(!this.head){
            return
        }
        if(index === 0){
            this.head == this.head.next
             return
        }
        if(index < 0 || index > this.size()){
            console.error("Index out of bounds")
            return
        }
        let current = this.head
        for(let i=0; i<index-1; i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
        
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(3)
linkedlist.addFirst(13)
linkedlist.addFirst(8)
linkedlist.addFirst(5)
linkedlist.addLast(10)
linkedlist.removeLast()
linkedlist.removeTop()
linkedlist.addAt(1,30)
linkedlist.removeAt(1)
console.log("Size =====>",linkedlist.size())
linkedlist.print()
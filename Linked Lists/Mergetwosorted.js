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
      

    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedlist = new LinkedList();
const linkedlisttwo = new LinkedList();

linkedlist.addFirst(39)
linkedlist.addFirst(153)
linkedlist.addFirst(84)
linkedlist.addFirst(5)
linkedlist.addLast(10)
linkedlist.addAt(1,300)

console.log("Size =====>",linkedlist.size())
linkedlist.print()


linkedlisttwo.addFirst(30)
linkedlisttwo.addFirst(123)
linkedlisttwo.addFirst(88)
linkedlisttwo.addFirst(50)
linkedlisttwo.addLast(150)
linkedlisttwo.addAt(1,310)

console.log("Size =====>",linkedlisttwo.size())
linkedlisttwo.print()


// function mergeTwoSorted (list1, list2){

// }
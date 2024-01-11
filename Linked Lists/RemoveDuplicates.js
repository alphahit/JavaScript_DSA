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
    removeOneDuplicate(){
        const m = new Map()
        let current = this.head
        while(current){
           m.set(current.data,(m.get(current.data) || 0) + 1)
           current = current.next
        }
        let s;
        for(const t of m.keys()) {
            if(m.get(t)>1){
                s =  { duplicatevalue:t, numberofDuplicates:   m.get(t)-1}
            }
        }
        let currentForDelete = this.head
        let countDelete = 0
        while(currentForDelete.next && countDelete<s.numberofDuplicates){
            if(currentForDelete.next.data === s.duplicatevalue) 
            {
                currentForDelete.next = currentForDelete.next.next
                countDelete++
            }
            
            else{
                currentForDelete=currentForDelete.next
            }
        }
    }

    removeDuplicate(){
        if(!this.head || !this.head.next){
            return;
        }
        const m = new Map()
        let current = this.head
        let prev = null;
        while(current){
            if(m.get(current.data)){
                if (prev) {
                  prev.next = current.next;
                } else {
                   this.head = current.next;
                }
            }else{
                m.set(current.data, 1)
                prev= current
            }
            current = current.next
         }
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



//console.log("Size =====>",linkedlist.size())
// linkedlist.print()
//linkedlist.removeOneDuplicate()
linkedlist.removeDuplicate()
linkedlist.print()


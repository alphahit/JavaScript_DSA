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


    reverse(head, left, right) {
        if (!head || left === right) {
            return;
        }

        let dummy = new Node(0);
        dummy.next = head;
        let prev = dummy;

       
        for (let i = 0; prev.next && i < left - 1; i++) {
            prev = prev.next;
        }

        let start = prev.next;
        let then = start.next;

       
        for (let i = 0; i < right - left; i++) {
            start.next = then.next;
            then.next = prev.next;
            prev.next = then;
            then = start.next;
        }

        head = dummy.next;
    }
   
}


const linkedlist = new LinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(4);
linkedlist.addFirst(3);
linkedlist.addFirst(2);
linkedlist.addFirst(1);
linkedlist.print()
console.log("================================")
linkedlist.reverse(linkedlist.head, 2,4)
linkedlist.print()

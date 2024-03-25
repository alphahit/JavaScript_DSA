class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    addLast(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            return
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
        return 
    }
    // segregateEvenOdd(){
    //     let current = this.head
    //     let currentHead = this.head
    //     let prev = null;
    //     while(current){
    //         prev = current
    //        if(current.data % 2 === 0){
    //             prev.next = current.next.next
             
    //             if(currentHead === this.head){
    //                 current.next = currentHead
    //                 currentHead = current
                  
    //             }else{
    //                 currentTemp = currentHead
    //                 while(currentTemp.next === this.head){
    //                     currentTemp = currentTemp.next
    //                 }
    //                 currentTemp.next = current
    //                 current.next = this.head
                   
    //             }
                
    //             current = prev.next
    //         }
    //         current = current.next
    //     }
    // }

    // segregateEvenOdd(){
    //     let current = this.head
    //     let currentHead = null;
    //     let prev = null;
    //     do{
    //         prev = current;
    //         if(current.data % 2 === 0){
    //             prev.next = current.next;
    //             if(currentHead === null){
    //                 console.log("first",currentHead,current.data)
    //                 current.next = this.head;
    //                 this.head = current;
    //                 currentHead = current;
    //             }else{
    //                 current.next = currentHead.next;
    //                 currentHead = current;
    //             }
    //             current = prev.next;
    //         }else{
    //             current = current.next;
    //             prev = current;
    //         }

    //     }while(current.next)
    // }

    segregateEvenOdd(){
        let tail = null
        let prev = null
        let current = this.head
        while(current.next){
            current = current.next
        }
        tail = current
        current = this.head
        while(current.next){
            prev = current
            if(current.data %2 !== 0){
                tail.next = current
                prev.next = current.next.next
                current = prev.next
            }
            
        }


    }
    print(){
       let current = this.head
       while(current){
        console.log(current.data)
        current = current.next
        }
    }

}
const linkedlist = new LinkedList();
linkedlist.addLast(17)
linkedlist.addLast(15)
linkedlist.addLast(8)
linkedlist.addLast(9)
linkedlist.addLast(2)
linkedlist.addLast(4)
linkedlist.addLast(6)

linkedlist.print()
linkedlist.segregateEvenOdd()
linkedlist.print()
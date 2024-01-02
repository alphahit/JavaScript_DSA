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
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

class QuickSortLinkedList extends LinkedList {

    sort(){
        this.head = this.quickSort(this.head, this.getPivot(this.head));
    }

    getPivot(node){
        while(node && node.next){
            node = node.next;
        }
        return node;
    }

    partition(head, end){
        let pivot = end.data;
        let prev = null, tail = end, current = head;

        while(current !== end){
            if(current.data < pivot){
                if(prev === null){
                    head = current;
                }else{
                    prev.next = current;
                }
                prev = current;
            }else{
                tail.next = current;
                tail = current;
            }
            current = current.next;
        }
        tail.next = null; // very important to avoid cycles in linked list
        if(prev !== null){
            prev.next = end;
        }
        return head;
    }

    quickSort(start, end){
        if(start == null || start === end){
            return start;
        }

        let newStart = null, newEnd = null;

        newStart = this.partition(start, end);
        if(newStart !== end){
            start = this.quickSort(newStart, end);
            newEnd = end.next;
            end.next = newEnd;
        }

        if(newEnd != null){
            this.quickSort(end.next, newEnd);
        }

        return newStart;
    }
}


const sortedLinkedList = new QuickSortLinkedList();

sortedLinkedList.addFirst(3);
sortedLinkedList.addFirst(13);
sortedLinkedList.addFirst(8);
sortedLinkedList.addFirst(5);
sortedLinkedList.addFirst(2);
sortedLinkedList.print(); 
sortedLinkedList.sort(); 
sortedLinkedList.print(); 
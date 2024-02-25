class Node{
    constructor(x){
        this.data = x;
        this.prev = null;
        this.next = null;
      }
}


class Solution{
    reverseDLL(head){
        let current = head;
         let temp = null;
         while (current != null) {
              
               temp = current.prev;
               current.prev = current.next;
               current.next = temp;
   
               current = current.prev;
           }
   
           if (temp != null) {
               head = temp.prev;
           }
   
           return head; 
     }
}
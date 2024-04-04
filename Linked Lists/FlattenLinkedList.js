class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.bottom = null;
    }
  }
  
  function newNode(value) {
    return new Node(value);
  }

  function constructLinkedList() {
    let head = newNode(5);
    head.bottom = newNode(7);
    head.bottom.bottom = newNode(8);
    head.bottom.bottom.bottom = newNode(30);
  
    head.next = newNode(10);
    head.next.bottom = newNode(20);
  
    head.next.next = newNode(19);
    head.next.next.bottom = newNode(22);
    head.next.next.bottom.bottom = newNode(50);
  
    head.next.next.next = newNode(28);
    head.next.next.next.bottom = newNode(35);
    head.next.next.next.bottom.bottom = newNode(40);
    head.next.next.next.bottom.bottom.bottom = newNode(45);
  
    return head;
  }
  
  const head = constructLinkedList();
  
  function printList(head) {
    let current = head;
    while (current != null) {
      console.log(current.value);
      let bottom = current.bottom;
      while (bottom != null) {
        console.log(' | ' + bottom.value);
        bottom = bottom.bottom;
      }
      current = current.next;
      if (current != null) console.log(' -> ');
    }
  }
  
  // Print the constructed list
  printList(head);
  

  class BSTNode{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
    
  }
class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new BSTNode(val);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root 
        while(current){
            if(val < current.data){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left
            }else if(val > current.)
        }

    }
}
  function createBSTFromList(head){
    
  }
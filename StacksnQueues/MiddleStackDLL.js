// stack which will support the following operations in O(1) time complexity?
// 1) push() which adds an element to the top of stack.
// 2) pop() which removes an element from top of stack.
// 3) findMiddle() which will return middle element of the stack.
// 4) deleteMiddle() which will delete the middle element.

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class StackDll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.middle = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.middle = newNode;
      this.size++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
      if (this.size % 2 !== 0) {
        this.middle = this.middle.next;
      }
    }
  }
  pop() {
    if (!this.head) {
      return null;
    } else {
      this.tail = this.tail.prev;
      this.tail.prev.next = null;
      this.size--;
      if (this.size % 2 !== 0) {
        this.middle = this.middle.prev;
      }
    }
  }
  findMiddle() {
    console.log(this.middle.data);
    return this.middle.data;
  }
  deleteMiddle() {
    let before = this.middle.prev;
    let after = this.middle.next;
    before.next = after
    after.prev = before
    if(this.size%2 !== 0){
        this.middle = before
    }else{
        this.middle = after
    }
    this.size-- 
        console.log(this.middle.data)
  }
  print(){
    let current = this.head
    let arr = []
    while (current)
    {
        arr.push(current.data) 
        current = current.next;
    }
    console.log(arr)
    return arr
  }
}

const dllStack = new StackDll()
dllStack.push(24)
dllStack.push(15)
dllStack.push(19)
dllStack.push(29)
dllStack.push(39)
dllStack.print()
dllStack.findMiddle()
dllStack.deleteMiddle()
dllStack.print()
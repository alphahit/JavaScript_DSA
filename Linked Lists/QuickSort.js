class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    if (!this.head) return count;

    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

class QuickSortLinkedList extends LinkedList {
  sort() {
    this.head = this.quickSort(this.head, this.getPivot(this.head));
  }

  getPivot(node) {
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  partition(head, end) {
    let pivot = end.data;
    let prev = null,
      tail = end,
      current = head;

    while (current !== end && current != null) {
      if (current.data < pivot) {
        if (prev === null) {
          head = current;
        } else {
          prev.next = current;
        }
        prev = current;
      } else {
        tail.next = current;
        tail = current;
      }
      current = current.next;
    }
    tail.next = null;
    if (prev !== null) {
      prev.next = end;
    }
    return head;
  }

  quickSort(start, end) {
    if (start == null || start === end) {
      return start;
    }

    let partitioned = this.partition(start, end),
      pivot = start;

    while (pivot != null && pivot.next != null && pivot.next != end) {
      pivot = pivot.next;
    }

    if (pivot != null && pivot.next == end) {
      pivot.next = null;
    }

    let newStart = null;
    if (partitioned != end) {
      newStart = this.quickSort(partitioned, pivot);

      if (pivot != null) {
        pivot.next = end;
      }
    }

    if (end != null && end.next != null) {
      end.next = this.quickSort(end.next, this.getPivot(end.next));
    }

    return newStart == null ? start : newStart;
  }
}

const sortedLinkedList = new QuickSortLinkedList();

sortedLinkedList.addFirst(3);
sortedLinkedList.addFirst(13);
sortedLinkedList.addFirst(8);
sortedLinkedList.addFirst(5);
sortedLinkedList.addFirst(2);

sortedLinkedList.sort();
sortedLinkedList.print();

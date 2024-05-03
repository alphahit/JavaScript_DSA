class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findIntersection(head1, head2) {
  let length1 = getListLength(head1);
  let length2 = getListLength(head2);

  let diff = Math.abs(length1 - length2);

  let first = length1 > length2 ? head1 : head2;
  let second = length1 > length2 ? head2 : head1;

  for (let i = 0; i < diff; i++) {
    if (first) first = first.next;
  }

  while (first && second && first !== second) {
    first = first.next;
    second = second.next;
  }

  return first ? first.value : null;
}

function getListLength(node) {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}

let common = new ListNode(8, new ListNode(4, new ListNode(5)));

let head1 = new ListNode(4, new ListNode(1, common));
let head2 = new ListNode(5, new ListNode(6, new ListNode(1, common)));

console.log(findIntersection(head1, head2));

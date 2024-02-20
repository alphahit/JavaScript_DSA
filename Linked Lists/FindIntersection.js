class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    
    height(head1){
        let count = 0
        let current1 = head1
       while(current1.next){
          count++
           current1 = current1.next
       }
       return count
    }
  
    intersectPoint(head1, head2)
    {
       let m = new Map()
       let current1 = head1
       let size = this.height(head1)
       let count = 0
       while(current1.next){
           m.set(current1.data, size - count)
           count ++
           current1 = current1.next
       }
       
       let current2 = head2
       let count2 = 0
        let size2 = this.height(head2)
       while(current2.next){
           if(m.has(current2.data) && m.get(current2.data) === (size2 - count2)){
             return current2.data
           }
           count2++
           current2 = current2.next
           
       }
       return -1
    }
}

let head1 = new Node(3);
head1.next = new Node(6);


let head2 = new Node(10);


let common = new Node(15);
common.next = new Node(30);
head1.next.next = common;
head2.next = common;
let solution = new Solution();
let intersectionData = solution.intersectPoint(head1, head2);
console.log(intersectionData)



//Correct Approach
// class Solution {
//     // Function to get the count of nodes in a linked list
//     getCount(head) {
//         let count = 0;
//         let temp = head;
//         while (temp) {
//             count++;
//             temp = temp.next;
//         }
//         return count;
//     }

//     // Function to get the intersection point of two linked lists
//     intersectPoint(head1, head2) {
//         let c1 = this.getCount(head1);
//         let c2 = this.getCount(head2);
//         let d = Math.abs(c1 - c2);

//         let current1 = head1;
//         let current2 = head2;

//         // Move the pointer forward in the bigger list by d nodes
//         if (c1 > c2) {
//             for (let i = 0; i < d; i++) {
//                 current1 = current1.next;
//             }
//         } else {
//             for (let i = 0; i < d; i++) {
//                 current2 = current2.next;
//             }
//         }

//         // Now move both pointers until they meet
//         while (current1 && current2) {
//             if (current1 === current2) {
//                 return current1.data;
//             }
//             current1 = current1.next;
//             current2 = current2.next;
//         }

//         return -1;
//     }
// }

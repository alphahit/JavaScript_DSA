class Node{
    constructor (data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode
    }

   
    size(){
        let count = 0
        if(!this.head){
            
            return count
        }
        let current = this.head
        
        while (current){
       
                count++;
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



// Extends the LinkedList class to include sorting functionality
class SortLinkedList extends LinkedList { 

    // Method to initiate sorting of the linked list
    sort(){
        // It is a method of SortLinkedList. It initiates the sorting process by calling mergeSort() on the head of the list. 
        // The head of the list is then updated to the head of the sorted list returned by mergeSort().
        this.head = this.mergeSort(this.head)
    }

    // mergeSort(node) is a recursive function that sorts a linked list using the merge sort algorithm. 
    // The base case is when the list is empty (!node) or has only one node (!node.next), 
    // in which case it returns the node itself, as a list of one or zero elements is already sorted.
    mergeSort(node) {
        if (!node || !node.next) {
            return node;
        }

        // Finding the middle of the list
        let middle = this.getMiddle(node);
        let nextOfMiddle = middle.next;

        // Breaking the list into two halves
        middle.next = null;

        // Recursively sorting the two halves
        let left = this.mergeSort(node);
        let right = this.mergeSort(nextOfMiddle);

        // Merging the sorted halves
        let sortedList = this.sortedMerge(left, right);
        return sortedList;
    }

     // Helper function to find the middle of the list
    getMiddle(node){
        if(!node){
            return node;
        }
        let slow = node;
        let fast = node.next;

        while(!fast && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow;
    }
    sortedMerge(a,b){
        let result = null
        //These conditions handle the cases where one of the lists is empty. 
        //If list a is empty, it returns list b, and vice versa.
        if(!a){
            return b
        }
        if(!b){
            return a
        }
        
        //This part compares the data of the two list heads. The smaller node becomes the head of the result. 
        //Then it recursively calls sortedMerge for the next of the smaller element and the other list.
        if(a.data <= b.data){
            result = a
            result.next = this.sortedMerge(a.next,b)
        }  else {
            result = b;
            result.next = this.sortedMerge(a, b.next);
        }

        return result;
    }
}

const sortedLinkedList = new SortLinkedList();

sortedLinkedList.addFirst(3);
sortedLinkedList.addFirst(13);
sortedLinkedList.addFirst(8);
sortedLinkedList.addFirst(5);
sortedLinkedList.sort(); 
sortedLinkedList.print(); 

const sortedLinkedListTwo = new SortLinkedList();
sortedLinkedListTwo.addFirst(30)
sortedLinkedListTwo.addFirst(123)
sortedLinkedListTwo.addFirst(88)
sortedLinkedListTwo.addFirst(50)
sortedLinkedListTwo.print();






//Let's take a bottom-up approach to explain this, starting from the deepest recursive call and 
//moving back to the original call. We'll assume the list has n nodes for this example.

// Base Case (Deepest Recursive Call):

// When mergeSort is called with a list of one element or an empty list (node is null or node.next is null), 
//it hits the base case and returns the node itself. This is the deepest level of recursion where no 
//further recursive calls are made.

// Returning From Base Case:

// As we return from the base case, the previous mergeSort calls start resolving. 
//Each mergeSort call was waiting to sort a smaller part of the list, 
//either the left or right half obtained after dividing at the middle.
// getMiddle Function:

// The getMiddle function is called before the recursive calls in mergeSort. 
//It finds the middle of the current list segment using the slow and fast pointer approach. 
//This middle point is used to divide the list into two halves.

// Dividing the List:

// The list is divided into two halves at the middle node found by getMiddle. 
//The next pointer of the middle node is set to null to break the list.

// Recursive Calls to mergeSort:

// Two recursive calls are made for each half of the list: 
//one for the left half starting from node and another for the right half starting from nextOfMiddle.
// These calls will further divide the halves until they reach the base case (a single element or empty list).

// sortedMerge Function:

// Once the base cases are reached and we start returning back, sortedMerge is called to merge the sorted halves. 
//This function merges two sorted linked lists by comparing the node values and 
//recursively calling itself to merge the remaining nodes.

// Building up the Sorted List:

// Each return from sortedMerge gives a partially merged sorted list. 
//This process continues as the call stack unwinds, eventually merging larger segments of the list 
//until the entire list is sorted.

// Final Return:

// The final sorted list is obtained when the original call to mergeSort (on the entire list) gets its left and right halves 
//sorted and merged. This sorted list is then set as the new head of the linked list.

// In summary, the call stack grows as the list is divided into smaller segments, 
//reaches its maximum depth at the base cases, and then starts resolving as these segments are merged back into a sorted list.
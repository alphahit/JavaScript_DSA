//Heap is a variant of tree data structure, with two additional properties:

//It is a Complete Binary Tree: 
// Each level of a Complete Binary Tree contains the maximum number of nodes, 
// except possibly the last layer, which must be filled from left to right. 
// A Complete Binary Tree is always balanced by it's definition.

// All nodes are either greater than or equal to or less than or equal to each of its children. 
// If the parent nodes are greater than their child nodes, the heap is called a Max-Heap, 
// and if the parent nodes are smaller than their child nodes, the heap is called Min-Heap.

//No Implied or Relationship between siblings

// Heap is one efficient implementation of an abstract data structure called a priority queue.

// In a heap, the highest (or lowest) priority element is always stored at the root, 
// thus priority queue is often referred to as heaps irrespective of their implementation.

// Heap is the most useful data structure when it is necessary to repeatedly remove the 
// object with the highest (or lowest) priority.

//Binary heaps can be represented using an array with certain mathematical calculations.

//If a node is placed at index i in array: 
//It's left child would be at (2i+1)th position
//Right one would be at (2i+2)the position
//Child at index i : Parent = Math.floor((i-1)/2)


class MaxBinaryHeap {

    //Add It To End
    //Bubble It Up

    constructor(){
        this.values = [41,39,33,18,27,12]

    }
    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length -1
        const element = this.values[idx]
        while(idx>0){
            let parentidx = Math.floor((idx-1)/2)
            
            if(this.values[parentidx]<element){
                [this.values[parentidx], this.values[idx]] = [this.values[idx], this.values[parentidx]];
                idx = parentidx;
            }else{
                break
            }
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(155)
heap.insert(15)
console.log(heap.values)

//[41,39,33,18,27,12,55]



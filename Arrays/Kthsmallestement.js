
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

class Solution {
    quickSort(arr) { 
       
        if(arr.length < 2){
            return arr 
        }
    
        let pivot = arr[arr.length - 1]; 
    
        let left = [] 
        let right = [] 
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] < pivot){ 
                left.push(arr[i]) 
            } else { 
                right.push(arr[i]) 
            }
        }
        
      
        return [...this.quickSort(left), pivot, ...this.quickSort(right)] 
    }
    kthSmallest(arr,l,r,k){
        let sortedArray = this.quickSort(arr);
        return sortedArray[k - 1]; 
    }
    kthLargest(arr,l,r,k){
        let sortedArray = this.quickSort(arr);
        return sortedArray[(r+1)-k]; 
    }
    maxElement(arr,l,r,k){
        let sortedArray = this.quickSort(arr);
        return sortedArray[r]; 
    }
    minElement(arr,l,r,k){
        let sortedArray = this.quickSort(arr);
        return sortedArray[l]; 
    }
  }


let arr = [7, 10, 4, 3, 20, 15,5];
let k = 3
let l = 0
let r = arr.length -1
let solution = new Solution()
console.log(solution.kthSmallest(arr, l, r, k));
console.log(solution.kthLargest(arr, l, r, k));
console.log(solution.maxElement(arr, l, r, k));
console.log(solution.minElement(arr, l, r, k));

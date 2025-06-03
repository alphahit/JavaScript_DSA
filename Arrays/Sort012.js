function Sort012 (arr,n) { //O(n) -- TC O(n) -- SC
    let count0 = 0
    let count1 = 0
    let count2 = 0
    for(let i =0; i<n; i++) {
        if(arr[i] === 0) count0++;
        if(arr[i] === 1) count1++;
        if(arr[i] === 2) count2++;
    }
    let arr1 = []
    for(let i =0; i<count0; i++) {
        arr1.push(0)
    }
    for(let i =0; i<count1; i++) {
        arr1.push(1)
    }
    for(let i =0; i<count2; i++) {
        arr1.push(2)
    }
    return arr1
}

// console.log(Sort012([0,1,0,2,2,1,1,0,0,0,0],5))


function Sort012Optimize (argArr){
     let arr = [...argArr]
    let low = 0
    let mid = 0
    let high = arr.length - 1
    while(mid<=high){
        switch(arr[mid]){
            case 0: 
                let temp1 = arr[mid]
                arr[mid] = arr[low]
                arr[low] = temp1
                low++
                mid++
                break;
            case 1: 
                mid++
                break;
            case 2:
                let temp2 = arr[high]
                arr[high] = arr[mid]
                arr[mid] = temp2
                high--
                break;
        }
    }

    return arr

}

console.log(Sort012Optimize([0,1,0,2,2,1,1,0,0,0,0]))

// You should definitely remember the Dutch National Flag Algorithm as 
// a powerful and efficient solution for sorting arrays with three distinct
// elements. While its core concept of partitioning can be applied or 
// adapted in other algorithms (like Quicksort's partitioning), the 
// specific implementation with three pointers and the switch statement 
// is tailored for the 0, 1, 2 sorting problem. 
// It's a great example of an optimized algorithm for a specific constraint.
// //Time Complexity : O(n)
// //Space Complexity : O(n)
// function moveNegative(arr){
//     let len = arr.length
//     let negative = []
//     let postivie = []
//     for(let i=0; i<len; i++){
//         if(arr[i]<0){
//             negative.push(arr[i])
          
//         }else if(arr[i]>0){
//             postivie.push(arr[i])
//         }
       
//     }
//     return [...negative, ...postivie]
// }
// console.log("moveNegative========>",moveNegative([2,3,4,-1,-3-5,-2,31,45]))


// //Time Complexity : O(n) Splice Takes: O(n^2)
// //Space Complexity : O(n)
// function moveNegativeSplice(arr) {
//     let negative = [];
//     for (let i = 0; i < arr.length; ) {
//         if (arr[i] < 0) {
//             negative.push(arr[i]);
//             arr.splice(i, 1);
//         } else {
//             i++;  // Increment i only if no element is removed
//         }
//     }
//     return [...negative, ...arr];
// }

// console.log("moveNegativeSplice========>",moveNegativeSplice([2, 3, 4, -1, -3, -5, -2, 31, 45]));


// //Two-pointer technique
// function moveNegativeOptimized(arr) {
//     let left = 0, right = arr.length - 1;
//     while (left <= right) {
//         if (arr[left] < 0) {
//             left++;
//         } else if (arr[right] >= 0) {
//             right--;
//         } else {
//             // Swap arr[left] and arr[right]
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//     return arr;
// }
// console.log("moveNegativeOptimized========>",moveNegativeOptimized([2, 3, 4, -1, -3, -5, -2, 31, 45]));




function negativeFirst(arr){
    let start = 0
    let end = arr.length - 1

    while(start < end){
        if(arr[start] > 0 && arr[end] < 0){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
        if(arr[start] > 0 && arr[end] > 0){
            end--
        }
    }
    return arr
}

console.log(negativeFirst([2, 3, 4, -1, -3, -5, -2, 31, 45]));
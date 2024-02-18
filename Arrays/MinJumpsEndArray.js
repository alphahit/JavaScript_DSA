
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
let arr1 = [1, 4, 3, 2, 6, 7]

function minJumps(arr){
    let jumpAmount = arr[0]
    let n = arr.length
    if (n <= 1) return 0;
    let jumpAmountLeft = n - jumpAmount
    let count = 1
    while(jumpAmountLeft > jumpAmount){
        if(jumpAmount === 0) return -1
        jumpAmount = arr[jumpAmount + arr[jumpAmount]]
        count = count + 1
    }
    return count 
}
console.log(minJumps(arr))
console.log(minJumps(arr1))




//Correct Approach

// function minJumps(arr) {
//     let n = arr.length;
//     if (n <= 1) return 0;
//     if (arr[0] === 0) return -1;

//     let maxReach = arr[0]; // The maximum index that can be reached
//     let step = arr[0]; // The current step count from the current position
//     let jump = 1; // Number of jumps necessary to reach or exceed the end

//     for (let i = 1; i < n; i++) {
//         // Check if we have reached the end of the array
//         if (i === n - 1) return jump;

//         // Updating maxReach
//         maxReach = Math.max(maxReach, i + arr[i]);

//         // We use a step to get to the current index
//         step--;

//         // If no more steps are remaining
//         if (step === 0) {
//             jump++;

//             // Check if the current position is beyond reach
//             if (i >= maxReach) return -1;

//             // Re-initialize the steps to the amount
//             // of steps to reach maxReach from position i.
//             step = maxReach - i;
//         }
//     }
//     return -1; // If we can't reach the end of the array
// }


//Correct Approach 2
// if (arr.length <= 1) return 0;
//     if (arr[0] == 0) return -1; // If the first element is 0, it's not possible to move anywhere

//     let jumps = 1; // You need at least one jump to move from the first element
//     let currentEnd = arr[0]; // The range of the first jump
//     let farthest = arr[0]; // The farthest we can reach

//     for (let i = 1; i < arr.length; i++) {
//         if (i > farthest) return -1; // If the current index is beyond the farthest reach, we cannot proceed
//         if (i > currentEnd) { // Need to make a new jump
//             jumps++;
//             currentEnd = farthest;
//         }
//         farthest = Math.max(farthest, i + arr[i]);
//     }

//     return jumps;
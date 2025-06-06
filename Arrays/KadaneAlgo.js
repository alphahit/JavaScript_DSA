//Given an integer array nums, find the subarray (contiguous) with the largest sum, and return its sum

//Input: [-2,1,-3,4,-1,2,1,-5,4]  ---- Output: 6 [4,-1,2,1]
//Input: [5,4,-1,7,8]  ---- Output: 23 [5,4,-1,7,8]

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

function bruteSumSubarray(arr) {
  let maxSum = arr[0];

  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum > maxSum) {
        maxSum = sum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  return { maxSum, subarr: arr.slice(startIndex, endIndex + 1) };
}

// console.log(bruteSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(bruteSumSubarray([5, 4, -1, 7, 8]));



function maxSubArrayKadane(nums){

    let sum   = 0
    let maxSum = nums[0]
    let start = 0
    let maxStart = 0
    let maxEnd = 0

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
     
        if(sum > maxSum){
            maxStart = start
            maxEnd = i
            maxSum = sum
        }

        if(sum < 0){
            sum = 0
            start = i + 1
        }
    }

  return { maxSum, subarr: nums.slice(maxStart, maxEnd + 1) };

}

console.log(maxSubArrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrayKadane([5, 4, -1, 7, 8]));









//Kadane's Algo
// function maxSubArrayKadane(nums){//TC: O(n)
//     let sum = 0;
//     let max = nums[0];

//     for(let i=0; i<nums.length; i++){
//        sum += nums[i]
//        if(sum > max) {max = sum}
//        if(sum < 0) {sum=0}
//     }
//     return {
//         sum: max,
//        // maxSubArray: nums.slice(startIndex, endIndex+1)
//     };
// }

// function maxSubArrayKadane(nums){
//     let sum = 0;
//     let max = nums[0];
//     for(let i=0; i<nums.length; i++){
//         sum += nums[i];
//         if(sum > max){
//             max = sum;
//         }
//         if(sum < 0){
//             sum = 0
//         }
//     }
//     return max;
// }
// console.log(maxSubArrayKadane([-2,1,-3,4,-1,2,1,-5,4]))

//Correct One
// function maxSubarraySum(nums){
//     let maxSum = nums[0];
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum =  Math.max(nums[i], sum + nums[i]);
//         maxSum = Math.max(maxSum,sum)
//     }
//     return maxSum;
// }
// console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubarraySum([-1]))

//Brute Force
// function maxSubArray(nums){//TC: O(n^2), SC: O(1)
//     let maxSum = 0;
//     let startIndex = 0, endIndex = 0;

//     for(let i=0; i<nums.length; i++){
//         let sum = 0;
//         for(let j=i; j<nums.length; j++){
//             sum += nums[j];
//             if(sum > maxSum){
//                 maxSum = sum;
//                 startIndex=i;
//                 endIndex=j;
//             }
//         }

//     }
//     return {sum: maxSum, maxSubArray: nums.slice(startIndex, endIndex+1)};
// }

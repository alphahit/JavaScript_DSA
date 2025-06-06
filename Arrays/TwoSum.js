


// function twoSum(nums, target){
//   let m = new Map()
//     let elements = []
//   for(let i = 0 ; i<nums.length;  i++){

//     let complement = target - nums[i]
//     console.log(m)
//     if(m.has(complement)){
//         elements.push([complement, nums[i]])
//           m.set(nums[i], complement)
//     }else{
//       m.set(nums[i], complement)
//     }
//   }


//   return elements
// }


console.log(twoSum([6, 1, 8, 0, 4, -9, -1, -10, -6, -5],0))


//LeetCode Solution 




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map()
    let elements = []
  for(let i = 0 ; i<nums.length;  i++){

let complement =  target - nums[i]


    if(m.has(complement)){
            return [m.get(complement), i]
    }else{
        m.set(nums[i], i)
    }

  }

  return elements
};

// function reverse(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     end--;
//     start++;
//   }
//   return arr;
// }

// //TC = O(n), SC = O(n)
// var twoSum = function (nums, target) {
//   let m = new Map();
//   let element = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (m.has(target - nums[i])) {
//       element.push(i);
//       element.push(m.get(target - nums[i]));
//     } else {
//       m.set(nums[i], i);
//     }
//   }
//   return reverse(element);
// };

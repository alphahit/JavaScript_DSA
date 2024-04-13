/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1
   let mid;
   while(low <= high){
     mid = Math.floor((low + high) / 2)
     if(nums[mid] === target){
        return mid
     }
     if(target > nums[mid]){
        low = mid + 1
     }else{
        high = mid - 1
     }
   }
   return low;
};

let nums  = [1,3,5,6], target = 5

console.log(searchInsert(nums, target))
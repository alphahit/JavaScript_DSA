/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0
    let forward = 0

    if(nums.length === 1){
        return nums
    }

    while(forward < nums.length){
        if(nums[forward] !== 0 && nums[start] === 0){
             let temp = nums[forward]
            nums[forward] = 0
            nums[start] = temp
            start++
            forward++
        }
        if(nums[forward] === 0){
             forward++
        }
        if(nums[forward] !== 0 && nums[start] !== 0){
             start++
             forward++
        }
    }

    return nums
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// https://leetcode.com/problems/move-zeroes/description/
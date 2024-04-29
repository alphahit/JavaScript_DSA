/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i,j)=>{
    temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
var sortColors = function(nums) {
    
    let l = 0
    let r = nums.length - 1
    let i = 0;
    while (i < r) {
        if(nums[i] === 0 ){
            swap(nums, l, i)
            l++
        }else if(nums[i] === 2){
            swap(nums, i, r)
             r--
             i--
        }   
        i++
    }
    return nums
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
     const prefixSumMod = new Map();
     let prefixSum = 0;
     prefixSumMod.set(0,-1);
     for (let i = 0; i < nums.length; i++){
        prefixSum +=  nums[i];
        let mod = prefixSum % k;

        if(mod < 0) mod += k;

        if(prefixSumMod.has(mod)){
            if(i - prefixSumMod.get(mod) > 1   ){
                return true;
            }
        }else{
            prefixSumMod.set(mod,i);
        }
     }
     return false;
};

console.log(checkSubarraySum([23,2,4,6,7],6))
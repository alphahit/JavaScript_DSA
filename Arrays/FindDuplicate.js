var findDuplicate = function(nums) {
    const m = new Map()
    for(let i = 0; i<nums.length; i++) {
        if(m.has(nums[i])) return nums[i]
        else m.set(nums[i], 1)       
    } 
};


function  findDuplicate_mark(nums){
    for(let num of nums){
        let idx = Math.abs(num)
        if(nums[idx]<0) return idx
        nums[idx] = -nums[idx]
    }
    return len
}

let nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));
console.log(findDuplicate_mark(nums));
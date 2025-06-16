function rotate(nums, k) {
    let temp = []
    let rotateStack = []
    for(let i = 0; i < k; i++){
       temp.push(nums.pop())    
    }
    for(let i = 0; i < k; i++){
       rotateStack.push(temp.pop())    
    }
    return [...rotateStack, ...nums]
};

let nums = [1,2,3,4,5,6,7], k = 3


console.log(rotate(nums, k))

 function rotateInplace(nums, s) {
   if(nums.length === 1){
    return nums
   }
    
    let k = 0
    if(s > nums.length){
       k = s % nums.length;
    }else{
        k = s
    }

    let start = 0
    let end = nums.length - 1
    while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }

    let fstart = 0
    let fend = k-1

    while(fstart < fend){
         let temp = nums[fstart]
        nums[fstart] = nums[fend]
        nums[fend] = temp
        fstart++
        fend--
    }


  let sstart = k
    let send = nums.length - 1

    while (sstart < send){
         let temp = nums[sstart]
        nums[sstart] = nums[send]
        nums[send] = temp
        sstart++
        send--
    }

    return nums


};

console.log(rotateInplace(nums, k))
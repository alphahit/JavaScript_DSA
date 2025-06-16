/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

 let sum = 0
let sumDigit = 0

        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
            if(nums[i]  > 9 ){
                let temp = nums[i]
                  while(temp  > 0){
                    sumDigit += temp%10
                    temp = Math.floor(temp / 10)
                  }


            }else{
                 sumDigit += nums[i]
            }
           
        }

    let val = sum -  sumDigit
        return Math.abs(val)
};

//https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
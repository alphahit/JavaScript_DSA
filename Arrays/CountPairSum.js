class Solution {
    getPairsCount(arr,k){ //O(n^2)
        let count = 0;
       for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length; j++){
            if((arr[i] + arr[j]) === k ){
                count ++
            }
        }
       }
       return count
    }
}

const pairSum = new Solution()
console.log("<======>",pairSum.getPairsCount([5, 0, -10, 1, 2,4,0,15,-6],6))
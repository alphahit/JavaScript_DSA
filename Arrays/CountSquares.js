class Solution {
   
    countSquares(N)
    {
       return Math.floor(Math.sqrt(N-1)) 
    }
}

const s = new Solution()
console.log(s.countSquares(9))

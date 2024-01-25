class Solution {
   
    find3Numbers(A, n, X)
    {
        let elements = []
        A.sort((a,b)=>a-b)

        for (let i = 0; i < n - 2; i++){
            let left = i +1
            let right = n -1
            while(left<right){
                let sum = A[i] + A[left] + A[right]
                if (sum === X) {
                    elements = [...elements, A[i], A[left], A[right]]
                    left++;
                    right--;
                }else if(sum < X){
                    left ++
                }else{
                    right --
                }
            }
        }



        return elements
    }
}


const s = new Solution()

console.log(s.find3Numbers([1, 4, 45, 6, 10, 8],6,13))
console.log(s.find3Numbers([1, 2, 4, 3, 6],5,10))
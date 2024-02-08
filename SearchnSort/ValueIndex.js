class Solution{
    valueEqualToIndex(arr){
        let equal =[]
        for(let i = 0; i<arr.length; i++){
            if(arr[i]===(i+1)){
                equal.push(arr[i])
            }
        }
        return equal
    }
}

const sol = new Solution()
console.log(sol.valueEqualToIndex([15, 2, 3, 45, 12, 7]))

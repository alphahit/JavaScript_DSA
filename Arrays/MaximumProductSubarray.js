class Solution {
    maxProduct(arr,n){ //O(n)
        let start = 0
        let product = 1
        let maxProd = Math.abs(arr[0])
        for(let i = start; i < arr.length; i++){
            product*=arr[i]
            console.log("product ===>",product)
            console.log("maxProd ===>",maxProd)
            if( Math.abs(product) > maxProd){
                maxProd = Math.abs(product)
            }
            if( Math.abs(product) === 0){
                product = 1
            }
        }
        return maxProd
    }
}

const prod = new Solution()
console.log("<======>",prod.maxProduct([6, 0, -10, 1, 2,4,0,15,-6]))
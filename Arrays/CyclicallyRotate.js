class Solution{
    rotate(arr,n){
        let element = arr.pop()
        arr.unshift(element)
        return arr
    }
}



let TestSolution = new Solution()
console.log(TestSolution.rotate([1, 2, 3],3))
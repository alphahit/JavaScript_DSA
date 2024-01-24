// Given an array with n elements , calculate the minimum suum of k consecutive elements

function minsumk(arr,k){
    if (arr.length < k) return null;
    let sum = 0
    let minSum = 0
    for(let i = 0; i<k; i++){
        sum += arr[i]
    }
    minSum = sum
    for(let i = k; i<arr.length; i++){
        sum += arr[i] - arr[i-k]
        if(sum<minSum) minSum = sum
    }
    return minSum
}

console.log(minsumk([-2,1,-3,4,-1,2,1,-5,4],3))
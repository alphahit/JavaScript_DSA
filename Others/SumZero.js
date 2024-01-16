 //Checking Sum Zero Problem 
 //Find First Pair Where Sum is Zero 

 const num = [7,0,2,1,-5,-4,-3,-2,4,6,-48,8]
 let sortedNum = num.sort((a,b) =>a-b)
 console.log("sortedNum=====>", sortedNum)
 
  

for(let i = 0; i < sortedNum.length; i++){ 
    for(let j = 1; j < sortedNum.length; j++){
        if(sortedNum[i] + sortedNum[j] === 0){
            console.log("Sum Zero Pair  ========>",[sortedNum[i] , sortedNum[j]])
        }
    }
} //O(n^2) for Sorted Array


const sumZeroOn = (arr) =>{ 
    console.log("Sum Zero Pair O(n)========>")
    let left = 0
    let right = sortedNum.length -1
    let sum;
    while(left<right){
        sum = sortedNum[left] + sortedNum[right]
        if(sum === 0){
            return [sortedNum[left] , sortedNum[right]]
        }else if(sum>0){
        console.log('Right --', right)
        right--
        }else{
        console.log('Left ++ ', left)
        left++ 
        }
    }
    
}
 
 sumZeroOn(sortedNum) //O(n) Linear Time Complexity

// for(let i = 0; i < sortedNum.length; i++){
//     console.log("Sum Zero Pair O(n)========>")
//     let left = 0
//     let right = sortedNum.length -1
//     if(sortedNum[left] + sortedNum[right] == 0){
//         console.log('Sum Zero Pair O(n) ========>',[sortedNum[left] , sortedsortedNum[right]])
//     }else if(sortedNum[left] + sortedNum[right] >0){
//         console.log('Right --')
//         right-=1
//     }else if(sortedNum[left] + sortedNum[right] <0){
//         console.log('Left ++ ')
//         left+=1
//     }
// }







   
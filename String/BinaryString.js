let str = "0100110101" 
let str1 = "0111100010" 
let str2 = "0000000000" 
let str3 = "01111100011010" 
let str4 = "001110010" 

function checkConsecutivePairs(str) {
    let arr = str.split("");
    let maxSubArray=0;
    let count=0;
    let flag=arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === flag ){
            count++
        }else{
            --count;
            if(count<=0){
                maxSubArray++;
                count = 0;
                flag=arr[i+1];
            }else if(count>0  && arr[i] !==arr[i+1]){
                maxSubArray++;
                count = 0;
                flag=arr[i+1];
            }
           
        }
    }
    // let count0 = 0;
    // let count1 = 0;
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] === '0'){
    //         count0++
    //     }else{
    //         count1++
    //     }
    //     if(count0 === count1){
    //         maxSubArray++
    //     }
    // }
    // if (count0 != count1) {
    //     return -1;
    // }
    return maxSubArray ? maxSubArray : -1
    // console.log(maxSubArray ? maxSubArray : -1)
}
console.log(checkConsecutivePairs(str))
console.log(checkConsecutivePairs(str1))
console.log(checkConsecutivePairs(str2))
console.log(checkConsecutivePairs(str3))
console.log(checkConsecutivePairs(str4))




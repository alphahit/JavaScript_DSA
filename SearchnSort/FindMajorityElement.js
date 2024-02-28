let arr = [1,2,3]
let arr2 = [3,1,3,3,2]
//Using Objects in JS and not Maps
function  findMaxFrequency(arr) {
    let m = {}
    for(let i=0;i<arr.length;i++) {
       m[arr[i]] =  m.hasOwnProperty(arr[i]) ? m[arr[i]] + 1 : 1
    }
    let max = 1
    let maxNumber = -1
    for(const [key,value] of Object.entries(m) ){
        if( value > max){
            max  = value
            maxNumber = key
        }
    }
    return maxNumber
    
}
function  findMajority(arr) {
    let m = {}
    for(let i=0;i<arr.length;i++) {
       m[arr[i]] =  m.hasOwnProperty(arr[i]) ? m[arr[i]] + 1 : 1
    }
    let max = 1
    let maxNumber = -1
    for(const [key,value] of Object.entries(m) ){
        if( value > arr.length/2){
            max  = value
            maxNumber = key
        }
    }
    return maxNumber
    
}
console.log(findMajority(arr))
console.log(findMajority(arr2))
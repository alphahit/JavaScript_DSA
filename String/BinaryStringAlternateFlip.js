let s = "001"
let s1 = "0001010111"
let s2 = "100"
let s3 = '0101'
let s4 = '000001111111100000000000'
function c(str){
    let arr = str.split("")
    let count = 0
    let i = 1
    while(i <arr.length ){
        if(arr[i] === arr[i - 1]){
            console.log(arr[i])
            console.log(arr[i + 1])
            console.log('<===>')
            count++
            i = i + 2
        }
        else{
            i = i + 1
        }
        
    }
    return count
}

// console.log(c(s))
//console.log(c(s1))
//console.log(c(s2))
//console.log(c(s3))
console.log(c(s4))


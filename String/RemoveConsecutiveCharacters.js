let str = 'aabb'
let str1 = 'aaabb'
let str2 = 'aabaa'

//Iterative
function removeConsecutive(str){
    let i = 0
    while(i < str.length-1){
        if(str[i] === str[i+1]){
           str = str.substring(0, i) + str.substring(i + 1)
           i=0
        }else{
            i++
        }
    }
    return str;
}

//Recurssive
function removeConsecutiveRecursive(str,i = 0){
    if(i === str.length -1){
        return str
    }
    if(str[i] === str[i+1]){
        return removeConsecutiveRecursive(str.substring(0, i) + str.substring(i + 1), 0)
    }
    return removeConsecutiveRecursive(str, i + 1);
}


console.log(removeConsecutive(str))
console.log(removeConsecutive(str1))
console.log(removeConsecutive(str2))


console.log(removeConsecutiveRecursive(str))
console.log(removeConsecutiveRecursive(str1))
console.log(removeConsecutiveRecursive(str2))


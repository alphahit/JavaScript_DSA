let s1 = "ABCD"
let s2 = "CDAB"
let s3 = 'ACBD'


function strinRotateEquals(a, b) {
    if(a.length != b.length) return false
    let arrA = a.split("")
    let arrB = b.split("")
    let i, start = -1;
    for(i = 0; i<arrA.length; i++) {
        if(arrB[0] == arrA[i]){
            start = i;
            break
        }
        
    }
    if (start === -1) return false; 
    let j = 0
    let count = 0
    while(arrB[j] === arrA[i] || count === a.length-1){
        // console.log("i ==>",i)
        // console.log("arrB[j] ==>",arrB[j])
        // console.log("arrA[i] ==>",arrA[i])
        if(i===a.length-1) {
           // console.log("Equal")
            i = 0
            j++
            count ++
        }else{
            j++
            i++
            count ++
        }
      
        
    }
    //console.log(count)
    if(count === a.length) return true
    return false
}
console.log(strinRotateEquals(s1,s2))
console.log(strinRotateEquals(s1,s3))


function stringRotateEqualsMethodTwo(a, b) {
    if (a.length != b.length) return false;

    let arrA = a.split("");
    let arrB = b.split("");

    let i, start = -1;
    for (i = 0; i < arrA.length; i++) {
        if (arrB[0] === arrA[i]) {
            start = i;
            break;
        }
    }

    if (start === -1) return false; 

    for (i = 0; i < arrA.length; i++) {
        if (arrB[i] !== arrA[(start + i) % arrA.length]) {
            return false;
        }
    }

    return true;
}
console.log(stringRotateEqualsMethodTwo(s1,s2))
console.log(stringRotateEqualsMethodTwo(s1,s3))
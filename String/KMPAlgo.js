//KMP Algo
//Calculate the indices of the occurrences of strings s in it

let string  = "abcabcd"
let substring = 'abcd'

const bruteForceMatch = (string, substring) => {//O(n*m)
    if(substring === "") return 0
    for(let i=0; i<=string.length - substring.length; i++) {
        let j = 0
        for(;j <substring.length;j++){
            if(substring[j]!==  string[i+j]) break
        }
        if(j=== substring.length) return i
    }
    return -1
}

console.log(bruteForceMatch(string, substring))

function buildPrefixTable(s){
    let table = [0]
    let i = 1
    let j = 0
    while(i<s.length){
        if(s[i]===s[j]){
            
            j++
            table[i] = j 
            i++
        }else if(j>0){ //do not match
            j = table[j-1]
        }else{ //do not match j === 0
            table[i] = 0
            i++
        }
    }
    return table
}

console.log(buildPrefixTable(substring))

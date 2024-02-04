let a = 'baaaabde'
let b = 'aab'
let c = 'ace'
let d = 'aba'

function calculateHash(str){
    
    let sum = 0
    for(let i = 0; i<str.length; i++){
      sum +=  str.charCodeAt(i) * Math.pow(10,str.length-1-i)
     
    }
    return sum
}


function patternCheck(a,b){
for(let i = 0; i<a.length; i++){
    if(a[i]!==b[i]){
       
        return false
    }
   
}
return true
}
function rabinKarp(str,sbstr){
    let sbstrHash = calculateHash(sbstr);
    let i = 0
    while( i<=  str.length- sbstr.length ){
        let currentSlice = str.slice(i, i + sbstr.length);

        if(sbstrHash === calculateHash(currentSlice)){
           if(patternCheck(currentSlice, sbstr)) return true
        }
        i++
    }
    return false
}


console.log(rabinKarp(a,b))
console.log(rabinKarp(a,c))
console.log(rabinKarp(a,d))
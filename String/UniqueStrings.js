//Find the number of unique strings

let strings = ['aa', 'zz', 'll', 'b', 'bb', 'cc', 'dd', 'ee', 'aa']
function countDistinctStrings(strings){
    let distinct = 0;
    strings.sort()
    console.log("strings===>",strings)
    for(let i = 0 ; i<strings.length; i++){
        if(i==0 || strings[i] !== strings[i-1]){
            distinct++
        }
    }
    return distinct;
}

function countDistinctStringsHash(strings){
    let m = new Map()
    for(let i = 0 ; i<strings.length; i++){
       m.set(strings[i],  m.get(strings[i] ?? 0) + 1)
    }
    return m.size;
}


console.log(countDistinctStrings(strings));
console.log(countDistinctStringsHash(strings));
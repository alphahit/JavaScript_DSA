const removeOccur = (string, char) => {
    let fp = 0
    let sp = 0
    // strings in JavaScript are immutable
    let str = string.split('')
    while(sp < str.length){
        if(str[fp] !== char && str[sp] !== char){
            fp++
            sp++
            continue
        }
        if(str[sp] === char){
            sp++
            continue
        }
        if(str[fp] === char && str[sp] !== char){
            let temp = str[fp]
            str[fp] = str[sp]
            str[sp] = temp
            sp++
            fp++
            continue
        }
    }


    return str.join('').slice(0,fp)
}

console.log(removeOccur("geeksforgeeks", 'e'))
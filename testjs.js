console.log("Install nodemon");
console.log("nodemon filename.js");

console.log("Install quokka Extension");
console.log("Ctrl + Shift + p for command Palllete");
console.log("Quooka > new JavaScript File");

const longestCommonPrefix = (strs) => {
    if(strs.length ==0){
        return ""
    } 
    for(let i=0; i<strs[0].length; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i< haystack.length; i++){

        let j = 0 
        if(haystack[i] === needle[j]){
            while(j<needle.length){

                if( haystack[i+j] === needle[j] ){
                    j++
                } else{
                    break;
                }
               
            }
        }
         if(j === needle.length){
            return i
         }
    }
    return -1
};

let haystack = "sadbutsad", needle = "sad";


// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//     let fp = 0
//     let sp = 0
//     let matchPoint = -1
//     while (fp < haystack.length) {
//         while (haystack[fp] === needle[sp] && sp < needle.length) {
//             fp++
//             sp++
//         }
//         if (sp === needle.length) {
//             matchPoint = fp - sp
//             return matchPoint
//         } else {
//             fp = fp - sp + 1
//             sp = 0
         
//         }
     
//     }
//     return matchPoint
// };
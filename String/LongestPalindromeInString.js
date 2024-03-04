function reverseString(string){
    let strArray = string.split("")
    let start = 0;
    let end = strArray.length - 1;
    let temp = '';

    while(start < end){
        temp = strArray[end];
        strArray[end] = strArray[start];
        strArray[start] = temp;
        start++;
        end--;

    }
    return strArray.join('')
}

let str = "hello Alpha"
let str1 = "oallao"
let ss = "aaaabbaa"
function isStringPalindrome(string){
    return string === reverseString(string)
}



function findLargestPalindrome(string){
    let count = 0
    let maxCount = 0
    let i = 0; 
    let j = 0;
    while(i < string.length){
        j = i;
        while(j<=string.length){
            let currentSubstring = string.slice(i, j);

            if(isStringPalindrome(currentSubstring)){
                let currentLength = currentSubstring.length;
                if (currentLength > maxCount) {
                    maxCount = currentLength;
                }
            }
            j++
        }
        i++
        
        
    }
    return maxCount
    
}
console.log(findLargestPalindrome(str));
console.log(findLargestPalindrome(str1));
console.log(findLargestPalindrome(ss));
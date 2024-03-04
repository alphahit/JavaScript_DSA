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
//console.log(reverseString("hello Alpha"));
let str = "hello Alpha"
let str1 = "oallao"

function isStringPalindrome(string){
    return string === reverseString(string)
}

console.log(isStringPalindrome(str))
console.log(isStringPalindrome(str1))
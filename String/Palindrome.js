function reverseString(string){
    // Convert the string to an array because string is immutable in js
    let strArray = string.split('');
    let start = 0;
    let end = strArray.length - 1;
    let temp = '';

    // Use a while loop to swap characters
    while (start < end){
        temp = strArray[end];
        strArray[end] = strArray[start];
        strArray[start] = temp;
        start++;
        end--;
    }

    // Convert the array back to a string and return
    return strArray.join('');
}

console.log(reverseString("hello Alpha"));

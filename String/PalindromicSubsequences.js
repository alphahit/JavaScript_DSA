function reverseString(string) {
  let strArray = string.split("");
  let start = 0;
  let end = strArray.length - 1;
  let temp = "";
  while (start < end) {
    temp = strArray[end];
    strArray[end] = strArray[start];
    strArray[start] = temp;
    start++;
    end--;
  }
  return strArray.join("");
}

function isStringPalindrome(string) {
  return string === reverseString(string);
}
let element = [];
function stringSubsequence(input, output) {
  if (input.length === 0) {
    isStringPalindrome(output) && element.push(output);
    return;
  }
  stringSubsequence(input.substring(1), output);
  stringSubsequence(input.substring(1), output + input[0]);
}

const inputString = "abc";
const inputString1 = "abcd";
const inputString2 = "aab";
// stringSubsequence(inputString, "");
// stringSubsequence(inputString1, "");
stringSubsequence(inputString2, "");
console.log(element.length - 1);

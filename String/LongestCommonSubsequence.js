let element1 = [];
let element2 = [];

let str1 = "ABCDGH";
let str2 = "AEDFHR";
function stringSubsequence(input, output, element) {
  if (input.length === 0) {
    element.push(output);
    return;
  }
  stringSubsequence(input.substring(1), output, element);
  stringSubsequence(input.substring(1), output + input[0], element);
}

function compareArray(str1, str2) {
  let arr1 = [];
  let arr2 = [];
  stringSubsequence(str1, "", arr1);
  stringSubsequence(str2, "", arr2);
  console.log(arr1);
  console.log(arr2);
}
compareArray(str1, str2);

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
  let m = new Map();
  for (let i = 0; i < arr1.length; i++) {
    m.set(arr1[i], arr1[i].length);
  }
  let maxLength = -Infinity;
  for (let i = 0; i < arr2.length; i++) {
    if (m.has(arr2[i])) {
      if (m.get(arr2[i]) > maxLength) {
        maxLength = m.get(arr2[i]);
      }
    }
  }
  return maxLength;
}
console.log(compareArray(str1, str2));

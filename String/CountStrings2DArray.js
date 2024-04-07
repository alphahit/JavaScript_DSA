let twoDArr = [
  ['D', 'D', 'D', 'G', 'D', 'D'],
  ['B', 'B', 'D', 'E', 'B', 'S'],
  ['B', 'S', 'K', 'E', 'B', 'K'],
  ['D', 'D', 'D', 'D', 'D', 'E'],
  ['D', 'D', 'D', 'D', 'D', 'E'],
  ['D', 'D', 'D', 'D', 'D', 'G'],
];
let str = 'GEEKS';
//TC : O(mns)
function findString(str, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === str[0]) {
        if (j + str.length <= arr[i].length) { 
            let matches = true;
            for (let k = 0; k < str.length; k++) {
              if (arr[i][j + k] !== str[k]) {
                matches = false;
                break;
              }
            }
            if (matches) count++;
          }
          if (j - str.length + 1 >= 0) {
            let matches = true;
            for (let k = 0; k < str.length; k++) {
              if (arr[i][j - k] !== str[k]) {
                matches = false;
                break;
              }
            }
            if (matches) count++;
          }
          if (i + str.length <= arr.length) {
            let matches = true;
            for (let k = 0; k < str.length; k++) {
              if (arr[i + k][j] !== str[k]) {
                matches = false;
                break;
              }
            }
            if (matches) count++;
          }
          if (i - str.length + 1 >= 0) { 
            let matches = true;
            for (let k = 0; k < str.length; k++) {
              if (arr[i - k][j] !== str[k]) {
                matches = false;
                break;
              }
            }
            if (matches) count++;
          }
      }
      
    }
  }
  return count;
}
console.log(findString(str, twoDArr));


let twoDArr1 = [
    ['B','B','M','B','B','B'],
    ['C','B','A','B','B','B'],
    ['I','B','G','B','B','B'],
    ['G','B','I','B','B','B'],
    ['A','B','C','B','B','B'],
    ['M','C','I','G','A','M'],
  ];
  let str1 = 'MAGIC';
  console.log(findString(str1, twoDArr1));
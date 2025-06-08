let strs = ['flower', 'flow', 'flight'];

const prefixGnerator = (str) => {
  let elem = [];
  for (let i = 0; i < str.length; i++) {
    elem.push(str.substring(0, i + 1));
  }
  return elem;
};

let longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let elem = [];
  for (let i = 0; i < strs.length; i++) {
    elem.push(prefixGnerator(strs[i]));
  }
  let smallest = Infinity;
  for (let i = 0; i < strs.length; i++) {
    if (elem[i].length < smallest) {
      smallest = elem[i].length;
    }
  }

  let j = 0;
  let commonPrefix = [];

  while (j < smallest) {
    let i = 0;
    let flag = true;
    while (i < elem.length - 1) {
      if (elem[i][j] !== elem[i + 1][j]) {
        flag = false;
      }
      i++;
    }
    if (flag) {
      commonPrefix.push(elem[i - 1][j]);
    }

    j++;
  }
  return commonPrefix[commonPrefix.length - 1];
};

const longestCommonPrefixOptimized = function (strs) {
  if (strs.length === 0) return '';
  let shortest = strs[0];
  for (let str of strs) {
    if (str.length < shortest.length) {
      shortest = str;
    }
  }
  for (let i = 0; i < shortest.length; i++) {
    for (let str of strs) {
      if (str[i] !== shortest[i]) {
        return shortest.substring(0, i);
      }
    }
  }
  return shortest;
};

//TC : O(m * n^2)
console.log(longestCommonPrefix(strs));
//TC : O(S), where S is the sum of all characters in all strings
console.log(longestCommonPrefixOptimized(strs));



/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//     let minLength = 201


//     if(strs[0].length === 0){
//         return ""
//     }
//        if(strs.length === 1){
//         return strs[0]
//     }
//     for (let i = 0; i < strs.length; i++) {

//         let lengthStr = strs[i]

//         if (lengthStr < minLength) {
//             minLength = lengthStr
//         }
//     }
//     let j = 0
//     let prefix = ''

//     while (j < minLength) {
//         for (let i = 0; i < strs.length  - 1; i++) {

//             if (strs[i][j] !== strs[i + 1][j]) {
          
//                  return   strs[0].slice(0, j)
//             }

//         }
//         j++

      
         
//     }
    
//     return   strs[0].slice(0, j)
// };
//Absurd Exponential (Need To Find Optimal)

function longestRepeatingSubseqRec(str, i, j) {
  if (i >= str.length || j >= str.length) return 0;

  if (str[i] === str[j] && i !== j) {
    return 1 + longestRepeatingSubseqRec(str, i + 1, j + 1);
  } else {
    return Math.max(longestRepeatingSubseqRec(str, i + 1, j), longestRepeatingSubseqRec(str, i, j + 1));
  }
}

function longestRepeatingSubsequence(str) {
  return longestRepeatingSubseqRec(str, 0, 0);
}

let str = 'axxzxy';
console.log(longestRepeatingSubsequence(str));

// LRS("axxzxy", 0, 1)
// ├─ LRS("axxzxy", 1, 2)
// │  ├─ LRS("axxzxy", 2, 3)    // "x" compared with "x", match found
// │  │  ├─ LRS("axxzxy", 3, 4) // Proceed with matching indices
// │  │  │  ├─ LRS("axxzxy", 4, 5)
// │  │  │  │  ├─ LRS("axxzxy", 5, 6) // "x" compared with "y"
// │  │  │  │  │  ├─ LRS("axxzxy", 6, 7) // Base case, returns 0
// │  │  │  │  │  └─ LRS("axxzxy", 6, 7) // Base case, returns 0
// │  │  │  │  └─ LRS("axxzxy", 5, 6) // "y" compared with "y", match found
// │  │  │  │     ├─ LRS("axxzxy", 6, 7) // Base case, returns 0
// │  │  │  │     └─ LRS("axxzxy", 6, 7) // Base case, returns 0
// │  │  │  └─ LRS("axxzxy", 4, 5) // "z" compared with "y"
// │  │  │     ├─ LRS("axxzxy", 5, 6) // Base case, returns 0
// │  │  │     └─ LRS("axxzxy", 5, 6) // Base case, returns 0
// │  │  └─ LRS("axxzxy", 3, 4) // "x" compared with "z"
// │  │     └─ ... // Continuation of recursion
// │  └─ LRS("axxzxy", 2, 3) // "x" compared with "z"
// │     └─ ... // Continuation of recursion
// └─ LRS("axxzxy", 1, 2) // "a" compared with "x"
//    └─ ... // Continuation of recursion

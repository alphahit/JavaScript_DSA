// You are given two arrays A and B of N elements, each element is either 0 or 1.
// You can make operations of 2 kinds:

// Pick an index i and change A[i] to (1 - A[i]).
// Rearrange the array A in any way you want.
// Find the minimum number of operations required to make A equal to B.

// A = [0 1 0 1 0 1] = N = 6 fixed
// B = [1 0 1 1 1 0]

let a = [0, 1, 0, 1, 0, 1]
let b = [1, 0, 1, 1, 1, 0]

for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
        b[i] = 1 - b[i];
    }
}


console.log(a)
console.log(b)

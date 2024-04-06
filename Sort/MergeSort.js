function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
const array = [8, 15, 23, 2, 3, 5, 44, 56, 1];
console.log(mergeSort(array));

// mergeSort([8, 15, 23, 2, 3, 5, 44, 56, 1])
// ├─ mergeSort([8, 15, 23, 2])
// │  ├─ mergeSort([8, 15])
// │  │  ├─ mergeSort([8])
// │  │  │  └─ returns [8]
// │  │  └─ mergeSort([15])
// │  │     └─ returns [15]
// │  │  └─ merge([8], [15])             // Merges into [8, 15]
// │  └─ mergeSort([23, 2])
// │     ├─ mergeSort([23])
// │     │  └─ returns [23]
// │     └─ mergeSort([2])
// │        └─ returns [2]
// │     └─ merge([23], [2])             // Merges into [2, 23]
// │  └─ merge([8, 15], [2, 23])         // Merges into [2, 8, 15, 23]
// ├─ mergeSort([3, 5, 44, 56, 1])
// │  ├─ mergeSort([3, 5])
// │  │  ├─ mergeSort([3])
// │  │  │  └─ returns [3]
// │  │  └─ mergeSort([5])
// │  │     └─ returns [5]
// │  │  └─ merge([3], [5])              // Merges into [3, 5]
// │  └─ mergeSort([44, 56, 1])
// │     ├─ mergeSort([44])
// │     │  └─ returns [44]
// │     ├─ mergeSort([56, 1])
// │     │  ├─ mergeSort([56])
// │     │  │  └─ returns [56]
// │     │  └─ mergeSort([1])
// │     │     └─ returns [1]
// │     │  └─ merge([56], [1])          // Merges into [1, 56]
// │     └─ merge([44], [1, 56])         // Merges into [1, 44, 56]
// │  └─ merge([3, 5], [1, 44, 56])      // Merges into [1, 3, 5, 44, 56]
// └─ merge([2, 8, 15, 23], [1, 3, 5, 44, 56])   // Final merge into [1, 2, 3, 5, 8, 15, 23, 44, 56]

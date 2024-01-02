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
  let sortedArray = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else{
      sortedArray.push(right.shift());
    }
  }
  return [ ...sortedArray, ...left, ...right ];
}

const array = [8,15,23,2,3,5,44,56,1]
console.log(mergeSort(array))
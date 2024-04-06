function inversionBrute(arr) {
  let element = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        element.push([arr[i], arr[j]]);
      }
    }
  }
  return element;
}

//console.log(inversionBrute(arr));

function mergeSortAndCount(arr) {
  if (arr.length < 2) {
    return [arr, 0];
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  const [sortedLeft, leftInv] = mergeSortAndCount(left);
  const [sortedRight, rightInv] = mergeSortAndCount(right);
  const [mergedArr, splitInv] = mergeAndCount(sortedLeft, sortedRight);
  return [mergedArr, leftInv + rightInv + splitInv];
}
function mergeAndCount(left, right) {
  let i = 0,
    j = 0,
    inversions = 0;
  const sortedArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr.push(left[i++]);
    } else {
      inversions += left.length - i;
      sortedArr.push(right[j++]);
    }
  }
  return [sortedArr.concat(left.slice(i)).concat(right.slice(j)), inversions];
}
const arr1 = [2, 4, 1, 3, 5];
const [sorted1, inversions1] = mergeSortAndCount(arr1);
console.log(`Inversions: ${inversions1}`);

const arr2 = [2, 3, 4, 5, 6];
const [sorted2, inversions2] = mergeSortAndCount(arr2);
console.log(`Inversions: ${inversions2}`);

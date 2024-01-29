function pairDifference(arr,d) {
  let sortedArr = quickSort(arr);
  let i = 0;
  let j = 1;

  
  while (i < sortedArr.length && j < sortedArr.length) {
    let diff = sortedArr[j] - sortedArr[i];
    if (diff === d && i !== j) {
      return [sortedArr[i], sortedArr[j]]; 
    } else if (diff < d) {
      j++;
    } else {
      i++; 
    }
  }
  return false;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(pairDifference([5, 20, 3, 2, 5, 80],78));
console.log(pairDifference([90, 70, 20, 80, 50],45));
console.log(pairDifference([5, 20, 3, 2, 5, 79,80],78));

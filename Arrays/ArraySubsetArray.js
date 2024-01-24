function checkSubset(arr1, arr2) {
  const m = new Map();
  for (let i = 0; i < arr1.length; i++) {
    m.set(arr1[i], (m.get(arr1[i]) || 0) + 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!m.has(arr2[i]) || m.get(arr2[i]) < 1) {
      return false;
    }

    m.set(arr2[i], m.get(arr2[i]) - 1);
  }
  return true;
}

console.log(checkSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));
console.log(checkSubset([10, 5, 2, 23, 19, 3], [19, 5, 3, 3]));

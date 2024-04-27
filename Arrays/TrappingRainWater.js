function totalTrapped(arr) {
  const n = arr.length;
  let leftMax = new Array(n);
  let rightMax = new Array(n);
  let waterTrapped = 0;

  leftMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
  }

  for (let i = 0; i < n; i++) {
    waterTrapped += Math.min(leftMax[i], rightMax[i]) - arr[i];
  }

  return waterTrapped;
}

console.log(totalTrapped([7, 4, 0, 9]));
console.log(totalTrapped([3, 0, 0, 2, 0, 4]));

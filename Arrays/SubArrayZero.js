function subArrayZeroKadane(nums) {
  //TC: O(n)
  let sum = 0;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    endIndex++;
    sum += nums[i];
    if (sum === 0) {
      break;
    }
    if (sum < 0) {
      sum = nums[i];
      startIndex = i;
    }
  }
  return {
    zeroSubArray: nums.slice(startIndex, endIndex),
  };
}
console.log(subArrayZeroKadane([2, 1, -4, 4, -1, 2, 1, -5, 4]));

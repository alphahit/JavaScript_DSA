/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let prev = 0;
  let next = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      prev = i - 1;
    }

    if (
      (nums[prev] < nums[i] && nums[i] > nums[i + 1]) ||
      (nums[prev] > nums[i] && nums[i] < nums[i + 1])
    ) {
      result++;
    }
  }

  return result;
};

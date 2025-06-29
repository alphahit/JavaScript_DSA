/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let m = new Map();

  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], true);
  }

  let maxL = 0;
  for (const k of m.keys()) {
    let init = k;
    let num = 0;
    if (!m.has(k - 1)) {
      while (m.has(init + 1)) {
        num += 1;
        init += 1;
      }
      if (num > maxL) {
        maxL = num;
      }
    }
  }
  return maxL + 1;
};


//https://leetcode.com/problems/longest-consecutive-sequence/
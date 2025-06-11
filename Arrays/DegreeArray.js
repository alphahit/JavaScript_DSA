/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], (m.get(nums[i]) ?? 0) + 1);
  }

  let degree = -9999;

  for (const k of m.keys()) {
    if (m.get(k) > degree) {
      degree = m.get(k);
    }
  }

  if (degree === 1) {
    return 1;
  }
  let n = new Map();
  for (const k of m.keys()) {
    if (m.get(k) === degree) {
      n.set(k, [-1, 0]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (n.has(nums[i])) {
      let target = n.get(nums[i]);
      if (target[0] === -1) {
        n.set(nums[i], [i, 0]);
      } else {
        n.set(nums[i], [target[0], i]);
      }
    }
  }

  let minSubarray = 99999;

  for (const k of n.keys()) {
    let target = n.get(k);
    let minVal = target[1] - target[0] + 1;
    if (minVal < minSubarray) {
      minSubarray = minVal;
    }
  }

  return minSubarray;
};

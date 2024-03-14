function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    end--;
    start++;
  }
  return arr;
}

//TC = O(n), SC = O(n)
var twoSum = function (nums, target) {
  let m = new Map();
  let element = [];
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) {
      element.push(i);
      element.push(m.get(target - nums[i]));
    } else {
      m.set(nums[i], i);
    }
  }
  return reverse(element);
};

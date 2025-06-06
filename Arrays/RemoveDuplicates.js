var removeDuplicates = function (nums) {
  let i = 0;

  let j = 0;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i = i + 1;
      nums[i] = nums[j];
      j++;
    }
  }

  return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

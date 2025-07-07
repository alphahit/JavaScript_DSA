const removeElements = (nums, val) => {
  let n = nums.length;
  let fp = 0;
  let sp = 0;
  while (sp < nums.length) {
    if (nums[sp] !== val) {
      if (nums[fp] === val) {
        let temp = nums[fp];
        nums[fp] = nums[sp];
        nums[sp] = temp;
      }
      fp = sp;
      sp++;
    }

    if (nums[sp] === val) {
      if (nums[fp] !== val) {
        fp = sp;
        sp++;
      } else {
        sp++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    }
  }
  return nums;
};

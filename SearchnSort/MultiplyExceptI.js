
function productExceptSelf(nums){
const n = nums.length;
const left = new Array(n).fill(1);
const right = new Array(n).fill(1);
const prod = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
left[i] = nums[i - 1] * left[i - 1];
}

for (let j = n - 2; j >= 0; j--) {
right[j] = nums[j + 1] * right[j + 1];
}


for (let i = 0; i < n; i++) {
prod[i] = left[i] * right[i];
}

return prod;
}

console.log(productExceptSelf([10, 3, 5, 6, 2]))
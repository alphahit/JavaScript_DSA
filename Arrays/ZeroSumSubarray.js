class Solution {
    findSubarray(arr, n) {
        let count = 0;
        let sum = 0;
        let hashMap = new Map();

        for (let i = 0; i < n; i++) {
            sum += arr[i];

            if (sum === 0) {
                count++;
            }

            if (hashMap.has(sum)) {
                count += hashMap.get(sum);
            }

            hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
        }

        return count;
    }
}
const solution = new Solution();
console.log(solution.findSubarray([6,-1,-3,4,-2,2,4,6,-12,-7, 2,-2],12))
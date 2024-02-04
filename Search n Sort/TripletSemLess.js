class Solution {

    countTriplets(arr,N,sum){
      arr.sort((a, b) => a - b);
    let count = 0;

   
    for (let i = 0; i < N - 2; i++) {
       
        let left = i + 1, right = N - 1;

        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];

            
            if (currentSum < sum) {
                
                count += (right - left);

                
                left++;
            } else {
              
                right--;
            }
        }
    }

    return count;
    }
}
const solution = new Solution();
const arr1 = [5, 1, 3, 4, 7];
const N1 = arr1.length;
const sum1 = 12;
console.log(solution.countTriplets(arr1, N1, sum1)); 

const arr2 = [-2, 0, 1, 3];
const N2 = arr2.length;
const sum2 = 2;
console.log(solution.countTriplets(arr2, N2, sum2));
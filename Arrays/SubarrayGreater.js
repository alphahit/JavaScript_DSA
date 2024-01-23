//Trial

// function smallestsubarraysum(arr, k) {
//   let startIndex = 0;
//   let endIndex = 0;
//   let minCount = 99999999999;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > k) {
//         console.log("check", arr[i], arr[j]);
//         while (sum > k && i < j) {
//           console.log("sum minus", sum, i);
//           sum -= arr[i];
//           i++;
//         }
//         if (minCount > j - i + 1) {
//           minCount = j - i;
//           startIndex = i === 0 ? 0 : i-1;
//           endIndex = j;
//           console.log({ startIndex, endIndex });
//         }
//       }
//     }
//   }
//   return { arr: arr.slice(startIndex, endIndex + 1), minCount };
// }

// console.log(smallestsubarraysum([2, 2, 45,7, 6, 52, 19], 51));


function smallestSubarraySum(arr, k) {
    let minCount = Infinity;
    let sum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
  
      while (sum > k && start <= end) {
        minCount = Math.min(minCount, end - start + 1);
  
        
        sum -= arr[start];
        start++;
      }
    }
  
    if (minCount === Infinity) {
      return { arr: [], minCount: 0 };
    }
  
   
    sum = 0;
    start = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
  
      if (sum > k) {
        while (sum - arr[start] > k) {
          sum -= arr[start];
          start++;
        }
  
        if (end - start + 1 === minCount) {
          return { arr: arr.slice(start, end + 1), minCount };
        }
      }
    }
  
    return { arr: [], minCount: 0 };
  }
  
  console.log(smallestSubarraySum([2, 2, 45, 7, 6, 52, 19], 51));
  
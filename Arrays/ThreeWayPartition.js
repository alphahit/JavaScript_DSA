function threeWayPartition(array, a, b)
    {
         let low = 0, mid = 0, high = array.length - 1;
    
    while (mid <= high) {
        if (array[mid] < a) {
          
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        } else if (array[mid] > b) {
          
            [array[mid], array[high]] = [array[high], array[mid]];
            high--;
        } else {
            mid++;
        }
    }
    return 1
    }

    console.log("Test Case 1");
let A1 = [1, 2, 3, 3, 4];
console.log("Original Array:", A1);
threeWayPartition(A1, 1, 2);
console.log("Modified Array:", A1);

console.log("\nTest Case 2");
let A2 = [1, 4, 3, 6, 2, 1];
console.log("Original Array:", A2);
threeWayPartition(A2, 1, 3);
console.log("Modified Array:", A2);
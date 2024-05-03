//Buckert Sort is not good in cases where data is not uniform.
//It's particularly useful when the input is uniformly distributed over a range.
let arr = [11,9,21,8,17,19,13,1,24,12,21,22]
function bucketSort(array, bucketSize = 5){
    if (array.length === 0) {
        return array;
    }
    let max = Math.max(...array)
    let min = Math.min(...array)

   
   const bucketCount =  Math.floor((max - min)/bucketSize) + 1;

const buckets = new Array(bucketCount);
for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
}
for(let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i]-min)/bucketSize)].push(array[i]);
}
array.length = 0;
for (i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    for (let j = 0; j < buckets[i].length; j++) {
        array.push(buckets[i][j]);
    }
}
return array;
}

let bucketSize = 5
console.log(bucketSort(arr, bucketSize))


//The space complexity is O(n+k)

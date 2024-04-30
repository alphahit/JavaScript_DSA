function countingSort(arr) {
   let max = Math.max(...arr);
   let count = Array(max+1).fill(0);
   arr.forEach(item => count[item]++);
   let output = []
   for(let i = 0; i < count.length; i++) {
    while(count[i] >0) {
        output.push(i);
        count[i]--
    }
   }
   return output
}


let arr = [5, 2, 5, 5, 3, 1, 2, 5, 1, 5, 0, 5, 3, 1, 5, 2, 2, 2];
console.log(countingSort(arr));

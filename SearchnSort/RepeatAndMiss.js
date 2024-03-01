class Solution
{
    
    findTwoElement( arr)
    {
       let m = new Map()
       for(let i = 0; i< arr.length; i++){
           m.set(arr[i], (m.get(arr[i]) ?? 0) + 1)
       }
       let element = [...m.keys()]
    
       let duplicate, missing;
       for (let i = 1; i <= arr.length; i++) {
           let count = m.get(i) || 0;
           if (count === 2) {
               duplicate = i;
           } else if (count === 0) {
               missing = i;
           }
       }

       return [duplicate, missing]
    }
}


const s = new Solution()
console.log(s.findTwoElement([2, 2]))
console.log(s.findTwoElement([1, 3, 3]))

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

function unionArraySize(a,b){
    const combinedArray = a.concat(b);
    const unionSet = new Set(combinedArray)
   
    return {size: unionSet.size, set:unionSet };
}

const result = unionArraySize(array1, array2);
console.log(result)



/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
class Solution {
    findUnion(a, b) {
        let m = new Map()
        for(let i =0; i < a.length; i++){
            m.set(a[i], (m.get(a[i]) ?? 0) + 1)
        }
        
        
        for(let i = 0; i < b.length; i++){
            m.set(b[i], (m.get(b[i]) ?? 0) + 1)
        }
     
        
      return Array.from(m.keys()).length;

    }
}

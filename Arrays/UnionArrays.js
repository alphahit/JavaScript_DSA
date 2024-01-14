const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

function unionArraySize(a,b){
    const combinedArray = a.concat(b);
    const unionSet = new Set(combinedArray)
   
    return {size: unionSet.size, set:unionSet };
}

const result = unionArraySize(array1, array2);
console.log(result)
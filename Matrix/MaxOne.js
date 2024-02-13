let arr = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
];



let arrTest = [
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1],
];
let arrTest2 = [
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1],
];
function maxOne(arr) {
    let n = arr[0].length;
    let i = 0;
    let lowestI = Infinity;
    let lowestj = Infinity;
    while (i < arr.length) {
        let j = 0;

        if (arr[i][j] === 1 && j === 0) {
            
            return i;
        } else if (arr[i][j] === 0) {
            while (j < n) {
                j++;
                if (arr[i][j] === 1) {
                    if (j < lowestj) {
                        lowestj = j;
                        lowestI = i;
                    }

                    break;
                }
            }
            i++;
        } else if (arr[i][j] === 1) {
            if (j > lowestj) return lowestI;
            j--;
            i++;
        }
    }
    return lowestI === Infinity ? -1 : lowestI;
}

console.log(maxOne(arr));
console.log(maxOne(arrTest));
console.log(maxOne(arrTest2));

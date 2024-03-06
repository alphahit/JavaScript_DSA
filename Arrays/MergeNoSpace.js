let arr1 = [10]
let arr2 = [2, 3]

let arr3 = [1, 5, 9, 10, 15, 20]
let arr4 = [2, 3, 8, 13]


function mergeNoSpace(arr1, arr2) {
    let m = arr1.length
    let n = arr2.length
    for(let i = n - 1; i >= 0; i--){
        let last = arr1[m - 1];
        let j;
        for(j=m - 2; j>=0 && arr1[j] > arr2[i]; j--){
            arr1[j+1] = arr1[j];
            
        }
        if (last > arr2[i]){
            arr1[j+1] = arr2[i]
            arr2[i] = last
        }
    }
    return [...arr1, ...arr2]
}

console.log(mergeNoSpace(arr1,arr2))
console.log(mergeNoSpace(arr3,arr4))
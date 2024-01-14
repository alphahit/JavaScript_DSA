const array1 = [1, 2, 5,3];
const array2 = [2, 3, 4];

function quickSort(arr){
    if (arr.length < 2) {
        return arr;
      }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedArray1 = quickSort(array1);
const sortedArray2 = quickSort(array2);

function intersections(arr1, arr2){
    let i = 0;
    let j = 0;
    let intersect = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            intersect.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] > arr2[j]){
            j++;
        } else if(arr1[i] < arr2[j]){
            i++;
        }
    }
    return intersect;
}

console.log(intersections(sortedArray1,sortedArray2))
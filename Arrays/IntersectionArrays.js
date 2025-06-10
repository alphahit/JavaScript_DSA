const array1 = [1, 2, 5, 3];
const array2 = [2, 3, 4];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedArray1 = quickSort(array1);
const sortedArray2 = quickSort(array2);

function intersections(arr1, arr2) {
  let i = 0;
  let j = 0;
  let intersect = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      intersect.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    }
  }
  return intersect;
}

console.log(intersections(sortedArray1, sortedArray2));

var intersection = function (nums1, nums2) {
  let m = new Map();
  let intersection = [];
  for (let i = 0; i < nums1.length; i++) {
    m.set(nums1[i], 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (m.get(nums2[i]) === 1) {
      intersection.push(nums2[i]);
      m.set(nums2[i], 2);
    }
  }

  return intersection;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectWithRepeat = function(nums1, nums2) {


const intersection = [];
    const counts = new Map();

    let smallerArr, largerArr;
    if (nums1.length < nums2.length) {
        smallerArr = nums1;
        largerArr = nums2;
    } else {
        smallerArr = nums2;
        largerArr = nums1;
    }


    for(const num of smallerArr){
        counts.set(num, (counts.get(num) || 0) + 1)
    }

    for(const num of largerArr){
        if(counts.has(num) && counts.get(num) > 0){
            intersection.push(num)
            counts.set(num, counts.get(num) - 1)
        }
    }

  return intersection;
};
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
let twoDMatrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let twoDMatrixOne = [
    [1]
  ];


const binarySearch = (arr, target) => {
    if (arr.length === 0) {
        return false;
    } else if (arr.length === 1) {
        return arr[0] === target;
    }else if(arr[Math.floor(arr.length/2)] === target){
        return true 
    }
    else if(arr[Math.floor(arr.length/2)] > target){
        return binarySearch(arr.slice(0,Math.floor(arr.length/2)),target)
    }else if(arr[Math.floor(arr.length/2)] < target){
        return binarySearch(arr.slice(Math.floor(arr.length/2)+1, arr.length),target)
    }
}

const searchMatrix = function (matrix, target) {
 
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === target) {
        return true;
      }
    else if(matrix[i][0] > target) {
        count = i-1
        break
    }
    count = i
  }
  if (count < 0) {
    return false;
}
 return binarySearch(matrix[count], target)

  
};
console.log(searchMatrix(twoDMatrix, 11))
console.log(searchMatrix(twoDMatrix, 61))
console.log(searchMatrix(twoDMatrix, 1))
console.log(searchMatrix(twoDMatrixOne, 0))

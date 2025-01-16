let message: string = 'Hello TS!';
let numberMsg: number = 6;
console.log(message);
console.log(numberMsg);


//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

var searchRange: (nums: number[], target: number) => number[] = function (nums: number[], target: number): number[] {

  return firstnlastoccurrence(nums, target, 0, nums.length - 1);
};

function firstnlastoccurrence(arr: number[], target: any, start: number, end: number): number[] {
  if (start > end) return [-1, -1];
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    let s = middle;
    let l = middle;
    while (l > start && arr[l - 1] === target) {
      l--;
    }

    while (s < end && arr[s + 1] === target) {
      s++;
    }
    return [l, s];
  }

  if (arr[middle] < target) {
    return firstnlastoccurrence(arr, target, middle + 1, end);
  } else {
    return firstnlastoccurrence(arr, target, start, middle - 1);
  }
}

const arr = [5, 7, 7, 8, 8, 10];
const arr1 = [1, 3, 5, 5, 5, 5, 67, 123, 125];
console.log(searchRange(arr, 8));
console.log(searchRange(arr1, 5));


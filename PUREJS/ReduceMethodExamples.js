//Sum of Elements in Array
const numbers = [1, 2, 3, 4, 5];

function sum(arr) {
  return arr.reduce((acc, item) => {
    return (acc += item);
  }, 0);
}
console.log(sum(numbers));

//Prefix Sum Array
let arr = [3, 1, 5, 2, 4];

function prefixSumArray(arr) {
  let prefArr = arr.reduce(
    (acc, item) => {
      return [...acc, acc[acc.length - 1] + item];
    },
    [0]
  );
  prefArr.shift();
  return prefArr;
}

console.log(prefixSumArray(arr));

//Flatten a nested Array
const nested = [[2, 3], 1, 4, [5, [6, 7]]];

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      if (item.length === 0) {
        return acc;
      } else {
        return acc.concat(flatten(item));
      }
    } else {
      acc.push(item);
      return acc;
    }
  }, []);
}

console.log(flatten(nested));

//Group Eleements by Age
const people = [
  {name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}
]; 
// Output: 
//{25: [{name: 'Alice', age: 25}, {name: 'Charlie', age: 25}], 30: [{name: 'Bob', age: 30}]}
function groupByAge(arr){
  return arr.reduce((acc, item)=>{
    acc[item.age] = acc[item.age] || []; 
    acc[item.age].push(item);
    return acc;
  },{})
}

console.log(groupByAge(people))

//Count Occurrences of Elements
const fruitOccur = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']; 
// Output: {apple: 3, banana: 2, orange: 1}


function countOccurrences(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOccurrences(fruitOccur))
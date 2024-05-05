//for each
//method is used to execute a given function on each element in an array
// it does not return a value
// You cannot use break or continue to exit or skip iterations.

const array = [1, 2, 3];
array.forEach(item => console.log(item)); 


//for in
//loops through the properties of an Object
//Can be used with break, continue, and return to control flow.
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(key, object[key]); // Logs "a 1", "b 2", "c 3"
}

//For Of
//loops through the values of an iterable object
//loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
//Allows break, continue, and return.
const arrayForOF = ['a', 'b', 'c'];
for (const value of arrayForOF) {
    console.log(value); // Logs "a", "b", "c"
}
let language = "JavaScript";

let textforOf = "";
for (let x of language) {
textforOf += x;
}

//map
//Creates a new array with the results of calling a 
//provided function on every element in the calling array.
//Returns a new array containing the transformed elements.
//Used for transformations and computations on data.

const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]


//Return values for the looping methods

// 1. Array.prototype.forEach()
// Return Value: undefined

// 2. for...in
// Return Value: None directly (it's a statement, not a function).

// 3. for...of
// Return Value: None directly (it's a statement, not a function).

// 4. Array.prototype.map()
// Return Value: A new array containing the results of calling a function on every element in the array.
//Objects work well when you don't need order
//When you need fast access, insertion, update and removal(constant time)
//searching: O(n)
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
console.log("Keys: =================================>",Object.keys(instructor)); //O(N): Returns an array
 

console.log("Values: =================================>",Object.values(instructor));//O(N): Returns an array


for (const [key, value] of Object.entries(instructor)) {
  console.log(`${key}: ${value}`);
} //O(N)

console.log(instructor.hasOwnProperty("firstName")); //O(N)

//Accessing Value of Keys in Objects O(1)
console.log("Accessing Value of Keys in Objects ==========>",instructor.firstName);
console.log('******************************************');




console.log('******************************************');
const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: "foo",
    },
    {
      id: 2,
      name: "bar",
    },
  ],
};
//Accessing Value of Keys in Objects
//https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
console.log(data.items[1]);
console.log(data.items[1].name);
console.log(data['items'][1]['name']);
console.log('******************************************');
for (const prop in data) {
    // `prop` contains the name of each property, i.e. `'code'` or `'items'`
    // consequently, `data[prop]` refers to the value of each property, i.e.
    // either `42` or the array
    console.log("prop in data================>",prop);
}
console.log('******************************************');








console.log('******************************************');

//Inserting Values in Objects : O(1)

const testObj = {
  key1: 'value1',
  key2: 'value2'
}

testObj.newKey = "newValue";

console.log("testObj===================>",testObj)


console.log('******************************************');







console.log('******************************************');

//Deleting Values in Objects : O(1)
const testObj2 = {
  key1: 'value1',
  key2: 'value2',
  key3 : 'value3'
}

delete testObj2.key1
const deleted = delete testObj2.key2

console.log("testObj===================>",testObj)
console.log("deleted===================>",deleted)
console.log("testObj2===================>",testObj2.key3)

//Keep in mind that the delete operator returns true if the deletion was successful or false if it was not.


console.log('******************************************');


console.log('******************************************');
// Object.assign() is a built-in JavaScript method that is used for copying the values of one or 
// more source objects to a target object. It allows you to merge objects by combining their properties 
// into a single target object. It's often used for creating a new object with properties from existing
//  objects or updating an object with new values from other objects.

const target = {
  a:1,
  b:2
}
const source1 = {
  b:3,
  c:4
}
const source2 = {
  c:5,
  d:6
}
const result = Object.assign(target, source1, source2)

console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
console.log(result); // { a: 1, b: 3, c: 5, d: 6 } (same as 'target')



// target: The target object to which the properties of the source objects will be copied. 
// This object will be modified and returned.
// ...sources: One or more source objects whose properties you want to copy to the target object. 
// You can specify multiple source objects separated by commas.

console.log('******************************************');
console.log('******************************************');


// To search for a key or value in an object in JavaScript, 
// you can use a for...in loop, the 
// Object.keys(), Object.values(), or Object.entries() methods, or a combination of them along with methods like
//  Array.prototype.includes(), Array.prototype.some(), or Array.prototype.find() 
//  depending on your specific search criteria. 
// Here are some examples:


//1. Searching for a Key in an Object using for...in:

const source = {
  key1 : 'value1',
  key2 : 'value2',
  key3 : 'value3'
}

const searchKey = 'key2'
const searchValue = 'value2' 
let found = false
for (const anyword in source) {
  if(anyword=== searchKey){
    found = true
    break;
  }
}
console.log('found====>',found)

//2. Searching for a key in an Object using Object.keys():

const checkKey = Object.keys(source) //O(n)
let foundKey = checkKey.includes(searchKey)
console.log('foundKey====>',foundKey)

//3.Searching for a Value in an Object using Object.values():

const checkValue = Object.values(source)
let foundValue = checkValue.includes(searchValue)
console.log('foundValue====>',foundValue)

//4. Searching for a Value in an Object using Object.entries() and Array.prototype.some():

const entries = Object.entries(source);
console.log('entries====>',entries)
const foundFromEntries = entries.some(([key, value]) => value === searchValue);
console.log("foundFromEntries=========>",foundFromEntries);

console.log('******************************************');
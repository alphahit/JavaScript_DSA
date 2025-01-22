const myCar = new Object();

myCar.brand = 'Tata';
myCar.model = 'Nano';

console.log(myCar);

const myCarSpec = {
  ...myCar,
  power: '100bhp',
  registrationDone: false,
  'current condition': 'good',
};

console.log(myCarSpec);

myCarSpec['color'] = 'black';
myCarSpec['wheelSize'] = '18inch';

console.log(myCarSpec);
console.log(myCarSpec.wheelSize);
console.log(myCarSpec['current condition']);

delete myCarSpec.registrationDone;
console.log(myCarSpec);
//Delete Keyword is used to delete the object key not local variables
const func = (function (a) {
  delete a;
  console.log(a);
})(5);
console.log('Looping In Objects ===>');
for (key in myCarSpec) {
  console.log(key);
  console.log(myCarSpec[key]);
}

//Object
//Destructuring
const person = {
  name3: 'Prateek3',
  age3: 23,
  isMarried: false,
};
const person1 = {
  name4: 'Prateek3',
  age4: 23,
  isMarried1: true,
};

const { name3, age3, isMarried } = person;
console.log(name3);
const { name_, age_, isMarried_ } = person1;
console.log(name_);

const name5 = 'Prateek5';
const age5 = 10;
const isMarried2 = true;
const person2 = {
  //When key value pair has the same name that the variable you are sending you don't have to repeat the variable name again
  name5,
  age5,
  isMarried2,
  fullName: {
    first: 'LipuTeek',
    last: 'LipuDarshi',
  },
};
console.log(name5);
console.log(person2.name5);

//Name Aliasing

const { age5: ageOf5 } = person2;
console.log('ageOf5===>', ageOf5);

//Nested Destructuring With Aliasing

const {
  fullName: { first: firstName },
} = person2;
console.log('firstName===>', firstName);

//Copying Object and changing one value
const person3 = {
  ...person2,
  name5: 'Priyadarshi5',
};
console.log(person3.name5);

//Adding key name from variable
const property = 'firstName';
const name = 'Prateek';
//deprecated
const user = {
  [property]: name,
};
console.log('User: ', user);

//Output Based Questions
const obj = {
  a: 'one',
  b: 'two',
  a: 'three',
};

console.log('obj-->', obj);

//================================================

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a);

//================================================

console.log([...'Prateek']);
//================================================
let nums = {
  a: 100,
  b: 200,
  title: 'My Nums',
};
console.log(nums);
function multiply(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

multiply(nums);
console.log(nums);
//================================================
const tempNums = JSON.stringify(nums);
console.log(JSON.stringify(nums));
console.log(typeof tempNums);
console.log(JSON.parse(tempNums));
console.log(JSON.stringify(nums, ['a', 'b']));
//================================================

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
  //**Arrow Function;s this will reference the window object for it's this
  //**Diameter will reference the shape object for it's this
};
console.log('shape.diameter', typeof shape.diameter);
console.log('shape.diameter', shape.diameter());
console.log('shape.perimeter', shape.perimeter());

//================================================

//Rest Parameter

function getItems(fruitList, favoriteList, ...args) {
  return [...fruitList, ...args, favoriteList];
}
console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

//================================================

//When we assign one object to another we are copying properties from object to another variable
//We are simply providing reference to the object

let cobj = { greting: 'Hey!' };
let dobj;
dobj = cobj;
cobj.greting = 'Hello!';
console.log(dobj.greting);

//================================================

//Both will be false since js will compare both object's memory address
console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

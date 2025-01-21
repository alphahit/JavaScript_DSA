//Scope is a certain region of a program where a defined variable exists and can be recognized and beyond that it can't be recognized.
//We cannot redeclare a variable by using let and const in same scope but var can be redeclared in same scope
var a = 5;

{
  var b = 6;
}
console.log(a);
console.log(b);

{
  let c = 7;
  const d = 7;
  console.log(c);
  console.log(d);
}

try {
  console.log(c);
} catch (e) {
  console.log('Outside Scope For Let Not Accessible', e);
}

try {
  console.log(d);
} catch (e) {
  console.log('Outside Scope For Const Not Accessible', e);
}

//Varible Shadowing

function test() {
  let a = 'Hello';
  if (true) {
    let a = 'Hi';
    console.log(a);
  }

  console.log(a);
}
test();

//While shadowing the variable we cannot cross the boundary of the scope.
//We can shadow var variale by using let but we cannot do the opposite (Illegal Shadowing)
function testTwo() {
  try {
    var a1 = 'Hello';
    let b1 = 'Bye';
    if (true) {
      let a1 = 'Hi';
      var b1 = 'GoodBye!';

      console.log(a1);
      console.log(b1);
    }
  } catch (e) {
    console.log(e);
  }
}
testTwo();

//Hoisting

//When we try to execute a JS code there are two phases. One is a creation phase and execution phase. 

//In creation phase three things happen.
// - 1st Step - It creates a global or a window object 
// - 2nd step - It setups a memory heap for storing variables and function references that means it takes all of the variables and 
// functions and stores it and stores it inside the window object and this is why hoisting occurs
// - 3rd Step - It initializes those variables and functions with undefined.

let a2 = 10
function multiply(x){
  return x * 10;
}
let b2 = multiply(a);

console.log(b);


// Creation Phase

// a2 = undefined
// multiply(){...}
// b2  = undefined


// In Execution Phase the js engine executes the code line by line assigning the values to the variabes and executes the function calls
// Also for every new function created javascript engine creates a new execution context altogether 
// In this phase javascript first assign the value of variable

// a2 = 10
// b2 = multiply (assigns b2 with the function execution) = 100


//During the creation phase javascript engine moves your fucntions and variables declarations to the top of the code and this is known as hoisting.
// Temporal dead zone is the time between the declaration and the intiialization of let and const variables.
// Temproal dead zone is the term to describe the state where where variables are in the scope but they are not yet declared 
// cosnt and let are not hoisted like var but they are hoisted in temporal dead zone

function abc(){
  console.log(a3, b3, c3);
  const c3 = 30
  let b3 = 20
  var a3 = 10;
}

abc();

//a3 will be undefined but it will be hoisted but since the value is defined afterwards it will not be undefined
//b3 will be undefined but it will be hoisted and initialized in the temporal dead zone  
//c3 will be undefined but it will be hoisted and initialized in the temporal dead zone  
//b3 and c3 are in the scope but they are in temporal dead zone



//nodemon ShortCircuitJS.js


// if(v){
//     let x = v;
//   } else {
//     let x = 10;
//   }
//The shortcut notation for this is the double pipe character:

//let m = v || 10;

// While it is true that m will get the value of 10 if v is undefined. It is also true that m will be 10 if v has any "falsey" value.

// The "falsey" values in javascript are:

// 0
// null
// undefined
// NaN
// "" (empty string)
// false

//Quick example:

let v = 0;

let x = v || 10;

console.log('******',x)



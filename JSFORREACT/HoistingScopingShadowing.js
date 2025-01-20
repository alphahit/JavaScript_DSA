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





//Polyfill for map, filter and reduce in Javascript

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]
const anotherArray = numbers.map((x, index) => x * index); // [0, 2, 6, 12, 20]

Array.prototype.polyFillMap = function(mapLogicFn){
    let output = []
    let arr = this
    for(let i = 0; i < arr.length; i++){
        output.push(mapLogicFn(arr[i], i));
    }
    return output
}

console.log(numbers.polyFillMap(x => x*2))
console.log(numbers.polyFillMap((x, i)=> x*i))




Array.prototype.polyFillFilter = function(filterlogicFn){
    let output = []
    let arr = this
     for(let i = 0; i < arr.length; i++){
        if(filterlogicFn(arr[i], i)){
            output.push(arr[i]);
        }
    }
    return output
}


console.log(numbers.polyFillFilter(x => x % 2 === 0))
console.log(numbers.polyFillFilter((x,i) => (x+i) % 2 === 1))



Array.prototype.polyfillReduce = function(reduceFn, initialValue) {
  let output = initialValue, arr = this;
  for (let i = 0; i < arr.length; i++) {
    output = reduceFn(output, arr[i], i);
  }
  return output;
}

const sumOfNumbers = numbers.polyfillReduce((acc, curr) => acc + curr, 0); // 28



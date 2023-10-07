let a = 2
let b = 3


const swap = (a, b) =>{
    a = a + b
    b = a - b
    a = a - b
    return "a = " + a + " b = " + b
}
console.log(swap(a, b))

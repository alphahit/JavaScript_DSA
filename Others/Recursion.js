//Recursion : When a function calls itself

// Recursion is a programming technique where a function 
// calls itself repeatedly until it reaches a specific condition called the base case. 
// It allows solving complex problems by breaking them down into smaller, simpler subproblems.

// function recursiveFunction(parameters) {
//     // Base case - the condition that stops the recursion
//     if (/* condition */) {
//         // Return a value or perform an action
//     } else {
//         // Recursive case - call the function again with updated parameters
//         recursiveFunction(/* updated parameters */);
//     }
// }


function factorial(n){
    if(n==0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
//const resultfactorial = factorial(5)
//console.log("result=======>", resultfactorial)




function sumn(n){
    if(n==1){
        return 1
    }else{
        return n + sumn(n-1)
    }
}
//const resultsumn = sumn(4)
//console.log("result=======>", resultsumn)



// function primeNumber(n){

// }


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function fibbonacci(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }else{
        return fibbonacci(n-1) + fibbonacci(n-2)
    }
}
//const resultfibbonacci = fibbonacci(7)
//console.log("result=======>", resultfibbonacci)


//0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768
const tribonaci = (n) => {
    if(n<3){
        return 0
    }else if(n==3){
        return 1
    }else{
        return tribonaci(n-1) + tribonaci(n-2) + tribonaci(n-3)
    }
}

const resulttribonaci = tribonaci(9)
console.log("result=======>", resulttribonaci)



let arr = [ 64, 34, 25, 12, 22, 11, 90 ]
function bubbleSort(array){
    let c;
    for(let i = array.length; i >0 ; i--) {
        for(let j = 0; j < i-1; j++) {
            if(array[j] > array[j+1])   {
                c = array[j]
                array[j] = array[j+1]
                array[j+1] = c
            }
        }
    }
    return array
}

console.log(bubbleSort(arr))





// const swap = (a, b) =>{
//     a = a + b
//     b = a - b
//     a = a - b
//     return "a = " + a + " b = " + b
// }
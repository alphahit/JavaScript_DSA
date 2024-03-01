let mat=[[10,20,30,40],
[15,25,35,45],
[27,29,37,48],
[32,33,39,50]]


let mat2=[[1,5,3],[2,8,7],[4,6,9]]

function quickSort(arr) {
    if(arr.length<2){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = []
    let right = []
    let i = 0
    
    for(let i = 0;i<arr.length-1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
    } 
    return [...quickSort(left),pivot,...quickSort(right)]
}
//O(N2LogN)
function sortMatrix(mat){
    for(let i = 0; i<mat.length; i++){
     mat[i] = [...quickSort(mat[i])]  
    }
    return mat
}

console.log(sortMatrix(mat))
console.log(sortMatrix(mat2))
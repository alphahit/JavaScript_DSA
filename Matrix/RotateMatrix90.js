let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

function bruteNinety(arr) {
    let zeroMatrix = [];
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        zeroMatrix[i] = []; 
        for (let j = 0; j < n; j++) {
            zeroMatrix[i][j] = 0;
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            zeroMatrix[j][n - 1 - i] = arr[i][j];
        }
    }
    return zeroMatrix;
}
  
  console.log("bruteNinety - T(C) n2 S(C) n2 ======>",bruteNinety(arr))
  



  function transPoseRotate(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) { 
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    for(let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse()
      }
    return matrix;
  }
  
  let arr1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
 
  console.log("transPoseRotate - T(C) n2 S(C) n1  ===>",transPoseRotate(arr1));
  
  
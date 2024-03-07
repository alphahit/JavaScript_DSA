let mat = [[1, 2, 1, 4, 8],[3, 7, 8, 5, 1],[8, 7, 7, 3, 1],[8, 1, 2, 7, 9]]
let mat2 = [[1, 2, 5, 4, 8],[3, 7, 8, 5, 1],[8, 7, 5, 3, 1],[8, 1, 2, 5, 9]]
function findCommonElement(matrix){
    let m = new Map()
    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j< matrix[0].length; j++){
            if(i===0){
              m.set(matrix[i][j], 1)  
            }else if(m.get(matrix[i][j]) === i){
                m.set(matrix[i][j], i+1)  
            }else{
               continue
            }
        }
    }
    let element = []
    for(const key of m.keys()){
        console.log("m key===>",key)
        if(m.get(key) ===  matrix.length){
            element.push(key)
        }
    }
    return element
}

console.log(findCommonElement(mat))
console.log(findCommonElement(mat2))
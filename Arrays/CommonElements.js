let A = [1, 5, 10, 20, 40, 80]
let B = [6, 7, 20, 80, 100]
let C = [3, 4, 15, 20, 30, 70, 80, 120]

function checkIntersection(A,B,C) {
    const m = new Map()
    let elements = []
    for(let i =0; i< A.length; i++){
        m.set(A[i], (m.get(A[i]) ?? 0) + 1);
    }
    for(let i =0; i< B.length; i++){
        m.set(B[i], (m.get(B[i]) ?? 0) + 1);
    }
    for(let i =0; i< C.length; i++){
        m.set(C[i], (m.get(C[i]) ?? 0) + 1);
    }

    for (const key of m.keys()) {
        if(m.get(key) > 1) elements.push(key)
    }
    return elements
}

// console.log(checkIntersection(A,B,C))


function commonWithoutHashMap(A,B,C){
    let fp = 0
    let sp = 0
    let tp = 0

//    let minLengthArr = 0
//     if(A.length > B.length){
//         if(B.length > C.length ){
//             minLengthArr = C.length
//         }else{
//             minLengthArr = B.length
//         }
//     }else if(A.length > C.length){
//          minLengthArr = C.length
//     }else{
//          minLengthArr = A.length
//     }

  let output = []
    while(fp < A.length && sp< B.length && tp < C.length){
        if((A[fp] === B[sp])  && (B[sp]  === C[tp])){
            output.push(A[fp])
            fp += 1
            sp += 1
            tp += 1
        }else if(A[fp] < B[sp] && A[fp] < C[tp]){
            fp += 1
        }else if( B[sp] < A[fp] && B[sp] < C[tp]){
            sp += 1
        }else if(C[tp] < A[fp] && C[tp] < B[sp]){
            tp+= 1
        }
       
    }
    return output.length === 0 ?  [-1] : output

}


console.log(commonWithoutHashMap(A,B,C))
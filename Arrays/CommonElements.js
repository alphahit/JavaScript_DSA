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

console.log(checkIntersection(A,B,C))

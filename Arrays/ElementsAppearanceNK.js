let arr = [3, 1, 2, 2, 1, 2, 3, 3]
let k = 4
let arr1 = [9, 8, 7, 9, 2, 9, 7]
let k1 = 3
function findnkeys(arr,k) {
    let n = arr.length
    let req = Math.floor(n/k)
    let elements = []
    const m = new Map()
    for(let i = 0; i<n; i++) {
        m.set(arr[i],(m.get(arr[i]) ?? 0) + 1)
    }
    for(const t of m.keys()){
        if(m.get(t) > req) elements.push(t)
    }
return elements
}


console.log(findnkeys(arr,k))
console.log(findnkeys(arr1,k1))
function Sort012 (arr,n) {
    let count0 = 0
    let count1 = 0
    let count2 = 0
    for(let i =0; i<n; i++) {
        if(arr[i] === 0) count0++;
        if(arr[i] === 1) count1++;
        if(arr[i] === 2) count2++;
    }
    let arr1 = []
    for(let i =0; i<count0; i++) {
        arr1.push(0)
    }
    for(let i =0; i<count1; i++) {
        arr1.push(1)
    }
    for(let i =0; i<count2; i++) {
        arr1.push(2)
    }
    return arr1
}

console.log(Sort012([0,1,0,2,2,1,1,0,0,0,0],5))
let arr =[2, 1, 5, 6, 3]
let k = 3
function minSwap(arr,k){
    let favourable = 0;
    let nonFavourable = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<=k){
            favourable++
        }
    }
    for(let j = 0; j<favourable; j++){
        if(arr[j]>k){
            nonFavourable++
        }
    }
   
    let swap = nonFavourable

    for(let i = 0, j = favourable; j < arr.length; ++i, ++j){
        if(arr[i] > k){
            --nonFavourable
        }
        if(arr[j] > k){
            ++nonFavourable
        }
        swap = Math.min(nonFavourable,swap);
    }
    return swap;
    
}

console.log(minSwap(arr,k))
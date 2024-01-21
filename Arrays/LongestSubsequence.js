let arr = [2,5,7,8,9,10,12,18]

function lcs(arr){
    let maxCount = 0;
    let startIndex = 0, endIndex = 0;
    for(let i = 0; i<arr.length; i++){
      let count = 1
      for(let j=i; j<arr.length; j++){
        if(arr[j+1]-1 === arr[j]){
            
            count++
            if(count > maxCount){
                maxCount = count
                startIndex = i
                endIndex = j
            }
        }else{
            i=j
            count == 0
        }
      }
    }
    return {max: maxCount, element: arr.slice(startIndex, endIndex+1)}
}

console.log(lcs(arr))
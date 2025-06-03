 let arrToCompare = [3, 5, 4, 1, 9]
let arrToCompare2 = [22, 14, 8, 17, 35, 3]

 function maxMinCompare(arr) {
    let max = arr[0]
    let min = arr[0]

    for(let i= 1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }else if(arr[i]> max){
            max = arr[i]
        }
        
    }
    return {max, min}

 }



 console.log(maxMinCompare(arrToCompare))
  console.log(maxMinCompare(arrToCompare2))
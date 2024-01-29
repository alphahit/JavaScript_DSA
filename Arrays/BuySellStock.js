let prices = [7,1,5,3,6,4,8,9,18]
let prices2 = [2,1,2,1,0,1,2]
let prices3 = [1,2,4,2,5,7,2,4,9,0,9]


function buySell(prices){
    if (prices.length === 0) {
        return 0;
    }
    
    let i = 0;
    let j = 1;
    let maxDifference = 0;
    let minPrice = prices[0];
    for(let i = 0; i<prices.length; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }else if(prices[i]-minPrice>maxDifference){
            maxDifference = prices[i]-minPrice
        }
    }

    return maxDifference
}
console.log(buySell(prices))
console.log(buySell(prices2))
console.log(buySell(prices3))
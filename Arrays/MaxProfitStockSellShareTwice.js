let price = [100, 30, 15, 10, 8, 25, 80];
let price0 = [ 2, 30, 15, 10, 8, 25, 80]
let price1 = [10, 22, 5, 75, 65, 80];
let price2 = [90, 80, 70, 60, 50];

function profitTable(price) {
    let profit = []
    for(let i=0; i<price.length; i++) {
        profit[i] = 0
    }
    return profit
}

function calculateMaxProfit(price) {
    let n = price.length
    let profit = profitTable(price)

    let max_price  = price[n-1];
    
    for(let i = n-2; i >= 0; i--) {
        if(price[i] > max_price ) {

            max_price  = price[i]
        }

        profit[i]  = Math.max(profit[i + 1], 
            max_price  - price[i])
    }

    let min_price = price[0];

    for(let i = 1; i < n; i++) {
        if(price[i] < min_price) {

            min_price = price[i]
        }

        profit[i]  = Math.max(profit[i - 1], 
            profit[i] +  (price[i] - min_price))
    }

    let result = profit[n - 1];
 
    return result;
}

console.log(calculateMaxProfit(price))
console.log(calculateMaxProfit(price1))
console.log(calculateMaxProfit(price2))
console.log(calculateMaxProfit(price0))
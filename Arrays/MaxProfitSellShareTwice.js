let price = [100, 30, 15, 10, 8, 25, 80];
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
    let n = price.length - 1
    let profit = profitTable(price)
    let maxDifferencertl = price[n];
    for(let i = n-1; i >= 0; i--) {
        if(price[i] > maxDifferencertl) {

            maxDifferencertl = price[i]
        }

        profit[i]  = Math.max(profit[i + 1], 
            maxDifferencertl - price[i])
    }

    let maxDifferenceltr = price[0];

    for(let i = 1; i < n; i++) {
        if(price[i] < maxDifferenceltr) {

            maxDifferenceltr = price[i]
        }

        profit[i]  = Math.max(profit[i - 1], 
             price[i] - maxDifferenceltr)
    }

    let result = profit[n - 1];
 
    return result;
}

console.log(calculateMaxProfit(price))
console.log(calculateMaxProfit(price1))
console.log(calculateMaxProfit(price2))
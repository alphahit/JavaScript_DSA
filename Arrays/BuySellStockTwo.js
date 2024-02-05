let prices = [7,1,5,3,6,4];
let prices2 = [2, 2, 5, 1, 0, 6, 1, 1];
let prices3 = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];

function buySell(prices) {
    let i = 0;
    let j = 1;
    let maxDiff = 0;
    while (j < prices.length) {
        if (prices[i] > prices[j]) {
            i = j;
            j++;
        }
        if (prices[i] === prices[j]) {
            j++;
        } else if (prices[i] < prices[j]) {
            maxDiff = Math.max(maxDiff, prices[j] - prices[i]);
            j++;
        }
    }
    return maxDiff + "check max";
}
//console.log(buySell(prices))
console.log(buySell(prices));

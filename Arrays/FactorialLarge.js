class Solution {
    factorial(N) {
        let result = [1]; 
        
        for (let x = 2; x <= N; x++) {
            let carry = 0;
            for (let i = 0; i < result.length; i++) {
                let product = result[i] * x + carry;
                result[i] = product % 10;
                carry = Math.floor(product / 10); 
            }
            

            while (carry) {
                result.push(carry % 10);
                carry = Math.floor(carry / 10);
            }
        }
        
        return result.reverse(); 
    }
}
let sol = new Solution();
console.log(sol.factorial(5)); //  [1, 2, 0]
console.log(sol.factorial(10)); // [3, 6, 2, 8, 8, 0, 0]

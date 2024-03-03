class Solution {
    romanToDecimal(s) {
        const romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        
        let total = 0;
        for (let i = 0; i < s.length; i++) {
            const current = romanMap[s[i]];
            const next = romanMap[s[i + 1]];

            
            if (next > current) {
                total -= current;
            } else {
                total += current;
            }
        }
        return total;
    }
}


const solution = new Solution();
console.log(solution.romanToDecimal("V"));
console.log(solution.romanToDecimal("III"));

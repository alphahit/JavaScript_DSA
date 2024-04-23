function smallestWindow(str) {
    let n = str.length;
    let charSet = new Set(str);
    let requiredSize = charSet.size;
    let seen = new Map();
    let left = 0;
    let minLen = Infinity;
    let count = 0;

    for (let right = 0; right < n; right++) {
        let rightChar = str[right];
        seen.set(rightChar, (seen.get(rightChar) || 0) + 1);
        if (seen.get(rightChar) === 1) count++;

        while (count === requiredSize) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
            }
            let leftChar = str[left];
            seen.set(leftChar, seen.get(leftChar) - 1);
            if (seen.get(leftChar) === 0) count--;
            left++;
        }
    }

    return minLen;
}

console.log(smallestWindow("AABBBCBBAC")); 
console.log(smallestWindow("aaab"));
console.log(smallestWindow("GEEKSGEEKSFOR")); 

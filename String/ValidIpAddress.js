function restoreIpAddresses(s) {
    const res = [];

    function isValid(part) {
        if (part.length > 3) return false;
        if (part.startsWith('0') && part.length > 1) return false;
        if (parseInt(part) > 255) return false;
        return true;
    }

    function backtrack(i, dots, currentIP) {
        if (dots === 4 && i === s.length) {
            res.push(currentIP.join('.'));
            return;
        }
        if (dots > 4) return;

        for (let l = 1; l <= 3; l++) {
            if (i + l > s.length) break;
            const part = s.substring(i, i + l);
            if (isValid(part)) {
                currentIP.push(part);
                backtrack(i + l, dots + 1, currentIP);
                currentIP.pop();
            }
        }
    }

    backtrack(0, 0, []);
    return res;
}

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("101023"));
console.log(restoreIpAddresses("999999999"));
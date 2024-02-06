let str1 = "XTY";
let str2 = "YTY";
let str3 = "XTYTYY";
let str4 = "TTT";
function checkShuffle(str1, str2, str3) {
  if (str1.length + str2.length !== str3.length) {
    return false;
  }
  let m = new Map();
  for (let i = 0; i < str1.length; i++) {
    m.set(str1[i], (m.get(str1[i]) ?? 0) + 1);
  }
  for (let i = 0; i < str2.length; i++) {
    m.set(str2[i], (m.get(str2[i]) ?? 0) + 1);
  }
  for (let i = 0; i < str3.length; i++) {
    if (m.has(str3[i]) && m.get(str3[i]) >= 0) {
      m.set(str3[i], m.get(str3[i]) - 1);
    } else if (m.has(str3[i]) && m.get(str3[i]) < 0) {
      return false;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkShuffle(str1, str2, str3))
console.log(checkShuffle(str1, str4, str3))

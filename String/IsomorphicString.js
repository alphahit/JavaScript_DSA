/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let s = 'egg',
  t = 'add';

let s1 = 'foo',
  t1 = 'bar';

let s2 = 'paper',
  t2 = 'title';

let s3 = 'badc',
  t3 = 'baba';
var isIsomorphic = function (s, t) {
  let m = new Map();
  let n = new Map();
  let flag1 = true;
  for (let i = 0; i < s.length; i++) {
    if ((m.has(s[i]) && m.get(s[i]) !== t[i]) || (n.has(t[i]) && n.get(t[i]) !== s[i])) {
      flag1 = false;
      break;
    } else {
      m.set(s[i], t[i]);
      n.set(t[i], s[i]);
    }
  }

  return flag1;
};
console.log(isIsomorphic(s, t));
console.log(isIsomorphic(s1, t1));
console.log(isIsomorphic(s2, t2));
console.log(isIsomorphic(s3, t3));

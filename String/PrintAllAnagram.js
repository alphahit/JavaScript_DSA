class Solution {
  Anagrams(string_list) {
    let m = new Map();
    for (let i = 0; i < string_list.length; i++) {
      const key = string_list[i].split('').sort().join('');

      if (!m.has(key)) {
        m.set(key, [string_list[i]]);
      } else {
        const group = m.get(key);
        group.push(string_list[i]);
        m.set(key, group);
      }
    }

    for (const group of m.values()) {
      console.log(group.join(' '));
    }
  }
}

let s = new Solution();
s.Anagrams(['act', 'god', 'cat', 'dog', 'tac']);

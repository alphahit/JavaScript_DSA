let strArray = ["aaa", "bbb", "aaa", "ccc", "ccc", "aaa"];
function firstRepeatedWord(arr) {
  let m = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i])) {
      return arr[i];
    } else {
      m.set(arr[i], true);
    }
  }
  return "No repeated word";
}

console.log(firstRepeatedWord(strArray));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (arr[j] > current && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function secFrequent(arr) {
  let m = new Map();
  for (let i = 0; i < arr.length; i++) {
    m.set(arr[i], (m.get(arr[i]) ?? 0) + 1);
  }
  let sortedOccurences = insertionSort([...m.values()]);
  for (const key of m.keys()) {
    if (m.get(key) === sortedOccurences[sortedOccurences.length - 2]) {
      return key;
    }
  }

  return "No repeated occurrence";
}
console.log(secFrequent(strArray));

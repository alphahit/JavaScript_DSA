function rearrangeArray(arr) {

    const positive = arr.filter(x => x >= 0);
    const negative = arr.filter(x => x < 0);

    const result = [];
    let i = 0, j = 0;
  
    while (i < positive.length && j < negative.length) {
      result.push(negative[j++], positive[i++]);
    }
  
    while (i < positive.length) {
      result.push(positive[i++]);
    }
    while (j < negative.length) {
      result.push(negative[j++]);
    }
    return result;
  }
  
  console.log(rearrangeArray([1, 2, 3, -4, -1, 4]));
  console.log(rearrangeArray([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
  
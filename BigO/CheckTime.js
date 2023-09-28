function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed For first func: ${(t2 - t1) / 1000} seconds.`);





function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}

var t11 = performance.now();
addUpTo1(1000000000);
var t12 = performance.now();
console.log(`Time Elapsed For second func: ${(t12 - t11) / 1000} seconds.`);

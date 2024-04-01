function fibnonacci(n) {
  if (n <= 1) return n;
  return fibnonacci(n - 1) + fibnonacci(n - 2);
}
console.log(fibnonacci(6));
console.log(fibnonacci(9));

const func = (mid, n, m) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * mid;
    if (ans > m) return 2;
  }
  if (ans == m) return 1;
  return 0;
};

const nthRoot = (n, m) => {
  let low = 0,
    high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const midN = func(mid, n, m);
    if (midN == 1) {
      return mid;
    } else if (midN == 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
let n = 4,
  m = 256;

console.log("nth root is", nthRoot(n, m));

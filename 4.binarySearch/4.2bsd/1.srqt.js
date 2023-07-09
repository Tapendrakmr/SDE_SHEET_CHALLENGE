const florSqrt = (n) => {
  let low = 0;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};

let n = 28;
console.log("result", florSqrt(n));

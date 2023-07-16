const possible = (arr, day, mid, m, k) => {
  let n = arr.length;
  let cnt = 0;
  let noOfB = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < day) {
      cnt++;
    } else {
      noOfB += Math.floor(cnt / k);
      cnt = 0;
    }
  }
  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
};
const roseGarden = (arr, k, m) => {
  let n = arr.length;
  let v = m * k;
  if (n < m * k) return -1;

  let mini = Infinity,
    maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, arr[i]);
    maxi = Math.max(min, arr[i]);
  }

  let low = mini,
    high = maxi;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(arr, mid, m, k)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

let arr = [7, 7, 7, 7, 13, 11, 12, 7];
let k = 3;
let m = 2;
let ans = roseGarden(arr, k, m);
if (ans == -1) {
  console.log("We cannot make m bouquets.");
} else {
  console.log("We can make bouquets on day " + ans);
}

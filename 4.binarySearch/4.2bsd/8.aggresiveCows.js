const canWePlace = (dist, stalls, cows) => {
  const n = stalls.length;
  let cntCows = 1;
  let last = stalls[0];
  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      cntCows++;
      last = stalls[i];
    }
    if (cntCows >= cows) return true;
  }
  return false;
};

const aggresiveCows = (arr, k) => {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let low = 1,
    high = arr[n - 1] - arr[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canWePlace(mid, arr, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};

let arr = [0, 3, 4, 7, 10, 9];
let k = 4;
const ans = aggresiveCows(arr, k);
console.log("🚀 ~ file: 8.aggresiveCows.js:35 ~ ans:", ans);

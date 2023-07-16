const checkCapacity = (arr, mid) => {
  let i = 0;
  cnt = 1;
  let load = 0;
  while (i < arr.length) {
    if (load + arr[i] > mid) {
      cnt += 1;
      load = arr[i];
    } else {
      load += arr[i];
    }
    i += 1;
  }
  return cnt;
};
const shipCapacity = (arr, d) => {
  let low = 0;
  let high = 0;

  for (let i = 0; i < arr.length; i++) {
    low = Math.max(low, arr[i]);
    high += arr[i];
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let days = checkCapacity(arr, mid);
    if (days <= d) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

let weight = [5, 4, 5, 2, 3, 4, 5, 6];
let d = 5;

console.log("ship capacity", shipCapacity(weight, d));

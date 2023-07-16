const divisor = (arr, limit, ele) => {
  let sumi = 0;
  for (let i = 0; i < arr.length; i++) {
    sumi += Math.ceil(arr[i] / ele);
  }
  if (sumi > limit) return false;
  return true;
};
const smallestDivision = (arr, limit) => {
  let low = 1;
  let high = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    high = Math.max(arr[i], high);
  }
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (divisor(arr, limit, mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
let arr = [8, 4, 2, 3];
let limit = 10;

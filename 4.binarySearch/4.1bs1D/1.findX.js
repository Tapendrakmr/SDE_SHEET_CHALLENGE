const iterative = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) return mid;
    else if (arr[mid] > x) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return -1;
};

const recurse = (arr, x, low, high) => {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] == x) return mid;
  else if (arr[mid] > x) {
    return recurse(arr, x, low, mid - 1);
  } else {
    return recurse(arr, x, mid + 1, high);
  }
};
const arr = [3, 4, 6, 7, 9, 12, 16, 17];
const x = 17;
console.log("resut", iterative(arr, x));
console.log("result2 ", recurse(arr, x, 0, arr.length - 1));

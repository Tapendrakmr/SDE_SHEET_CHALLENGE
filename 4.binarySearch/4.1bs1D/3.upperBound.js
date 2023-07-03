const upperBound = (arr, x) => {
  let upper = 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      low = mid + 1;
    } else {
      upper = arr[mid];
      high = mid - 1;
    }
  }
  console.log("result", upper);
};
let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let x = 6;
upperBound(arr, x);

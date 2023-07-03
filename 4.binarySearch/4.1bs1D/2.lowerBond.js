const lowerBound = (arr, x) => {
  let lower = 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      high = mid - 1;
    } else {
      lower = arr[mid];
      low = mid + 1;
    }
  }
  console.log("lower bound", lower);
};
let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let x = 10;
lowerBound(arr, x);

const insertPos = (arr, x) => {
  let low = 0;
  let high = arr.length;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log("result", ans);
};

let arr = [1, 2, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
let x = 7;
insertPos(arr, x);

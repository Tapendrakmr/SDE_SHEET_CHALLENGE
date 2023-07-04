let searcInSort = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let firsPos = low;
  let lastpos = high;
  let resultPos = -1;
  console.log("loop start");
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) return mid;
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        high = mid + 1;
      } else {
        low = mid - 1;
      }
    }
  }
  console.log("loop end");
  return resultPos;
};

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let x = 0;
console.log("result", searcInSort(arr, x));

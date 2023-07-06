const minEle = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  if (arr[-1] > arr[-2]) return high;
  if (arr[0] > arr[1]) return 0;
  low = 1;
  high = arr.length - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid - 1]) low = mid + 1;
    else high = mid - 1;
  }
};

let arr = [4, 5, 1, 2, 3];
console.log("result", minEle(arr));

const lastOccurence = (arr, x) => {
  let lastoccur = -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      lastoccur = mid;
      low = mid + 1;
    } else if (arr[mid] < x) low = mid + 1;
    else if (arr[mid] > x) high = mid - 1;
  }
  return lastoccur;
};
let arr = [3, 4, 13, 13, 13, 20, 20, 40];
let x = 20;

console.log("last occur", lastOccurence(arr, x));

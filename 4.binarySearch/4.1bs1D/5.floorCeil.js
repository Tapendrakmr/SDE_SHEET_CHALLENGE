const lowerBound = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

const upperBound = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
const floorAndCeil = (arr, x) => {
  const floor = lowerBound(arr, x);
  const ceil = upperBound(arr, x);
  return [floor, ceil];
};
let arr = [3, 4, 4, 7, 8, 10];
let x = 5;

console.log("dsfsd", floorAndCeil(arr, x));

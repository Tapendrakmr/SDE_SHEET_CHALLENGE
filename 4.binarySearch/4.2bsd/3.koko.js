const maxi = (arr) => {
  let maxi = Number.MIN_SAFE_INTEGER;
  arr.forEach((ele) => {
    maxi = Math.max(maxi, ele);
  });
  return maxi;
};
const hourAmount = (arr, h, mid) => {
  let totalTime = 0;
  arr.forEach((ele) => {
    totalTime += Math.ceil(ele / mid);
  });
  return totalTime;
};
const koko = (arr, h) => {
  let maxiEle = maxi(arr);
  let low = 1;
  let high = maxiEle;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const res = hourAmount(arr, h, mid);
    if (res <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
let arr = [7, 15, 6, 3];
let h = 8;
console.log("result", koko(arr, h));

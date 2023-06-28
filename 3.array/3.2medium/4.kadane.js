// brute force approch
const maxSum = (arr) => {
  let maxi = -9999999;
  for (let i = 0; i < arr.length; i++) {
    let sumi = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sumi += arr[j];
      maxi = Math.max(sumi, maxi);
    }
  }
  console.log("max sum", maxi);
};

const kadane = (arr) => {
  let maxi = Number.MIN_SAFE_INTEGER;
  let sumi = 0;
  for (let i = 0; i < arr.length; i++) {
    sumi += arr[i];
    maxi = Math.max(maxi, sumi);
    if (sumi < 0) {
      sumi = 0;
    }
  }
  console.log("maxi sumi", maxi);
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSum(arr);
kadane(arr);

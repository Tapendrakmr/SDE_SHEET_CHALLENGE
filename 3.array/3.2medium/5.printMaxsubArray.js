const brute = (arr) => {
  let maxi = Number.MIN_SAFE_INTEGER;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sumi = arr[i];
    let arrData = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      sumi += arr[j];
      arrData.push(arr[j]);
      if (sumi > maxi) {
        maxi = sumi;
        result = arrData;
      }
    }
  }
  console.log("maxi sum", maxi, result);
};

const kadane = (arr) => {
  let maxi = Number.MIN_SAFE_INTEGER;
  let result = [];
  let sumi = 0;
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    sumi += arr[i];
    result.push(arr[i]);
    if (sumi > maxi) {
      maxi = sumi;
      finalArr = result;
    }
    if (sumi < 0) {
      sumi = 0;
      result = [];
    }
  }
  console.log("maxi sum", maxi, result);
};
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
brute(arr);
kadane(arr);

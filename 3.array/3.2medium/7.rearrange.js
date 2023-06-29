// brute force
const rearrange = (arr) => {
  let pos = [];
  let neg = [];
  arr.forEach((element) => {
    if (element < 0) {
      neg.push(element);
    } else {
      pos.push(element);
    }
  });
  let i = 0,
    j = 0,
    k = 0;
  let l = arr.length;
  let result = [];
  while (i < pos.length && j < neg.length) {
    if (k % 2 == 0) {
      result.push(pos[i]);
      i++;
    } else {
      result.push(neg[j]);
      j++;
    }
    k++;
  }
  while (j < neg.length) {
    result.push(neg[j]);
    j++;
  }
  while (i < pos.length) {
    result.push(pos[i]);
    i++;
  }
  console.log("brute", result);
};
const optimal = (arr) => {
  n = arr.length;
  newArr = Array(n).fill(0);
  let pos = 0;
  let neg = 1;
  arr.forEach((ele) => {
    if (ele < 0) {
      newArr[neg] = ele;
      neg += 2;
    } else {
      newArr[pos] = ele;
      pos += 2;
    }
  });
  console.log("optimal", newArr);
};
arr = [1, 2, -3, -1, -2, 3];
rearrange(arr);
optimal(arr);

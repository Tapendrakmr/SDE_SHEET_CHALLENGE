const brute = (arr) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let cnt = 1;
  let prev = arr[0];
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let j = 1; j < arr.length; j++) {
    if (prev + 1 == arr[j]) {
      cnt += 1;
      prev = arr[j];
      maxi = Math.max(maxi, cnt);
    } else {
      i = j;
      cnt = 1;
    }
  }
};
arr = [100, 200, 1, 3, 2, 4];
brute(arr);

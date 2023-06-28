const brute = (arr) => {
  mini = Number.MAX_SAFE_INTEGER;
  maxi = Number.MIN_SAFE_INTEGER;
  let m = 0;
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        if (arr[i] <= mini && arr[j] >= maxi) {
          mini = arr[i];
          m = i;
          maxi = arr[j];
          n = j;
        }
      }
    }
  }
  if (mini == Number.MAX_SAFE_INTEGER || maxi == Number.MIN_SAFE_INTEGER) {
    console.log("no number");
    return;
  }
  console.log("numbers", mini, maxi, m, n, arr[n] - arr[m]);
};
let arr = [7, 1, 5, 3, 6, 4];

const optimal = (arr) => {
  let maxPro = 0;
  let mini = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    mini = Math.min(mini, arr[i]);
    maxPro = Math.max(maxPro, arr[i] - mini);
  }
  console.log("optima", maxPro);
};
brute(arr);
optimal(arr);

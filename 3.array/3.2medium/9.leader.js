const optimal = (arr) => {
  maxi = Number.MIN_SAFE_INTEGER;
  result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxi) {
      result.push(arr[i]);
      maxi = arr[i];
    }
  }
  console.log("arre", result.reverse());
};
arr = [100, 22, 12, 3, 0, 6];
optimal(arr);

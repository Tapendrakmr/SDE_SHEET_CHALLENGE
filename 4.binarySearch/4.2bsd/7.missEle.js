const findMissPoss = (arr, missPos) => {
  const missEleArr = [];
  let j = 0,
    i = 1;
  while (missEleArr.length <= missPos) {
    if (arr[j] == i) {
      j++;
      i++;
      continue;
    }
    missEleArr.push(i);
    i += 1;
  }
  console.log("missPos", missEleArr, missEleArr[missPos - 1]);
};
let arr = [4, 7, 9, 10];
let missPos = 1;
findMissPoss(arr, missPos);

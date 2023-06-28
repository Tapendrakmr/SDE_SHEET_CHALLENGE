const majority = (arr) => {
  arr.sort();
  let n = arr.length;
  console.log("majority element is ", arr[n / 2]);
};

const mooreAlgo = (arr) => {
  let count = 0;
  let majEle = 0;
  arr.forEach((element) => {
    if (count == 0) {
      majEle = element;
    } else if (element == majEle) {
      count++;
    } else if (element != majEle) {
      count--;
    }
  });
  console.log("maj", majEle);
};

let arr = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
majority(arr);
mooreAlgo(arr);

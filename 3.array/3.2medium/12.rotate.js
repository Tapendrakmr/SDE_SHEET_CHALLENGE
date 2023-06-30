const brute = (arr) => {
  let row = arr.length;
  let col = arr[0].length;
  let newMatrix = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newMatrix[i] = [];
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newMatrix[j][row - 1 - i] = arr[i][j];
    }
  }

  console.log("sdfjksd", newMatrix);
};

const optimal = (arr) => {
  let row = arr.length;
  let col = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      let temp = 0;
      temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  //   for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < row / 2; j++) {
  //       let temp = 0;
  //       temp = arr[i][j];
  //       arr[i][j] = arr[i][row - 1 - j];
  //       arr[i][row - 1 - i] = arr[i][j];
  //     }
  //   }
  const reverse = (arr) => arr.map((row) => row.reverse());
  console.log("arr", reverse);
};

arr = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// brute(arr);
optimal(arr);

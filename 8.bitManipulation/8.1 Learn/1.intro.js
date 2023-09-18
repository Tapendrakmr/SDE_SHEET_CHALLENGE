const fetchIthBit = (N, i) => {
  console.log("res", (N >> (i - 1)) & 1);
};
const setIthBit = (N, i) => {
  console.log("res2", ((i - 1) << 1) | N);
};
const clearIthBit = (N, i) => {
  console.log("res3", N & ~(1 << (i - 1)));
};
const checkIthBitSetOrNot = (N, i) => {
  console.log("res4", (N & (1 << (i - 1))) > 0 ? "set" : "not set");
};
const isEven = (N) => {
  console.log("res5", (N & 1) == 0 ? "even" : "odd");
};
const isPowerOfTwo = function (n) {
  return n > 0 ? ((n & (n - 1)) == 0 ? true : false) : false;
};
const setRightMost = (N) => {
  let i = 0;
  while (((1 << i) & N) != 0) {
    i++;
  }
  let n = N | (1 << i);
  console.log("n", n);
};
const swapAB = (a, b) => {
  let tempA = a,
    tempB = b;
  a = a ^ b;
  let newA = a ^ tempA;
  let newB = a ^ tempB;
  console.log(newA, newB);
};
// let N = 25,
//   i = 3;
// fetchIthBit(N, i);
// setIthBit(N, i);
// clearIthBit(N, i);
// checkIthBitSetOrNot(128, 7);
// isEven(26);
// setRightMost(10);
swapAB(5, 6);

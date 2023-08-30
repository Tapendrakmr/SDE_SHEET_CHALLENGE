const fetchIthBit = (N, i) => {
  console.log("res", (N >> (i - 1)) & 1);
};
const setIthBit = (N, i) => {
  console.log("res2", ((i - 1) << 1) | N);
};
const clearIthBit = (N, i) => {
  console.log("res3", N & ~(1 << (i - 1)));
};
let N = 25,
  i = 3;
fetchIthBit(N, i);
setIthBit(N, i);
clearIthBit(N, i);

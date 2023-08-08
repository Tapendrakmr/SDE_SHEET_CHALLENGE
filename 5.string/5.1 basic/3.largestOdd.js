// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

var largestOddNumber = function (num) {
  if (+num % 2) return String(num);
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2) return num.slice(0, i + 1);
  }
  return "";
};

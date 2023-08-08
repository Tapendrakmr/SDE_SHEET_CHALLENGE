// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item != "")
    .reverse()
    .join(" ");
};

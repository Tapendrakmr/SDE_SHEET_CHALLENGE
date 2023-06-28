const checkTwoSum = (n, arr, target) => {
  const map1 = new Map();
  let flag = false;
  arr.forEach((ele) => {
    if (map1.has(target - ele)) {
      flag = true;
    } else {
      map1.set(ele, "1");
    }
  });
  if (flag) {
    return true;
  }

  return false;
};

const n = 5;
const arr = [2, 6, 5, 8, 11];
const target = 14;
console.log("two sum exist", checkTwoSum(n, arr, target));

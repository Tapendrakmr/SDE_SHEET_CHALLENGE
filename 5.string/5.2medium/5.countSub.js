let str = "abcad";
let k = 2;

const kDistinctverif = (map, k) => {
  if (map.size == k) {
    return true;
  }
  return false;
};
const countSub = (str, k) => {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = 1;
    for (let j = i; j < str.length; j++) {
      if (map.has(str[j])) {
        map.set(str[j], map.get(str[j]) + 1);
      } else {
        map.set(str[j], 1);
      }
      if (kDistinctverif(map, k)) {
        count += 1;
      }
    }
    map.clear();
  }
  return count;
};
console.log(countSub(str, k));

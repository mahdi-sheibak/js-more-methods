const longestCommonPrefix = (arr = []) => {
  if (!arr.length) return "";
  if (arr.length === 1) return arr[0];

  let result = arr[0];

  for (const item of arr) {
    while (result.length !== 0 && item.indexOf(result) !== 0) {
      result = result.slice(0, -1);
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["Amir", "Amin", "Amini"])); // "Ami"

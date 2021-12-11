const singleNumber = (arr = []) => {
  let result = 0;

  arr.forEach((_, i) => (result ^= arr[i]));

  return result;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4

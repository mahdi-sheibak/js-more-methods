const twoSum = (arr = [], target = 0) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target - arr[i] === arr[j]) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
/**
 * because arr[0] + arr[1] => 2 + 7 = 9
 * return [0, 1]
 */

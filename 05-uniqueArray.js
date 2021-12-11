const uniqueArray = (arr = []) => {
  return [...new Set(arr)];
};

console.log(uniqueArray([1, 1, 2])); // [ 1, 2 ]
console.log(uniqueArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [ 0, 1, 2, 3, 4 ]

const hasArrayDuplicates = (arr = []) => {
  return new Set(arr).size !== arr.length;
};

console.log(hasArrayDuplicates([1, 2, 3, 1])); // true
console.log(hasArrayDuplicates([1, 2, 3, 4])); // false
console.log(hasArrayDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

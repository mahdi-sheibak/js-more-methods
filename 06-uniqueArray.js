const uniqueArray = (arr = []) => {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
};

console.log(uniqueArray([1, 1, 2])); // [ 1, 2 ]
console.log(uniqueArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [ 0, 1, 2, 3, 4 ]

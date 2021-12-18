const chunk = (array = [], size = 1) => {
  const chunked = [];

  for (const item of array) {
    const lastItem = chunked[chunked.length - 1];

    if (!lastItem || lastItem.length === size) {
      chunked.push([item]);
    } else {
      lastItem.push(item);
    }
  }

  return chunked;
};

console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // [[1, 2, 3, 4, 5]]

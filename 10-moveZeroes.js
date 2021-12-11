const moveZeroes = (arr = []) => {
  let tmp;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      tmp = arr.splice(i, 1);
      arr.push(tmp[0]);
    }
  }

  return arr;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]

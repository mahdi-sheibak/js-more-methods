const steps = (n) => {
  let stair = "";

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
  }
  return stair;
};

console.log(steps(2)); // # ##
console.log(steps(3)); // # ## ###
console.log(steps(4)); // # ## ### ####

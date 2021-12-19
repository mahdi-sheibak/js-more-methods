const pyramid = (n = 1, logger = console.log) => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    logger(level);
  }
};

pyramid(1, console.log);
// #
console.log("=================");
pyramid(2, console.log);
//  #
// ###
console.log("=================");
pyramid(3, console.log);
//   #
//  ###
// #####

console.log("=================");
pyramid(20, console.log);

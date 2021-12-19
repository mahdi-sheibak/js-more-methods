// const titleCase = (str = "") => {
//   return str.split(" ").reduce((prevItem, currentItem) => {
//     const word = currentItem[0].toUpperCase() + currentItem.slice(1);
//     return prevItem + word + " ";
//   }, "");
// };

// const titleCase = (str = "") => {
//   const words = [];
//   for (const word of str.split(" "))
//     words.push(word[0].toUpperCase() + word.slice(1));

//   return words.join(" ");
// };

const titleCase = (str = "") => {
  const words = [];

  str
    .split(" ")
    .forEach((word) => words.push(word[0].toUpperCase() + word.slice(1)));

  return words.join(" ");
};

console.log(titleCase("a short sentence")); // A Short Sentence
console.log(titleCase("a lazy fox")); // A Lazy Fox
console.log(titleCase("look, it is working!")); // Look, It Is Working!

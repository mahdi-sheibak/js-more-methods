// a e i o u
const vowels = (str = "") => {
  let counter = 0;

  const checker = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) if (checker.includes(char)) counter++;

  return counter;
};

console.log(vowels("Hi There!")); // 3
console.log(vowels("Why do you ask?")); // 4
console.log(vowels("Why?")); // 0

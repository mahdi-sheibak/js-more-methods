// a e i o u
const vowels = (str = "") => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(vowels("Hi There!")); // 3
console.log(vowels("Why do you ask?")); // 4
console.log(vowels("Why?")); // 0

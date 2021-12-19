const anagram = (stringA = "", stringB = "") =>
  cleanString(stringA) === cleanString(stringB);

const cleanString = (str = "") =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

console.log(anagram("rail safety", "fairy tales")); // true
console.log(anagram("RAIL! SAFETY!", "fairy tales")); // true
console.log(anagram("Hi there", "Bye there")); // false

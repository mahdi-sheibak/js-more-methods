// See This: https://en.wikipedia.org/wiki/Palindrome

const palindrome = (str = "") => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(palindrome("abba")); // true
console.log(palindrome("abcdefgh")); // false

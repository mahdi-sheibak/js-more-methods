// See This: https://en.wikipedia.org/wiki/Palindrome

const palindrome = (str = "") => {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
};

console.log(palindrome("abba")); // true
console.log(palindrome("abcdefgh")); // false

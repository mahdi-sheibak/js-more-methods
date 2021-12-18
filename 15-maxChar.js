const maxChar = (str = "") => {
  const charMap = {};
  let max = 0;
  let result = "";

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      result = char;
    }
  }

  return result;
};

console.log(maxChar("abcccccccccccccc")); // "c"
console.log(maxChar("12311111111111111")); // "1"
console.log(maxChar("Mahdiiiiiii")); // "i"

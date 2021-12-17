const atoi = (str = "") => {
  const converted = parseInt(str) !== parseInt(str) ? 0 : parseInt(str);

  if (converted > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (converted < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else {
    return converted;
  }
};

console.log(atoi("42")); // 42
console.log(atoi("      -42")); // -42
console.log(atoi("4193 with words")); // 4193
console.log(atoi("words and 987")); // 0
console.log(atoi("-91283472332")); // -2147483648 = INT_MIN (-2^31)

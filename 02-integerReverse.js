const integerReverse = (num = 0) => {
  const reversed = num.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(num);
};

console.log(integerReverse(123)); // 321
console.log(integerReverse(-321)); // -123

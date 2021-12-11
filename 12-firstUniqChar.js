const firstUniqChar = (str = "") => {
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (str.indexOf(c) === str.lastIndexOf(c)) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("Mahdi zoraghi")); // 0
console.log(firstUniqChar("reference")); // 2

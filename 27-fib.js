// See This: https://en.wikipedia.org/wiki/Fibonacci_number
const fib = (n) => {
  const result = [0, 1];

  for (let i = 2; i < n; i++) result.push(result[i - 1] + result[i - 2]);

  return result;
};

console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

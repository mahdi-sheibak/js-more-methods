const fizzBuzz = (n, logger) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      logger("fizzbuzz");
    } else if (i % 3 === 0) {
      logger("fizz");
    } else if (i % 5 === 0) {
      logger("buzz");
    } else {
      logger(i);
    }
  }
};

fizzBuzz(20, console.log); // 1 2 fizz 4 buzz fizz 7 8 fizz buzz 13 14 fizzbuzz

/**
 * n / 3 ==> fizz
 * n / 5 ==> buzz
 * (n / 3 && n / 5) = n / 15 ==> fizzbuzz
 */

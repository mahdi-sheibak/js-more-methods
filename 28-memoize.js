function memoize(fn) {
  const cache = {};

  return function (...params) {
    if (cache[params]) return cache[params];

    const result = fn.apply(this, params);
    cache[params] = result;

    return result;
  };
}

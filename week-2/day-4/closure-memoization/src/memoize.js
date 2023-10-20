function memoize(callback) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log(`Использование кэшированного результата для ${args}`);
      return cache[key];
    }

    const result = callback(...args);

    cache[key] = result;

    return result;
  };
}

module.exports = memoize;

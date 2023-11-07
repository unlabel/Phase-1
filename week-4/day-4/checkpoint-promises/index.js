function createPromise(promise) {
  return new Promise((res, rej) => {
    if (typeof promise === "number") {
      res(promise);
    }
  });
}

function createFailedPromise() {
  return new Promise((res, rej) => {
    rej(new Error("fail"));
  });
}

function waitFor(promise) {
  return new Promise((res, rej) => {
    promise
      .then((value) => {
        if (typeof value === "number") {
          res(value * 2);
        } else {
          rej("Значение не является числом");
        }
      })
      .catch((error) => {
        rej(error);
      });
  });
}

function waitForAll() {
  const promise1 = new Promise((res) => setTimeout(() => res(1)));
  const promise2 = new Promise((res) => setTimeout(() => res(2)));
  const promise3 = new Promise((res) => setTimeout(() => res(3)));

  return Promise.all([promise1, promise2, promise3]).then(
    ([value1, value2, value3]) => {
      return [value1 * 3, value2 * 3, value3 * 3];
    }
  );
}

function waitForFirstOne() {
  const promise1 = new Promise((res) => setTimeout(() => res(11), 30));
  const promise2 = new Promise((res) => setTimeout(() => res(22), 4));
  const promise3 = new Promise((res) => setTimeout(() => res(33), 50));

  return Promise.race([promise1, promise2, promise3]).then((value) => {
    return value * 4;
  });
}

module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
};

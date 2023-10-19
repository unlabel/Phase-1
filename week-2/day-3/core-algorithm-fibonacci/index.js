function fibonacci(n) {
  if (num === 0) {
    return 0;
  }
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

/**
 * 函数管道，只接受一个参数
 * @param  {...any} fns
 * @returns
 */
const compose = (...fns) => {
  if (fns.length === 0) {
    return (arg) => arg;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((pre, cur) => {
    return (arg) => {
      return cur(pre(arg));
    };
  });
};

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a);
console.log(a(1)); // 1+2+3+4=11

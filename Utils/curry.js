const curry = (fn, ...args) => {
  return (...subArgs) => {
    const params = [...args, ...subArgs];
    if (params.length >= fn.length) {
      return fn(...params);
    } else {
      return curry(fn, ...params);
    }
  };
};

const add = (a, b, c) => a + b + c;
const a = curry(add, 1);
console.log(a(2, 3));

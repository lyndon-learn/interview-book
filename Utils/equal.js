const a = [1, 2, 3];
a.join = a.shift();
console.log(a == 1 && a == 2 && a == 3);

var val = 0;
Object.defineProperty(window, "b", {
  get: function () {
    return ++val;
  },
});
console.log(b == 1 && b == 2 && b == 3);

/**
 * 闭包，通用
 */
var c = {
  i: 1,
  toString: function () {
    return c.i++;
  },
};
console.log(c == 1 && c == 2 && c == 3);

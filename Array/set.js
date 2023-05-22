const set1 = (arr) => {
  const newArr = [];
  arr.reduce((pre, cur) => {
    if (!pre.has(cur)) {
      pre.set(cur, 1);
      newArr.push(cur);
    }
    return pre;
  }, new Map());

  return newArr;
};

const testArr = [1, 1, 4, 5, 8, 9];
console.log(set1(testArr));

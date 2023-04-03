const flatDeep = (arr) => {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...flatDeep(cur)];
    } else {
      return [...pre, cur];
    }
  }, []);
};

const myFlat1 = (arr, depth = 1) => {
  let count = 0;
  let newArr = arr;
  while (newArr.some((it) => Array.isArray(it))) {
    newArr = [].concat(...newArr);
    count++;
    if (count >= depth) break;
  }
  return newArr;
};

const myFlat2 = (arr, depth = 1) => {
  return depth > 0
    ? arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
          return [...pre, ...myFlat2(cur, depth - 1)];
        } else {
          return [...pre, cur];
        }
      }, [])
    : arr;
};

const testArr = [1, 3, [4, [5, 8], 9]];
console.log(myFlat2(testArr, Infinity));

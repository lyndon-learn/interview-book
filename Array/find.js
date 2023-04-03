const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(myFind(testArr, (it) => it > 20));

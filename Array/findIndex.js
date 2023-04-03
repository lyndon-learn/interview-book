const myFindIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(myFindIndex(testArr, (it) => it > 8));

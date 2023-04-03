const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(myEvery(testArr, (it) => it > 5));

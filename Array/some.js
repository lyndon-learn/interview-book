const MySome = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(MySome(testArr, (it) => it > 8));

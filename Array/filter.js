const myFilter = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(myFilter(testArr, (it) => it > 5));

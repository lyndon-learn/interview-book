const myMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i], i, arr);
  }
  return newArr;
};

const testArr = [1, 3, 4, 5, 8, 9];
console.log(myMap(testArr, (it) => it * 2));

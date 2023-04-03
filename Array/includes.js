const myIncludes = (arr, target) => {
  const isNaN = Number.isNaN(target);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target || (isNaN && Number.isNaN(arr[i]))) {
      return true;
    }
  }
  return false;
};

const testArr = [1, 3, 4, 5, 8, 9, NaN];
console.log(myIncludes(testArr, 10));

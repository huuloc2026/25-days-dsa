function RotateArray(arr, k) {
  let arrRotated = null;
  let lastElement = arr[-1];
  console.log("lastElement::", lastElement);
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
  }
  return arr;
}

console.log(RotateArray([4, 6, 8, 9, 1], 1));

// [4,6,8,9,1]

// [1,4,6,8,9]

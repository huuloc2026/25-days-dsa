function moveZeroes(nums: number[]): void {
  //[0,1,0,3,12]
  // P i
  //[1,0,0,3,12]
  //   P   i
  let pointerElement = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[pointerElement] != nums[i]) {
      nums[pointerElement] = nums[i];
      pointerElement++;
    }
  }
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

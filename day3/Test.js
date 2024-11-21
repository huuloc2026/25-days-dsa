function removeDuplicates(nums) {
  //[0,0,1,1,1,2,2,3,3,4]
  let UniqueElement = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[UniqueElement] !== nums[i]) {
      nums[UniqueElement + 1] = nums[i];
      UniqueElement++;
    }
  }
  return UniqueElement + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

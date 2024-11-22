function singleNumber(nums) {
  //[4,1,2,1,2]
  //u i
  //[1,4,2,1,2]

  let find = 0;
  for (let i = 0; i < nums.length; i++) {
    find ^= nums[i];
  }
  return find;
}

console.log(singleNumber([4, 1, 2, 1, 2, 2]));

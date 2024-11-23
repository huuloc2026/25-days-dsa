function Test(nums1, nums2) {
  const map = {};
  const result = [];
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }
  console.log(map);

  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
}
console.log(Test([1, 2, 1, 2], [2, 2]));

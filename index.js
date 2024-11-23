function moveZeroes(nums) {
    //[0,1,0,3,12]
    // P i
    //[1,0,0,3,12]
    //   P   i
    var pointerElement = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[pointerElement] != nums[i]) {
            nums[pointerElement] = nums[i];
            pointerElement++;
        }
    }
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

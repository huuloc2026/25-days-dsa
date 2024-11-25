def moveZeroes(nums):
    #[0,1,0,3,12]
    #   L
    #     R
    # left = 0
    # for right in range(len(nums)):
    #     if nums[right]!=0:
    #         nums[left],nums[right] = nums[right],nums[left]
    #         left+=1
    #     right+=1

    #[0,1,0,3,12]
    snowball=0
    for i in range(len(nums)):
        if (nums[i]==0):
            snowball+=1;
        else:
            nums[i],nums[i-snowball] = nums[i-snowball],nums[i]


nums = [0,1,0,3,12]
moveZeroes(nums)
print(nums)
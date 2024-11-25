def twoSum(nums,target):
    #nums = [2,7,11,15], target = 9
    #   
    # i = 0 complement = 9 - 2 = 7 -> 7: 0
    # i = 1          9 - 7 = 2 -> 2: 1
    numMap = {}
    n = len(nums)

    for i in range(n):
        complement = target - nums[i]
        if complement in numMap:
            return [numMap[complement], i]
        numMap[nums[i]] = i

    return []  # No solution found

print(twoSum([2,7,11,15],9))
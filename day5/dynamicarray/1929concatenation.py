from typing import List
def getConcatenation(nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0]*len(nums)*2
        for i in range(len(nums)):
            ans[i] = nums[i]               
            ans[i+n] = nums[i]

        
        return ans
print(getConcatenation([1,2,1]))
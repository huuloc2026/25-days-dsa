class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        UniqueIndex = 0
        for i in range(1,len(nums)):
            if (nums[UniqueIndex] != nums[i]):
                nums[UniqueIndex+1] = nums[i]
                UniqueIndex+=1;
        return UniqueIndex + 1;



        
        # [0,0,1,1,1,2,2,3,3,4]
        # u    i 

        #[0,1,2,3,4,_,_,_,_,_]
from typing import List
def removeElement( nums: List[int], val: int) -> int:
        k = 0  # Pointer for the new position of elements
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                 # Overwrite the element at index `k`
                k += 1
        print(nums) 
        return k  # Return the count of non-`val` elements
print(removeElement([0,1,2,2,3,0,4,2],2))
print(removeElement([3,2,2,3],3))
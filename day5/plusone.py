from typing import List
def plusOne(digits: List[int]) -> List[int]:
    #[1,2,3] 
    #[1,2,4]
    n = len(digits)
    for i in range(n-1, -1, -1):
        digits[i]+=1
        if digits[i] < 10:  # No carry-over needed 
            return digits
        digits[i]=0
    return [1]  + digits
        
print(plusOne([9,9,9,9]))